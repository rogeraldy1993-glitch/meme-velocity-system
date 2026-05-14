import Link from 'next/link';
import { mockTokens } from '@/data/mockTokens';
import { scoreToken } from '@/lib/scoring';

export default function Dashboard() {
  const rows = mockTokens.map((token) => ({ token, score: scoreToken(token) })).sort((a, b) => b.score.overall - a.score.overall);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Meme Velocity Intelligence System</h1>
      <div className="overflow-auto">
        <table className="w-full text-sm">
          <thead><tr>{['Token','Symbol','Contract Address','Market Cap','Volume 24h','Liquidity','Pair Age','Mention Count 24h','Mention Velocity','Holder Growth','Influencer Count','Smart Wallet Activity','Narrative Tag','Rug Risk','Overall Score','Alert Tier'].map(h => <th key={h} className="text-left p-2">{h}</th>)}</tr></thead>
          <tbody>
            {rows.map(({ token, score }) => (
              <tr key={token.symbol} className="border-t border-slate-800">
                <td className="p-2"><Link className="underline" href={`/token/${token.symbol}`}>{token.token}</Link></td>
                <td className="p-2">{token.symbol}</td><td className="p-2">{token.contractAddress}</td><td className="p-2">${token.marketCap.toLocaleString()}</td>
                <td className="p-2">${token.volume24h.toLocaleString()}</td><td className="p-2">${token.liquidity.toLocaleString()}</td><td className="p-2">{token.pairAgeMinutes}m</td>
                <td className="p-2">{token.mentionCount24h}</td><td className="p-2">{token.mentionVelocity.toFixed(1)}x</td><td className="p-2">{token.holderGrowth}%</td>
                <td className="p-2">{token.influencerCount}</td><td className="p-2">{token.smartWalletActivity}</td><td className="p-2">{token.narrativeTag}</td>
                <td className="p-2">{token.rugRisk}</td><td className="p-2 font-semibold">{score.overall}</td>
                <td className="p-2"><span className="px-2 py-1 rounded bg-slate-800">{score.alertTier}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
