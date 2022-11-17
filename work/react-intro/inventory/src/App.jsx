import './kebab-case.css'
import Reorder from "./Reorder";
import { useState } from "react";

function App() {
  let [count, setCount] = useState(0);
  return (
    <div className="app">
      <p>A count for an inventory: {count}</p>
      <button onClick={() => setCount(count += 1)}>+</button>
      <button onClick={() => { setCount(count -= 1) }} disabled={!count}>-</button>
      {count === 0 ? <Reorder onReorder={setCount} /> : <></>}
    </div>
  );
}

export default App;
