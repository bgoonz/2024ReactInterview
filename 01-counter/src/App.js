import { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [ascending, setAscending] = useState(true);
  useEffect(() => {
    if (ascending && count === 5) {
      setAscending((prevDirection) => !prevDirection);
    }
    if (!ascending && count === 0) {
      setAscending((prevDirection) => !prevDirection);
    }
  }, [count]);

  function handleClick() {
    if (ascending) {
      setCount(count + 1);
    } else {
      setCount(count - 1);
    }
  }

  return (
    <div>
      <button onClick={handleClick}>{ascending ? "increment" : "decrement"}</button>
      <div>
        <span>count:{count}</span>
      </div>
    </div>
  );
}

export default App;
