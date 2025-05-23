import React, { useState } from "react";

function ToDoList() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [editId, setEditId] = useState(null);
  const [editValue, setEditValue] = useState("");

  const onAdd = () => {
    if (!inputValue.trim()) return;

    const toDoItem = {
      id: Date.now(),
      text: inputValue,
    };

    setTodos([...todos, toDoItem]);
    setInputValue("");
  };

  const onDeleteItem = (item) => {
    const filteredArr = todos.filter((ele) => ele.id !== item.id);
    setTodos(filteredArr);
  };

  const onEditItem = (item) => {
    setEditId(item.id);
    setEditValue(item.text);
  };

  const onEditSave = () => {
    const updatedTodos = todos.map((ele) =>
      ele.id === editId ? { ...ele, text: editValue } : ele
    );
    setTodos(updatedTodos);
    setEditId(null);
    setEditValue("");
  };

  return (
    <>
      <input
        type="text"
        placeholder="Type here please"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={onAdd}>Add</button>

      <ul>
        {todos.map((ele) => (
          <li key={ele.id}>
            {editId === ele.id ? (
              <>
                <input
                  type="text"
                  value={editValue}
                  onChange={(e) => setEditValue(e.target.value)}
                />
                <button onClick={onEditSave}>Save</button>
              </>
            ) : (
              <>
                {ele.text}
                <button onClick={() => onDeleteItem(ele)}>X</button>
                <button onClick={() => onEditItem(ele)}>Edit</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ToDoList;
