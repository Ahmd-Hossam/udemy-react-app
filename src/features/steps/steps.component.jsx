import { useState } from "react";
import "./step.component.css";
export default function Steps() {
  //setps style
  const stepsStyle = {
    padding: "2rem",
    background: "#f1f1f1",
    margin: "3rem",
    borderRadius: "10px",
  };

  //numbers style
  const numbersStyle = {
    display: "flex",
    justifyContent: "space-between",
  };

  //number style
  const numberStyle = {
    width: "30px",
    height: "30px",
    background: "rgb(153 153 153 / 26%)",
    borderRadius: "50%",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  //message style
  const messageStyle = {
    margin: "2rem 0",
    textAlign: "center",
    fontWeight: "bold",
  };

  //buttons style
  const buttonsStyle = {
    display: "flex",
    justifyContent: "space-between",
  };

  //buttons style
  const btnStyle = {
    padding: "7px 13px",
    borderRadius: "10px",
    border: "1px solid #999",
    background: "#7950f2",
    color: "#fff",
  };

  const Messages = ["Learn React", "Apply for jobs", "Invest your new income"];
  let [step, setStep] = useState(1);
  function onPrevClicked() {
    if (step > 1) {
      setStep(step - 1);
    }
  }
  function onNextClicked() {
    if (step < Messages.length) {
      setStep(step + 1);
    }
  }
  return (
    <>
      <div className="steps" style={stepsStyle}>
        <div className="numbers" style={numbersStyle}>
          <div
            className={step >= 1 ? "active number" : "number"}
            style={numberStyle}
          >
            1
          </div>
          <div
            className={step >= 2 ? "active number" : "number"}
            style={numberStyle}
          >
            2
          </div>
          <div
            className={step >= 3 ? "active number" : "number"}
            style={numberStyle}
          >
            3
          </div>
        </div>

        <div className="message" style={messageStyle}>
          Step {step} : {Messages[step - 1]}
        </div>

        <div className="buttons" style={buttonsStyle}>
          <button style={btnStyle} onClick={onPrevClicked}>
            {" "}
            Perivous{" "}
          </button>
          <button style={btnStyle} onClick={onNextClicked}>
            Next
          </button>
        </div>
      </div>
    </>
  );
}
