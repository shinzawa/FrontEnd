import TodoItem from "./TodoItem";

// このコンポーネントが受け取るPropsの型
type TodoListProps = {
  todos: { id: number; text: string }[]; // TODOオブジェクトの配列
  onDelete: (id: number) => void;
};

function TodoList({ todos, onDelete }: TodoListProps) {
  return (
    <ul>
      {/* 配列をmapでループ処理し、各要素をTodoItemコンポーネントに変換 */}
      {todos.map((todo) => (
        // リストレンダリングでは、各要素に一意な`key` propsを渡す必要がある
        <TodoItem key={todo.id} todo={todo} onDelete={onDelete} />
      ))}
    </ul>
  );
}

export default TodoList;