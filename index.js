require('dotenv').config();

const fs = require('fs');
const path = require('path');
const { Telegraf, Markup, session } = require('telegraf');

const {
  BOT_TOKEN,
  MANAGER_CHAT_ID,
  MANAGER_USERNAME,
  CHANNEL_URL,
  GROUP_URL,
  WEBSITE_URL
} = process.env;

if (!BOT_TOKEN) {
  throw new Error('BOT_TOKEN is required');
}

const bot = new Telegraf(BOT_TOKEN);
const LEADS_FILE = path.join(__dirname, 'data', 'leads.json');

const QUESTIONS = [
  {
    key: 'language',
    label: 'Preferred language?',
    options: ['English', 'Spanish', 'Russian', 'Other']
  },
  {
    key: 'vertical',
    label: 'Project vertical?',
    options: ['DeFi', 'GameFi', 'NFT', 'AI', 'Infrastructure', 'Other']
  },
  {
    key: 'cryptoCheck',
    label: 'Is it a crypto-native project?',
    options: ['Yes', 'No', 'Not sure']
  },
  {
    key: 'category',
    label: 'Which category fits best?',
    options: ['Token launch', 'Community growth', 'Partnerships', 'PR', 'Product marketing', 'Other']
  },
  {
    key: 'stage',
    label: 'Current project stage?',
    options: ['Idea', 'MVP', 'Live', 'Scaling']
  },
  {
    key: 'focus',
    label: 'Primary focus?',
    options: ['Awareness', 'Acquisition', 'Retention', 'Fundraising', 'Ecosystem growth']
  },
  {
    key: 'geo',
    label: 'Primary geography?',
    options: ['Global', 'Asia', 'Europe', 'North America', 'LATAM', 'MENA']
  },
  {
    key: 'assets',
    label: 'Share any existing assets (pitch deck, brand kit, docs). Send files now, then tap Done.'
  },
  {
    key: 'deadline',
    label: 'Target deadline?'
  },
  {
    key: 'budget',
    label: 'Estimated budget?'
  }
];

const deadlineOptionsByStage = {
  Idea: ['1-2 months', '3-6 months', 'Flexible', 'Custom date'],
  MVP: ['2-4 weeks', '1-2 months', 'Flexible', 'Custom date'],
  Live: ['ASAP (2 weeks)', '1 month', '2-3 months', 'Custom date'],
  Scaling: ['ASAP (2 weeks)', '1 month', 'Quarterly', 'Custom date']
};

const budgetOptionsByStage = {
  Idea: ['<$5k', '$5k-$15k', '$15k-$50k', 'Custom budget'],
  MVP: ['$5k-$15k', '$15k-$50k', '$50k-$100k', 'Custom budget'],
  Live: ['$15k-$50k', '$50k-$100k', '$100k+', 'Custom budget'],
  Scaling: ['$50k-$100k', '$100k-$250k', '$250k+', 'Custom budget']
};

const startSessionState = () => ({
  stepIndex: 0,
  answers: {},
  assets: [],
  awaitingCustom: null,
  awaitingAssets: false,
  editing: false
});

const ensureLeadsFile = () => {
  const dir = path.dirname(LEADS_FILE);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  if (!fs.existsSync(LEADS_FILE)) {
    fs.writeFileSync(LEADS_FILE, '[]');
  }
};

const loadLeads = () => {
  ensureLeadsFile();
  try {
    return JSON.parse(fs.readFileSync(LEADS_FILE, 'utf8'));
  } catch (error) {
    return [];
  }
};

const saveLead = (lead) => {
  const leads = loadLeads();
  leads.push(lead);
  fs.writeFileSync(LEADS_FILE, JSON.stringify(leads, null, 2));
};

const makeButtons = (key, options) => {
  const rows = options.map((option) => [Markup.button.callback(option, `answer:${key}:${option}`)]);
  return Markup.inlineKeyboard(rows);
};

const getDeadlineOptions = (stage) => deadlineOptionsByStage[stage] || deadlineOptionsByStage.Idea;
const getBudgetOptions = (stage) => budgetOptionsByStage[stage] || budgetOptionsByStage.Idea;

