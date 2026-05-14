import './globals.css';
import Link from 'next/link';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="border-b border-slate-800 p-4 flex gap-4">
          <Link href="/">Dashboard</Link>
          <Link href="/alerts">Alerts</Link>
          <Link href="/settings">Settings</Link>
        </header>
        <main className="p-6">{children}</main>
      </body>
    </html>
  );
}
