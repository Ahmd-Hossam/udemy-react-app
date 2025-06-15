import { useRef, useState } from "react";

function AddTask({ onAdd }) {
  const [text, setTask] = useState("");
  const inputRef = useRef();
  const handelAdd = () => {
    if (text.trim()) {
      onAdd(text);
      setTask("");
      inputRef.current.focus();
    }
  };
  return (
    <>
      <div>
        <input
          type="text"
          ref={inputRef}
          value={text}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Add new Task"
        />
        <button onClick={handelAdd}> Add </button>
      </div>
    </>
  );
}

export default AddTask;
