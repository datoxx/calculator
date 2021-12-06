import { useState } from 'react';
import './App.css';

function App() {

  const[expr, setExpr] = useState("");
  const[answer, setAnswer] = useState();

  const action = (symbol) => {
    setExpr(prev => prev + symbol)
    if(expr[expr.length - 1] == "=") {
      if(/[0-9.]/.test(symbol)) {
        setExpr(symbol);
      } else {
        setExpr(answer + symbol);
      }
    }
  }

  const calculate = () => {
    setAnswer(eval(expr));
    setExpr(prev => prev + "=")
  }

  const clear = () => {
    setExpr("");
    setAnswer("");
  }

  return (
    <div className="App">
       <div className="container">
        <div id="display">
          <input type="text" value={expr}  placeholder="0" disabled />
          <div className="total">{answer}</div>
        </div>
         <div onClick={clear} className="clean" id="clear">AC</div>
         <div onClick={() => action("*")} className="operator" id="multiply">x</div>
         <div onClick={() => action("/")} className="operator" id="divide">/</div>
         <div onClick={() => action("7")} className="nomber" id="seven">7</div>
         <div onClick={() => action("8")} className="nomber" id="eight">8</div>
         <div onClick={() => action("9")} className="nomber" id="nine">9</div>
         <div onClick={() => action("-")} className="operator" id="subtract">-</div>
         <div onClick={() => action("4")} className="nomber" id="four">4</div>
         <div onClick={() => action("5")} className="nomber" id="five">5</div>
         <div onClick={() => action("6")} className="nomber" id="six">6</div>
         <div onClick={() => action("+")} className="operator" id="add">+</div>
         <div onClick={() => action("1")} className="nomber" id="one">1</div>
         <div onClick={() => action("2")} className="nomber" id="two">2</div>
         <div onClick={() => action("3")} className="nomber" id="three">3</div>
         <div onClick={calculate} className="equal" id="equals">=</div>
         <div onClick={() => action("0")} className="nomber"id="zero">0</div>
         <div onClick={() => action(".")} className="nomber"id="decimal">.</div>
       </div>
    </div>
  );
}

export default App;
