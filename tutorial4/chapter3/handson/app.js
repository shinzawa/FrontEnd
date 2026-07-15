// 1. DOM要素の取得
const todoInput = document.querySelector("#todo-input");
const addButton = document.querySelector("#add-button");
const todoList = document.querySelector("#todo-list");

// 2. イベントリスナーの登録
addButton.addEventListener("click", function() {
  // a. テキストの取得
  const todoText = todoInput.value;

  // 入力が空の場合は何もしない
  if (todoText === "") return;

  // b. li要素の作成
  const newTodoItem = document.createElement("li");

  // c. テキストの設定
  newTodoItem.textContent = todoText;

  // d. li要素の追加
  todoList.appendChild(newTodoItem);

  // e. inputを空にする
  todoInput.value = "";
});