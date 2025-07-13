import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";

export default function Todo() {
  const [todos, setTodos] = useState([]);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) navigate("/login");
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/todos`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      setTodos(data);
    } catch {
      alert("Failed to fetch todos.");
    }
  };

  const addTodo = async (title) => {
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/todos`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ title }),
      });
      const newTodo = await res.json();
      setTodos([...todos, newTodo]);
    } catch {
      alert("Error adding todo.");
    }
  };

  const toggleTodo = async (id, completed) => {
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/todos/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ completed: !completed }),
      });
      const updated = await res.json();
      setTodos(todos.map((t) => (t._id === id ? updated : t)));
    } catch {
      alert("Error toggling todo.");
    }
  };

  const deleteTodo = async (id) => {
    try {
      await fetch(`${import.meta.env.VITE_API_URL}/todos/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
      setTodos(todos.filter((t) => t._id !== id));
    } catch {
      alert("Error deleting todo.");
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="todo-container">
      <div className="todo-header">
        <h2>📝 My Todos</h2>
        <button onClick={logout}>Logout</button>
      </div>

      <TodoForm onAdd={addTodo} />
      <TodoList todos={todos} onToggle={toggleTodo} onDelete={deleteTodo} />
    </div>
  );
}
