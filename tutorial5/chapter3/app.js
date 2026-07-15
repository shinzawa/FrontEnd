// 各UI要素を取得
const postsContainer = document.querySelector("#posts-container");
const loading = document.querySelector("#loading");
const error = document.querySelector("#error");
const empty = document.querySelector("#empty");

// UIの状態を更新するヘルパー関数
function showElement(element) {
  element.style.display = 'block';
}
function hideElement(element) {
  element.style.display = 'none';
}

async function fetchPosts() {
  // --- 1. ローディング状態 --- 
  showElement(loading);
  hideElement(postsContainer);
  hideElement(error);
  hideElement(empty);

  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }
    const posts = await response.json();

    // --- 2. データ表示 or Empty状態 --- 
    hideElement(loading);

    if (posts.length === 0) {
      // データが空の場合
      showElement(empty);
    } else {
      // データがある場合
        showElement(postsContainer);
        postsContainer.innerHTML = ""; // 既存の内容をクリア
        posts.forEach(post => {
            const card = document.createElement("div");
            card.className ="post-card";
            card.innerHTML = `
            <h2>${post.title}</h2>
            <p>${post.body}</p>
            `;
            postsContainer.appendChild(card);
      });
    }
     
  } catch (e) {
    // --- 3. エラー状態 ---
    hideElement(loading);
    showElement(error);
    console.error('投稿の取得に失敗しました:', e);
  }
}

// 実行
fetchPosts();