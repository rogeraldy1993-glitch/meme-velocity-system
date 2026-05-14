import { ScoreBreakdown, Token } from './types';

const clamp = (n: number, min = 0, max = 100) => Math.max(min, Math.min(max, n));

export function scoreToken(token: Token): ScoreBreakdown {
  const momentum = clamp((token.mentionVelocity * 20) + (token.volume24h / 50000) + token.smartWalletActivity * 3);
  const earlyOpportunity = clamp((100 - token.marketCap / 100000) + (token.holderGrowth * 2));
  const narrative = clamp((token.influencerCount * 12) + (token.mentionCount24h / 20));
  const safety = clamp(100 - token.rugRisk - (token.topWalletOwnership * 2));

  const overall = Math.round((momentum * 0.4) + (earlyOpportunity * 0.25) + (narrative * 0.2) + (safety * 0.15));

  const avoidReasons: string[] = [];
  if (token.liquidity < 70000) avoidReasons.push('Liquidity under 70,000');
  if (token.volume24h < 250000) avoidReasons.push('Volume under 250,000');
  if (token.pairAgeMinutes < 30) avoidReasons.push('Age under 30 minutes');
  if (token.topWalletOwnership > 15) avoidReasons.push('Top wallet ownership over 15%');
  if (token.mentionCount24h === 0) avoidReasons.push('Zero social engagement');

  const avoid = avoidReasons.length > 0;
  const tier1 = token.mentionVelocity >= 2 && token.volume24h > 1000000 && token.marketCap < 5000000;
  const tier2 = token.smartWalletActivity >= 6 && token.influencerCount >= 5 && token.holderGrowth >= 10;
  const tier3 = token.mentionCount24h >= 500 && token.influencerCount >= 8;

  let alertTier: ScoreBreakdown['alertTier'] = 'Watch';
  if (tier1) alertTier = 'Tier 1';
  else if (tier2) alertTier = 'Tier 2';
  else if (tier3) alertTier = 'Tier 3';

  return { momentum, earlyOpportunity, narrative, safety, overall, avoid, avoidReasons, alertTier };
}
