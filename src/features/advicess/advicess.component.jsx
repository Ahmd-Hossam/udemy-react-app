import { useEffect, useState } from "react";

function Advicess() {
  const [advice, setAdvice] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    getAdvice();
  }, []);

  async function getAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();

    if (data) {
      setAdvice(data.slip.advice);
      setCount((count) => count + 1);
    }
  }

  return (
    // Advice task
    <div>
      <h1>{advice}</h1>
      <button onClick={getAdvice}> Get adivce</button>
      {count > 0 && <Message count={count} />}
    </div>
  );
}

function Message(props) {
  return (
    <p>
      You have read <strong> {props.count} </strong> pices of advice
    </p>
  );
}

export default Advicess;
