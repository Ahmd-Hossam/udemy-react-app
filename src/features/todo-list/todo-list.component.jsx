import { useState } from "react";
import "./todo-list.component.css";

function ToDoListComponent() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [editId, setEditId] = useState(null);
  const [editValue, setEditValue] = useState("");

  const onAddNew = () => {
    if (inputValue.trim() === "") return;
    const newToDo = {
      id: Date.now(),
      text: inputValue,
      completed: false,
    };

    setTodos([...todos, newToDo]);
    setInputValue("");
  };

  const handleToggle = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const onDeleteItem = (item) => {
    const filteredItems = todos.filter((ele) => ele.id !== item.id);
    setTodos(filteredItems);
  };

  const onEditItem = (item) => {
    setEditId(item.id);
    setEditValue(item.text);
  };
  const onUpdateItem = () => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === editId) {
        return { ...todo, text: editValue };
      }
      return todo;
    });
    setTodos(updatedTodos);
    setEditId(null);
    setEditValue("");
  };
  return (
    <div className="todo-container">
      <h1>ToDo List App</h1>

      <input
        type="text"
        placeholder="Add new task"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={onAddNew}>Add New</button>

      <ul>
        {todos.map((ele) => (
          <li key={ele.id} className={ele.completed ? "completed" : ""}>
            {editId === ele.id ? (
              <>
                <input
                  type="text"
                  value={editValue}
                  onChange={(e) => setEditValue(e.target.value)}
                />
                <button onClick={onUpdateItem}>Save</button>
                <button onClick={() => setEditId(null)}>Cancel</button>
              </>
            ) : (
              <>
                <span>{ele.text}</span>
                <div>
                  <button
                    className="addBtn"
                    onClick={() => handleToggle(ele.id)}
                  >
                    {ele.completed ? "Undo" : "Done"}
                  </button>
                  <button
                    className="deleteBtn"
                    onClick={() => onDeleteItem(ele)}
                  >
                    ❌
                  </button>
                  <button className="editBtn" onClick={() => onEditItem(ele)}>
                    Edit
                  </button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoListComponent;