const computeReadinessScore = (answers, assets) => {
  let score = 4;
  const stageScores = { Idea: 1, MVP: 2, Live: 3, Scaling: 4 };
  score += stageScores[answers.stage] || 1;

  if (answers.cryptoCheck === 'Yes') score += 1;
  if (answers.cryptoCheck === 'Not sure') score += 0.5;

  if (assets.length > 0) score += 1.5;

  const budgetScore = (answers.budget || '').includes('$100k') || (answers.budget || '').includes('$250k') ? 2 : 1;
  score += budgetScore;

  if ((answers.deadline || '').includes('ASAP')) score += 1;

  return Math.min(10, Math.round(score));
};

const summarizeLead = (answers) => [
  `Language: ${answers.language}`,
  `Vertical: ${answers.vertical}`,
  `Crypto: ${answers.cryptoCheck}`,
  `Category: ${answers.category}`,
  `Stage: ${answers.stage}`,
  `Focus: ${answers.focus}`,
  `Geo: ${answers.geo}`,
  `Deadline: ${answers.deadline}`,
  `Budget: ${answers.budget}`
].join('\n');

const generatePlan = (answers, assets) => {
  const readinessScore = computeReadinessScore(answers, assets);
  const track = readinessScore >= 8 ? 'Growth Accelerator' : readinessScore >= 6 ? 'Launch Boost' : 'Discovery Sprint';
  const channelMix = [
    'Community & partnerships',
    answers.stage === 'Live' || answers.stage === 'Scaling' ? 'Performance ads' : 'Organic social',
    'PR & thought leadership'
  ];
  const timeline = answers.deadline?.includes('ASAP') ? '2-week sprint + 4-week scale' : 'Discovery + execution in 6-8 weeks';
  const summary = `We will focus on ${answers.focus?.toLowerCase()} for a ${answers.stage?.toLowerCase()} project targeting ${answers.geo} audiences.`;

  return {
    readinessScore,
    track,
    channelMix,
    timeline,
    summary
  };
};

const getCtaKeyboard = () => {
  const rows = [
    [Markup.button.callback('Send request', 'send_request')],
    [Markup.button.callback('Edit answers', 'edit_answers')],
    [Markup.button.url('Message manager', MANAGER_USERNAME ? `https://t.me/${MANAGER_USERNAME}` : 'https://t.me')],
    [Markup.button.url('Channel', CHANNEL_URL || 'https://t.me')],
    [Markup.button.url('Group', GROUP_URL || 'https://t.me')],
    [Markup.button.url('Website', WEBSITE_URL || 'https://example.com')]
  ];
  return Markup.inlineKeyboard(rows);
};

const sendPlan = async (ctx) => {
  const { answers, assets } = ctx.session;
  const plan = generatePlan(answers, assets);
  const planText = [
    '✅ Mini marketing plan',
    '',
    `Summary: ${plan.summary}`,
    `Recommended track: ${plan.track}`,
    `Readiness score: ${plan.readinessScore}/10`,
    `Channel mix: ${plan.channelMix.join(', ')}`,
    `Timeline: ${plan.timeline}`,
    '',
    'If everything looks good, send the request or edit any answer.'
  ].join('\n');

  await ctx.reply(planText, getCtaKeyboard());
};

const askQuestion = async (ctx) => {
  const question = QUESTIONS[ctx.session.stepIndex];
  if (!question) {
    await sendPlan(ctx);
    return;
  }

  if (question.key === 'assets') {
    ctx.session.awaitingAssets = true;
    await ctx.reply(question.label, Markup.inlineKeyboard([
      [Markup.button.callback('Skip assets', 'skip_assets')],
      [Markup.button.callback('Done uploading', 'done_assets')]
    ]));
    return;
  }

  if (question.key === 'deadline') {
    const options = getDeadlineOptions(ctx.session.answers.stage);
    await ctx.reply(question.label, makeButtons('deadline', options));
    return;
  }

  if (question.key === 'budget') {
    const options = getBudgetOptions(ctx.session.answers.stage);
    await ctx.reply(question.label, makeButtons('budget', options));
    return;
  }

  await ctx.reply(question.label, makeButtons(question.key, question.options));
};

const advanceStep = (ctx) => {
  if (ctx.session.editing) {
    ctx.session.editing = false;
    return sendPlan(ctx);
  }
  ctx.session.stepIndex += 1;
  return askQuestion(ctx);
};

bot.use(session());

bot.start(async (ctx) => {
  ctx.session = startSessionState();
  await ctx.reply('Welcome to the Windy leads bot! Answer a few quick questions to get started.');
  await askQuestion(ctx);
});

