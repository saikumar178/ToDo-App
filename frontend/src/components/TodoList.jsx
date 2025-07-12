export default function TodoList({ todos, onToggle, onDelete }) {
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <li key={todo._id} className="todo-item">
          <span
            onClick={() => onToggle(todo._id, todo.completed)}
            className={todo.completed ? "completed" : ""}
          >
            {todo.title}
          </span>
          <button onClick={() => onDelete(todo._id)}>❌</button>
        </li>
      ))}
    </ul>
  );
}
