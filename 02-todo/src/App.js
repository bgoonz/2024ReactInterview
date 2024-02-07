import { useState } from "react";

function App() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("");
  const [doneItems, setDoneItems] = useState([]);

  function handleAdd() {
    setItems((items) => [...items, newItem]);
  }
  function handleDone(item) {
    setDoneItems((doneItems) => [...doneItems, item]);
    setItems((items) => items.filter((element) => element !== item));
  }
  function handleRemove(item) {
    setItems((items) => items.filter((element) => element !== item));
  }

  return (
    <div>
      <h1>To Do App</h1>
      <span>Add item to list</span>
      <div>
        <input
          value={newItem}
          onChange={(event) => setNewItem(event.target.value)}
        ></input>
        <button onClick={handleAdd}>Add</button>
      </div>
      <h2>ToDo</h2>
      <ul>
        {items.map((item) => {
          return (
            <li key={item}>
              <button onClick={() => handleDone(item)}>Done</button> {item}{" "}
              <button
                onClick={() => {
                  handleRemove(item);
                }}
              >
                Remove
              </button>
            </li>
          );
        })}
      </ul>
      <div>
        <h2>Done:</h2>
        <ul>
          {doneItems.map((item) => {
            return <li key={item}>{item}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
