// 作成したコンポーネントをインポート
import WelcomeMessage from "./components/WelcomeMessage";
import UserProfile from "./components/UserProfile";

function App() {
  return (
    <>
      <WelcomeMessage />
      {/* ここにコンポーネントを配置していく */}
      <UserProfile />
      <UserProfile />
      <UserProfile />
    </>
  );
}

export default App;