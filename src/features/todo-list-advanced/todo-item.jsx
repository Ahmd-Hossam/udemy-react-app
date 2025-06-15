function ToDoItem({ task, onToggle, onDelete }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        marginBottom: "8px",
        width: "300px",
        border: "1px solid #999",
        padding: "15px",
        borderRadius: "5px",
        cursor: "pointer",
      }}
      onClick={() => onToggle(task)}
    >
      <span
        style={{
          textDecoration: task.completed ? "line-through" : "none",
          cursor: "pointer",
        }}
      >
        <small>{task.text}</small>
        <small style={{ display: "block", color: "#999 " }}>
          {" "}
          {task.completed ? "Completed" : "Not completed"}
        </small>
      </span>

      <button onClick={() => onDelete(task)} style={{ color: "red" }}>
        X
      </button>
    </div>
  );
}

export default ToDoItem;
