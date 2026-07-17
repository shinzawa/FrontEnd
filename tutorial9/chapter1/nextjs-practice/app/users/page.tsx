interface User {
  id: number;
  name: string;
  email: string;
  company: {
    name: string;
  };
}

async function getUsers(): Promise<User[]> {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  if (!res.ok) {
    throw new Error('Failed to fetch users');
  }
  return res.json();
}

export default async function UsersPage() {
  const users = await getUsers();

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-4">Users</h1>
      <p className="text-gray-600 mb-4">
        これはServer Componentでのデータ取得の例です。
        fetchはサーバー上で実行され、結果がHTMLとしてクライアントに送信されます。
      </p>

      <ul className="space-y-4">
        {users.map((user) => (
          <li 
            key={user.id}
            className="p-4 border rounded-lg hover:bg-gray-50"
          >
            <h2 className="font-bold">{user.name}</h2>
            <p className="text-gray-600">{user.email}</p>
            <p className="text-sm text-gray-500">{user.company.name}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}