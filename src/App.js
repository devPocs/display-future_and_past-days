import { useState } from "react";
import "./styles.css";

export default function App() {
  const [step, setStep] = useState(0);
  const [count, setCount] = useState(step);

  function increaseStep() {
    setStep((c) => step + 1);
  }
  function decreaseStep() {
    if (step >= 1) setStep((c) => step - 1);
  }
  function increaseCount() {
    setCount((c) => count + step);
  }
  function decreaseCount() {
    setCount((c) => count - step);
  }

  let date = new Date();
  date.setDate(date.getDate() + count);

  return (
    <div className="App">
      <div>
        <button onClick={decreaseStep}>-</button>
        <span>Step: {step}</span>
        <button onClick={increaseStep}>+</button>
      </div>
      <div>
        <button onClick={decreaseCount}>-</button>
        <span>Count: {count}</span>
        <button onClick={increaseCount}>+</button>
      </div>
      <div>
        {count >= 1
          ? `${count} day(s) from now is ${date.toDateString()}.`
          : count < 0
          ? `${count * -1} days ago was ${date.toDateString()}`
          : `Today is ${date.toDateString()}`}
      </div>
    </div>
  );
}
