import { useState } from "react";
import "./App.css";

function App() {
  const [leftPanel, setLeftDisplay] = useState([0])
  const [rightPanel, setRightDisplay] = useState([0])
  const [operation, setOperation] = useState('+')
  const [result, setResult] = useState(0)
  const [storage, setStorage] = useState(0)

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


  function findDecimal(numArray) {
    for (let i = 0; i < numArray.length; i++) {
      const element = numArray[i];
      if (isNaN(element)) {
        return i
      }
      
    }
    return 0
  }
function toNumber(panel) {
  let result = 0
  const decimalIndex = findDecimal(panel)

  if (decimalIndex === 0) {
    for (let i = 0; i < panel.length; i++) {
      const element = panel[i]
      result += element * Math.pow(10, panel.length - 1 - i)
      
    }
  } else {
    for (let i = 0; i < decimalIndex; i++) {
      const element = panel[i]
      
      result += element * Math.pow(10, decimalIndex - i - 1)
      console.log(result);
    }
    for (let i = decimalIndex; i < panel.length; i++) {
      
      if (i === decimalIndex ) continue
      const element = panel[i];
      result += element * Math.pow(10, decimalIndex - i)
    }
  }

  return result
}

function storageToArray(number) {
  const array = []
  const numberString = String(number)

  for (let i = 0; i < numberString.length; i++) {
    const element = Number(numberString[i])
    if (isNaN(element)){
      array.push(numberString[i])
      continue
    }
    array.push(element)
  }

  return array
}

const recallStorage = (panel) => {
  const array = storageToArray(storage)

  switch (panel) {
    case 'left':
      setLeftDisplay(array)
      break
    case 'right':
      setRightDisplay(array)
      break
    default:
      break
  }
}

function containsDecimal(panel) {
  console.log(panel);
  
  
  for (let i = 0; i < panel.length; i++) {
    const element = Number(panel[i])
    if (isNaN(element)) {
      return true
      
    }
    
  }
}

const addDecimal = (panel) => {
  let newPanel
  switch (panel) {
    case 'left':
      if (containsDecimal(leftPanel)) break
      newPanel = [...leftPanel, '.']
      setLeftDisplay(newPanel)
      break
    case 'right':
      if (containsDecimal(rightPanel)) return
      newPanel = [...rightPanel, '.']
      setRightDisplay(newPanel)
      break
    default:
      break
  }
}

const store = () => {
  setStorage(result)
}

const calculate = () => {
  let leftNum = toNumber(leftPanel)
  let rightNum = toNumber(rightPanel)
  let result = 0

  switch (operation) {
    case '+':
      result = leftNum + rightNum
      setResult(result)
      break;
    case '-':
      result = leftNum - rightNum
      setResult(result.toFixed(3))
      break;
    case '*':
      result = leftNum * rightNum
      setResult(result.toFixed(3))
      break;
    case '/':
      result = (leftNum / rightNum).toFixed(3)
      setResult(result)
      break;
    default:
      break;
  }
  }
  const updateLeftPanel = (number) => {
    let newLeftPanel

    if (leftPanel[0] === 0 && leftPanel.length === 1) {
      newLeftPanel = [number]
    } else {
      newLeftPanel = [...leftPanel, number]
    }

    setLeftDisplay(newLeftPanel)
  };

  const updateRightPanel = (number) => {
    let newRightPanel

    if (rightPanel[0] === 0 && rightPanel.length === 1) {
      newRightPanel = [number]
    } else {
      newRightPanel = [...rightPanel, number]
    }
    setRightDisplay(newRightPanel)     
     
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
          <button onClick={() => addDecimal('left')}>.</button>
          <button onClick={() => clearLeftPanel()}>Clear</button>
          <button onClick={() => recallStorage('left')}>Recall</button>
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
          <button onClick={() => addDecimal('right')}>.</button>
          <button onClick={() => clearRightPanel()}>Clear</button>
          <button onClick={() => recallStorage('right')}>Recall</button>
        </div>
      </div>

      <div className="panel answer">
        <p>{result}</p>
        <div>
          <button onClick={() => calculate()}>=</button>
          <button onClick={() => store()}>Store</button>
        </div>
      </div>
    </div>
  );
}

export default App;
