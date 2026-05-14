# Deployment & Launch Checklist

## 1) Required environment variables
- `NODE_ENV=production`
- `NEXT_PUBLIC_APP_NAME="Meme Velocity Intelligence System"`
- `DATABASE_URL="file:./prod.sqlite"` (SQLite path)
- `NEXT_PUBLIC_SOLANA_CHAIN="mainnet-beta"`
- `ALERT_WEBHOOK_URL` (Slack/Discord webhook)
- `JWT_SECRET` (if auth is added)
- `ENCRYPTION_KEY` for secrets at rest

## 2) API key setup
- Create read-only keys for future social/market data providers.
- Store in Vercel Project Settings → Environment Variables.
- Never commit keys to git.
- Rotate keys every 60–90 days.

## 3) Vercel deployment steps
1. Push repository to GitHub.
2. In Vercel: **Add New Project** → import repo.
3. Set framework preset to **Next.js**.
4. Add all production env vars.
5. Set Build Command: `npm run build`.
6. Set Output: `.next` (default).
7. Deploy and validate logs.

## 4) Production build verification
- Run locally: `npm ci && npm run build && npm run start`.
- Confirm dashboard, alerts, settings, and token detail routes load.
- Verify scoring weights: Momentum 40%, Early 25%, Narrative 20%, Safety 15%.
- Verify hard filters mark risky tokens as avoid.

## 5) Monitoring recommendations
- Enable Vercel Analytics + Speed Insights.
- Add Sentry for runtime exceptions.
- Add uptime monitor (Pingdom/UptimeRobot) for `/` and `/alerts`.
- Track API latency, error rate, and stale data age.

## 6) Scaling recommendations
- Add caching for token snapshots (ISR or scheduled updates).
- Move from SQLite to Postgres when write volume grows.
- Queue ingestion jobs (cron + worker) for social and market feeds.
- Add rate limiting on public endpoints.

## 7) Security considerations
- Enforce HTTPS-only and secure headers (CSP, HSTS, X-Frame-Options).
- Validate/sanitize all API inputs.
- Use least-privilege API keys.
- Store secrets only in environment manager.
- Audit dependencies monthly.

## 8) Backup/fallback procedures
- Daily SQLite snapshot backup.
- Keep last known good token snapshot for read fallback.
- Define rollback: redeploy previous successful Vercel build.
- Keep status page + incident runbook.

## 9) Post-launch testing plan
- Smoke test routes and scoring output every deploy.
- Validate alert tiers using seeded scenarios.
- Check performance budgets (LCP/TTFB) from multiple regions.
- Run weekly regression on scoring engine and hard filters.
- Review false positive/negative alerts and tune thresholds.
