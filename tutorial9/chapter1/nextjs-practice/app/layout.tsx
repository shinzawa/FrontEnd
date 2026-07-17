import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Next.js Practice',
  description: 'Next.jsの学習用プロジェクト',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <header className="bg-gray-800 text-white p-4">
          <nav className="max-w-4xl mx-auto flex gap-4">
            <Link href="/" className="hover:text-gray-300">Home</Link>
            <Link href="/about" className="hover:text-gray-300">About</Link>
            <Link href="/counter" className="hover:text-gray-300">Counter</Link>
            <Link href="/users" className="hover:text-gray-300">Users</Link>
          </nav>
        </header>
        <div className="max-w-4xl mx-auto">
          {children}
        </div>
      </body>
    </html>
  );
}