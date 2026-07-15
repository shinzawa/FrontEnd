// 統計情報の型定義
interface Stats {
    sum: number;
    average: number;
    min: number;
    max: number;
}

// 統計情報を計算する関数
function calculateStats(numbers: number[]): Stats {
    if (numbers.length === 0) {
        return { sum: 0, average: 0, min: 0, max: 0 };
    }

    const sum = numbers.reduce((acc, num) => acc + num, 0);
    const average = sum / numbers.length;
    const min = Math.min(...numbers);
    const max = Math.max(...numbers);

    return { sum, average, min, max };
}
// テスト
const scores: number[] = [85, 90, 78, 92, 88];
const result = calculateStats(scores);


console.log(`合計: ${result.sum}`);
console.log(`平均: ${result.average}`);
console.log(`最大: ${result.max}`);
console.log(`最小: ${result.min}`);
// { sum: 150, average: 30, min: 10, max: 50 }