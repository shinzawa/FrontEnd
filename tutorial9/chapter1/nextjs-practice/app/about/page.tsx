export default function AboutPage() {
  // Server Componentなので、サーバー上で実行される
  console.log('This runs on the server');

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-4">About</h1>
      <p className="text-gray-600 mb-4">
        これはServer Componentです。サーバー上でレンダリングされ、
        クライアントにはHTMLのみが送信されます。
      </p>
      <p className="text-gray-600">
        ビルド時刻: {new Date().toLocaleString('ja-JP')}
      </p>
    </main>
  );
}