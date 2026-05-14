import { mockTokens } from '@/data/mockTokens';
import { scoreToken } from '@/lib/scoring';

export default function TokenPage({ params }: { params: { symbol: string } }) {
  const token = mockTokens.find((t) => t.symbol === params.symbol);
  if (!token) return <div>Token not found.</div>;
  const score = scoreToken(token);

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">{token.token} ({token.symbol})</h1>
      <p>Overall Score: <strong>{score.overall}</strong></p>
      <ul className="list-disc pl-6">
        <li>Momentum ({score.momentum}) = mention velocity, volume, smart wallet activity.</li>
        <li>Early Opportunity ({score.earlyOpportunity}) = smaller cap + holder growth.</li>
        <li>Narrative ({score.narrative}) = influencer and social mention strength.</li>
        <li>Safety ({score.safety}) = rug risk and ownership concentration penalties.</li>
      </ul>
      {score.avoid && <div className="text-red-300">Avoid flags: {score.avoidReasons.join(', ')}</div>}
    </div>
  );
}
