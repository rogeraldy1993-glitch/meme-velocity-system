export type Token = {
  token: string;
  symbol: string;
  contractAddress: string;
  marketCap: number;
  volume24h: number;
  liquidity: number;
  pairAgeMinutes: number;
  mentionCount24h: number;
  mentionVelocity: number;
  holderGrowth: number;
  influencerCount: number;
  smartWalletActivity: number;
  narrativeTag: string;
  rugRisk: number;
  topWalletOwnership: number;
};

export type ScoreBreakdown = {
  momentum: number;
  earlyOpportunity: number;
  narrative: number;
  safety: number;
  overall: number;
  avoid: boolean;
  avoidReasons: string[];
  alertTier: 'Tier 1' | 'Tier 2' | 'Tier 3' | 'Watch';
};
