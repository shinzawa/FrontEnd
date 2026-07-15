type UserProfileProps = {
  name: string;
  hobby: string;
  bio?: string; // 任意のプロパティ
};

function UserProfile({ name, hobby, bio }: UserProfileProps) {
  return (
    // ルール1: 単一のルート要素で囲む
    // ルール3: classではなくclassNameを使う
    <div>
      <p>名前: {name}</p>
      <p>趣味: {hobby}</p>
      {bio && <p>自己紹介: {bio}</p>}
      {/* ルール2: 閉じタグを忘れない */}
      <hr /> 
    </div>
  );
}

export default UserProfile;