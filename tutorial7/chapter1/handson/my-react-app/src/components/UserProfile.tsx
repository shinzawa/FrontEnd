function UserProfile() {
  return (
    // ルール1: 単一のルート要素で囲む
    // ルール3: classではなくclassNameを使う
    <div className="user-profile">
      <p>名前: 山田 太郎</p>
      <p>趣味: プログラミング</p>
      {/* ルール2: 閉じタグを忘れない */}
      <hr /> 
    </div>
  );
}

export default UserProfile;