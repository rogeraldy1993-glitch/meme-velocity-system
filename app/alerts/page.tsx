import { mockTokens } from '@/data/mockTokens';
import { scoreToken } from '@/lib/scoring';

export default function AlertsPage() {
  const alerts = mockTokens.map((t) => ({ t, s: scoreToken(t) })).filter(({ s }) => s.alertTier !== 'Watch');
  return <div><h1 className="text-2xl font-bold mb-4">Alerts</h1>{alerts.map(({ t, s }) => <div key={t.symbol} className="p-3 border border-slate-800 rounded mb-2">{t.token}: {s.alertTier}</div>)}</div>;
}
