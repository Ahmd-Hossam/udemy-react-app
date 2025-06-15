import ToDoItem from "./todo-item";

function ToDoList({ tasks, onToggle, onDelete }) {
  if (!tasks || tasks.length === 0) return <p> No tasks added yet</p>;

  return (
    <div style={{ marginTop: "20px" }}>
      {tasks.map((ele) => {
        return (
          <ToDoItem
            key={ele.id}
            task={ele}
            onToggle={onToggle}
            onDelete={onDelete}
          />
        );
      })}
    </div>
  );
}

export default ToDoList;
