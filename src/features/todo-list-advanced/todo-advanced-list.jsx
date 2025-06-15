import { useCallback, useMemo, useState } from "react";
import AddTask from "./add-task";
import ToDoList from "./todo-list";
import FilterBar from "./filter-bar";

export default function ToDoAdvanced() {
  const [tasks, setTask] = useState([]);
  const [filter, setFilter] = useState("All");

  const handelAddTask = useCallback((event) => {
    const task = {
      id: Date.now(),
      text: event,
      completed: false,
    };
    setTask((prev) => [...prev, task]);
  }, []);

  const handelToggelTask = useCallback((event) => {
    setTask((prev) => {
      return prev.map((ele) => {
        return ele.id === event.id
          ? { ...ele, completed: !ele.completed }
          : ele;
      });
    });
  }, []);

  const handelDeleteTask = useCallback((event) => {
    setTask((prev) => prev.filter((ele) => ele.id !== event.id), []);
  });

  const filteredTasks = useMemo(() => {
    switch (filter) {
      case "Active":
        return tasks.filter((ele) => !ele.completed);
      case "Completed":
        return tasks.filter((ele) => ele.completed);
      default:
        return tasks;
    }
  }, [tasks, filter]);

  return (
    <>
      <div>
        <h1> Advanced ToDo App </h1>
        <AddTask onAdd={handelAddTask} />
        <FilterBar filter={filter} setFilter={setFilter} />
      </div>

      <div className="tasks">
        <ToDoList
          tasks={filteredTasks}
          onToggle={handelToggelTask}
          onDelete={handelDeleteTask}
        />
      </div>
    </>
  );
}
