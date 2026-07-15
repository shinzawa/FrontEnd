console.log("Hello from TS");
// 成功時のレスポンス型。データ部分をジェネリクスTで受け取る
interface ApiSuccessResponse<T> {
  status: 'success';
  data: T;
}

// 失敗時のレスポンス型
interface ApiErrorResponse {
  status: 'error';
  message: string;
}

// 2. Union型の作成
type ApiResponse<T> = ApiSuccessResponse<T> | ApiErrorResponse;

// 3. レスポンスを処理するジェネリック関数の実装
function handleResponse<T>(response: ApiResponse<T>): void {
  // `status`プロパティの値に基づいて型を絞り込む (Discriminated Unions)
  if (response.status === 'success') {
    // このブロック内では、responseは `ApiSuccessResponse<T>` 型として扱われる
    console.log("Success! Data:", response.data);
  } else {
    // このブロック内では、responseは `ApiErrorResponse` 型として扱われる
    console.log("Error! Message:", response.message);
  }
}

// 4. 動作確認

// --- サンプルデータ ---
interface User {
  id: number;
  name: string;
}

interface Product {
  id: string;
  name: string;
  price: number;
}


// --- 成功ケースのシミュレーション ---
const userResponse: ApiResponse<User> = {
  status: 'success',
  data: { id: 1, name: 'Taro Yamada' }
};

const productResponse: ApiResponse<Product> = {
  status: 'success',
  data: { id: 'abc-123', name: 'Laptop', price: 150000 }
};

// --- 失敗ケースのシミュレーション ---
const errorResponse: ApiResponse<never> = { // データがないのでneverを指定
  status: 'error',
  message: 'Could not fetch data from the server.'
};

console.log("--- Handling User Response ---");
handleResponse(userResponse);

console.log("\n--- Handling Product Response ---");
handleResponse(productResponse);

console.log("\n--- Handling Error Response ---");
handleResponse(errorResponse);

