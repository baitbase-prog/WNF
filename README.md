git init
echo "# init" > README.md
git add .
git commit -m "init"
git branch -M main
git remote add origin <YOUR_REPO_URL>
git push -u origin main

## Deployment
This repository includes a GitHub Actions workflow that builds and pushes a Docker image to GitHub Container Registry on every push to `main`, then deploys to a remote VPS over SSH using `docker compose`. The image is published as `ghcr.io/baitbase-prog/windy-leads-bot:latest` and the deploy step runs `docker compose pull` followed by `docker compose up -d` on the server.

### Required environment variables
Configure these in your deployment environment (for example, in your server `.env` or compose file):

- `BOT_TOKEN`
- `MANAGER_CHAT_ID`
- Any additional app-specific variables your bot expects (for example: database URLs, API keys, etc.)

### Required GitHub secrets
Set the following secrets in the GitHub repository settings so the workflow can deploy:

- `DEPLOY_HOST`
- `DEPLOY_USER`
- `DEPLOY_SSH_KEY`