bot.command('restart', async (ctx) => {
  ctx.session = startSessionState();
  await ctx.reply('Restarted. Let\'s begin again.');
  await askQuestion(ctx);
});

bot.on(['document', 'photo'], async (ctx) => {
  if (!ctx.session.awaitingAssets) return;

  if (ctx.message.document) {
    ctx.session.assets.push({
      type: 'document',
      fileId: ctx.message.document.file_id,
      fileName: ctx.message.document.file_name
    });
  }

  if (ctx.message.photo) {
    const photo = ctx.message.photo[ctx.message.photo.length - 1];
    ctx.session.assets.push({
      type: 'photo',
      fileId: photo.file_id,
      fileName: 'photo.jpg'
    });
  }

  await ctx.reply('Asset saved. Send more files or tap Done uploading.');
});

bot.on('text', async (ctx) => {
  const { awaitingCustom } = ctx.session;
  if (!awaitingCustom) return;

  const text = ctx.message.text.trim();
  ctx.session.answers[awaitingCustom] = text;
  ctx.session.awaitingCustom = null;
  ctx.session.stepIndex = QUESTIONS.findIndex((question) => question.key === awaitingCustom) + 1;
  await advanceStep(ctx);
});

bot.action('skip_assets', async (ctx) => {
  ctx.session.awaitingAssets = false;
  ctx.session.assets = [];
  ctx.session.stepIndex = QUESTIONS.findIndex((question) => question.key === 'assets') + 1;
  await ctx.answerCbQuery();
  await askQuestion(ctx);
});

bot.action('done_assets', async (ctx) => {
  ctx.session.awaitingAssets = false;
  ctx.session.stepIndex = QUESTIONS.findIndex((question) => question.key === 'assets') + 1;
  await ctx.answerCbQuery();
  await askQuestion(ctx);
});

bot.action(/answer:(.+):(.+)/, async (ctx) => {
  const key = ctx.match[1];
  const value = ctx.match[2];
  await ctx.answerCbQuery();

  if (['Other', 'Custom date', 'Custom budget'].includes(value)) {
    ctx.session.awaitingCustom = key;
    await ctx.reply(`Please type your custom ${key}.`);
    return;
  }

  ctx.session.answers[key] = value;
  ctx.session.stepIndex = QUESTIONS.findIndex((question) => question.key === key);
  await advanceStep(ctx);
});

bot.action('edit_answers', async (ctx) => {
  await ctx.answerCbQuery();
  const rows = QUESTIONS.filter((question) => question.key !== 'assets').map((question) => {
    const answer = ctx.session.answers[question.key] || 'Not set';
    return [Markup.button.callback(`${question.label} (${answer})`, `edit:${question.key}`)];
  });
  rows.push([Markup.button.callback('Edit assets', 'edit:assets')]);
  await ctx.reply('Pick the answer you want to edit.', Markup.inlineKeyboard(rows));
});

bot.action(/edit:(.+)/, async (ctx) => {
  const key = ctx.match[1];
  await ctx.answerCbQuery();
  ctx.session.editing = true;
  ctx.session.stepIndex = QUESTIONS.findIndex((question) => question.key === key);

  if (key === 'assets') {
    ctx.session.assets = [];
  }

  await askQuestion(ctx);
});

bot.action('send_request', async (ctx) => {
  await ctx.answerCbQuery();

  const lead = {
    id: `lead_${Date.now()}`,
    createdAt: new Date().toISOString(),
    answers: ctx.session.answers,
    assets: ctx.session.assets
  };

  saveLead(lead);

  if (MANAGER_CHAT_ID) {
    const summary = summarizeLead(ctx.session.answers);
    const plan = generatePlan(ctx.session.answers, ctx.session.assets);
    const message = [
      '📩 New Windy lead',
      '',
      summary,
      '',
      `Readiness score: ${plan.readinessScore}/10`,
      `Recommended track: ${plan.track}`
    ].join('\n');

    await ctx.telegram.sendMessage(MANAGER_CHAT_ID, message);

    for (const asset of ctx.session.assets) {
      if (asset.type === 'photo') {
        await ctx.telegram.sendPhoto(MANAGER_CHAT_ID, asset.fileId);
      } else {
        await ctx.telegram.sendDocument(MANAGER_CHAT_ID, asset.fileId, { filename: asset.fileName });
      }
    }
  }

  await ctx.reply('Your request has been sent! A manager will reach out soon.', getCtaKeyboard());
});

bot.launch();

process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
