import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-8">Next.js Practice</h1>

      <nav className="space-y-4">
        <Link 
          href="/about" 
          className="block p-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          About Page →
        </Link>
        <Link 
          href="/counter" 
          className="block p-4 bg-green-500 text-white rounded-lg hover:bg-green-600"
        >
          Counter Page (Client Component) →
        </Link>
        <Link 
          href="/users" 
          className="block p-4 bg-purple-500 text-white rounded-lg hover:bg-purple-600"
        >
          Users Page (Server Component) →
        </Link>
      </nav>
    </main>
  );
}