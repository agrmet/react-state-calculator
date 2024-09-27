import { useState } from "react";
import "./App.css";

function App() {
  const [leftPanel, setLeftDisplay] = useState([0])
  const [rightPanel, setRightDisplay] = useState([0])
  const [operation, setOperation] = useState('+')
  const [result, setResult] = useState(0)

  const updateOperation = (operation) => {
    switch (operation) {
      case '+':
        setOperation('+')
        break;
      case '-':
        setOperation('-')
        break;
      case '*':
        setOperation('*')
        break;
      case '/':
        setOperation('/')
        break;
      default:
        break;
    }
  }

function toNumber(panel) {
  let result = 0
  for (let index = 0; index < panel.length; index++) {
    const element = panel[index];
    result += element * Math.pow(10, panel.length - 1 - index)
    console.log(result)
    
  }
  return result
}

  const calculate = () => {
    let lefNum = toNumber(leftPanel)
    let rightNum = toNumber(rightPanel)

    console.log(`Left number is ${lefNum}`);
    console.log(`Right number is ${rightNum}`);

    switch (operation) {
      case '+':
        setResult(lefNum + rightNum)
        break;
      case '-':
        setResult(lefNum - rightNum)
        break;
      case '*':
        setResult(lefNum * rightNum)
        break;
      case '/':
        setResult((lefNum / rightNum).toFixed(3))
        break;
      default:
        break;
    }
  }
  const updateLeftPanel = (number) => {
    let newLeftPanel

    if (leftPanel[0] === 0) {
      console.log("Left panel was zero")
      newLeftPanel = [number]
    } else {
      console.log("Left panel was not zero")
      newLeftPanel = [...leftPanel, number]
    }

    setLeftDisplay(newLeftPanel)
    console.log(newLeftPanel)
  };

  const updateRightPanel = (number) => {
    let newRightPanel

    if (rightPanel[0] === 0) {
      console.log("Right panel was zero");
      newRightPanel = [number]
    } else {
      console.log("Right panel was other than zero");
      newRightPanel = [...rightPanel, number]
    }
    setRightDisplay(newRightPanel)     
    console.log(newRightPanel);
     
  }

  const clearRightPanel = () => {
    setRightDisplay([0])
  }
  const clearLeftPanel = () => {
    setLeftDisplay([0]);
  };


  return (
    <div className="calculator">
      <div className="panel">
        <p>{leftPanel}</p>
        <div className="numbers">
          <button onClick={() => updateLeftPanel(1)}>1</button>
          <button onClick={() => updateLeftPanel(2)}>2</button>
          <button onClick={() => updateLeftPanel(3)}>3</button>
          <button onClick={() => updateLeftPanel(4)}>4</button>
          <button onClick={() => updateLeftPanel(5)}>5</button>
          <button onClick={() => updateLeftPanel(6)}>6</button>
          <button onClick={() => updateLeftPanel(7)}>7</button>
          <button onClick={() => updateLeftPanel(8)}>8</button>
          <button onClick={() => updateLeftPanel(9)}>9</button>
          <button onClick={() => updateLeftPanel(0)}>0</button>
          <button onClick={() => clearLeftPanel()}>Clear</button>
        </div>
      </div>

      <div className="panel">
        <p>{operation}</p>
        <div className="numbers">
          <button onClick={() => updateOperation('+')}>+</button>
          <button onClick={() => updateOperation('-')}>-</button>
          <button onClick={() => updateOperation('*')}>*</button>
          <button onClick={() => updateOperation('/')}>÷</button>
        </div>
      </div>

      <div className="panel">
        <p>{rightPanel}</p>
        <div className="numbers">
          <button onClick={() => updateRightPanel(1)}>1</button>
          <button onClick={() => updateRightPanel(2)}>2</button>
          <button onClick={() => updateRightPanel(3)}>3</button>
          <button onClick={() => updateRightPanel(4)}>4</button>
          <button onClick={() => updateRightPanel(5)}>5</button>
          <button onClick={() => updateRightPanel(6)}>6</button>
          <button onClick={() => updateRightPanel(7)}>7</button>
          <button onClick={() => updateRightPanel(8)}>8</button>
          <button onClick={() => updateRightPanel(9)}>9</button>
          <button onClick={() => updateRightPanel(0)}>0</button>
          <button onClick={() => clearRightPanel()}>Clear</button>
        </div>
      </div>

      <div className="panel answer">
        <p>{result}</p>
        <div>
          <button onClick={() => calculate()}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
