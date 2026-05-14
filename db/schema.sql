CREATE TABLE tokens (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  token TEXT NOT NULL,
  symbol TEXT UNIQUE NOT NULL,
  contract_address TEXT NOT NULL,
  market_cap INTEGER NOT NULL,
  volume_24h INTEGER NOT NULL,
  liquidity INTEGER NOT NULL,
  pair_age_minutes INTEGER NOT NULL,
  mention_count_24h INTEGER NOT NULL,
  mention_velocity REAL NOT NULL,
  holder_growth REAL NOT NULL,
  influencer_count INTEGER NOT NULL,
  smart_wallet_activity INTEGER NOT NULL,
  narrative_tag TEXT NOT NULL,
  rug_risk REAL NOT NULL,
  top_wallet_ownership REAL NOT NULL,
  updated_at TEXT NOT NULL
);
