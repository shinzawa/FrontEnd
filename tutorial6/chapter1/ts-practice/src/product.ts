// 商品の型定義
interface Product {
    name: string;
    price: number;
    quantity: number;
}

// 合計金額を計算する関数（税率はデフォルト10%）
function calculatequantity(products: Product[], taxRate: number = 0.1): number {
    const subtotal = products.reduce((acc, product) => {
        return acc + product.price * product.quantity;
    }, 0);

    const total = subtotal * (1 + taxRate);
    return Math.floor(total);
}

// テスト
const cart: Product[] = [
    { name: "TypeScript入門書", price: 2980, quantity: 1 },
    { name: "プログラミングノート", price: 500, quantity: 3 },
    { name: "マウスパッド", price: 1200, quantity: 1 },
];

console.log(`合計金額（税込）: ${calculatequantity(cart)}`); // 合計金額（税率10%）: 5390
console.log(`合計金額（税率8%）: ${calculatequantity(cart, 0.08)}`); // 合計金額（税率8%）: 5320
