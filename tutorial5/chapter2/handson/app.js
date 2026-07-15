async function fetchPosts() {
  const postsContainer = document.querySelector("#posts-container");

  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await response.json();

    posts.forEach(post => {
      // カード要素を作成
      const card = document.createElement("div");
      card.classList.add("post-card");

      // タイトル要素を作成
      const title = document.createElement("h2");
      title.textContent = post.title;

      // 本文要素を作成
      const body = document.createElement("p");
      body.textContent = post.body;

      // カードにタイトルと本文を追加
      card.appendChild(title);
      card.appendChild(body);

      // コンテナにカードを追加
      postsContainer.appendChild(card);
    });

  } catch (error) {
    console.error("投稿の取得に失敗しました:", error);
    postsContainer.textContent = "投稿の取得に失敗しました。";
  }
}

fetchPosts();