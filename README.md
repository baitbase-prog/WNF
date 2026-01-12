# Windy Leads Bot

A Telegram bot that collects lead details and produces a mini marketing plan for Windy.

## Requirements

- Node.js 20+
- A Telegram bot token

## Setup

1. Install dependencies:

```bash
npm install
```

2. Create a `.env` file from the template and fill in values:

```bash
cp .env.example .env
```

Required environment variables:

- `BOT_TOKEN`
- `MANAGER_CHAT_ID`
- `MANAGER_USERNAME`
- `CHANNEL_URL`
- `GROUP_URL`
- `WEBSITE_URL`

3. Run the bot locally:

```bash
npm start
```

## Docker

Build and run the bot with Docker:

```bash
docker build -t windy-leads-bot .
docker run --env-file .env windy-leads-bot
```

## Lead storage

Leads are appended to `data/leads.json`. In production, mount a volume if you want to persist data outside the container.
