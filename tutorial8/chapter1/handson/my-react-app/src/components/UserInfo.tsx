import { useState, useEffect } from "react";

// APIから返ってくるユーザーデータの型
type User = {
    id: number;
    name: string;
    username: string;
    email: string;
};

function UserInfo() {
    const [userId, setUserId] = useState(1);
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    
    useEffect(() => {
        // AbortControllerでクリーンアップを実装
        const controller = new AbortController();
        // APIからユーザー情報を取得するロジック
        const fetchUser = async () => {
            setLoading(true);
            setError(null);
            try {
                const response = await fetch(
                    `https://jsonplaceholder.typicode.com/users/${userId}`,
                    { signal: controller.signal }
                );
                if (!response.ok) {
                    throw new Error("ユーザー情報の取得に失敗しました");
                }
                const data= await response.json();
                setUser(data);
            } catch (error) {
                if (error instanceof Error) {
                    if (error.name === "AbortError") {
                        console.log("Fetch aborted");
                    } else {
                        setError(error.message);
                    }
                }
            } finally {
                setLoading(false);
            }
        };
        
        fetchUser();
        // クリーンアップ関数でfetchを中止
        return () => {
            controller.abort();
        }; 
    }, [userId]);
    
    if (loading) {
        return <div>ロード中...</div>;
    }
    
    const handleNextUser = () => {
        setUserId(id => id + 1);
    };
    
    return (
        <div>
        <h2>ユーザー情報</h2>
        <p>User ID: {userId}</p>
        
        {/* 条件付きレンダリング */}
        {loading && <p>Loading...</p>}
        {error && <p style={{ color: "red" }}>{error}</p>}
        {user && (
            <div>
            <p><strong>名前:</strong> {user.name}</p>
            <p><strong>ユーザー名:</strong> {user.username}</p>
            <p><strong>Email:</strong> {user.email}</p>
            </div>
        )}
        
        <button onClick={handleNextUser} disabled={loading}>
        {loading ? "読み込み中..." : "次のユーザーへ"}
        </button>
        </div>
    );
}

export default UserInfo;