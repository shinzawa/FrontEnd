// 作成したコンポーネントをインポート
import WelcomeMessage from "./components/WelcomeMessage";
import UserProfile from "./components/UserProfile";
import Card from "./components/Card";

function App() {
  return (
    <>
      <WelcomeMessage />
      {/* ここにコンポーネントを配置していく */}
      <Card>
        <UserProfile name="山田 太郎" hobby="プログラミング" />
      </Card>
      <Card>
        <UserProfile name="佐藤 花子" hobby="読書" bio="最近はJavaScriptに興味があります。" />
      </Card>
      <Card>
        <UserProfile name="鈴木 一郎" hobby="映画鑑賞" />
      </Card>
    </>
  );
}

export default App;