'use client';

import { useState } from 'react';

export default function CounterPage() {
  const [count, setCount] = useState(0);

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-4">Counter</h1>
      <p className="text-gray-600 mb-4">
        これはClient Componentです。&apos;use client&apos;ディレクティブにより、
        クライアント側でインタラクティブに動作します。
      </p>

      <div className="flex items-center gap-4 mt-8">
        <button
          onClick={() => setCount(count - 1)}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          -1
        </button>
        <span className="text-4xl font-bold">{count}</span>
        <button
          onClick={() => setCount(count + 1)}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          +1
        </button>
      </div>
    </main>
  );
}