import { useState } from "react";

const Count = () => {
  
  const [count, setCount] = useState<number>(0);

  const handleAdd = () => {
    setCount(count + 1)
  };

  const handleDelete = () => {
    setCount(count - 1);
  }
  
  return (
    <div className="count">
      <h1>{count}</h1>
      <button onClick={handleAdd}>+</button>
      <button onClick={handleDelete}>_</button>
    </div>
  );
}

export default Count;