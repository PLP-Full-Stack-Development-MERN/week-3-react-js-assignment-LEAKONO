import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="border rounded-lg p-4 shadow-md text-center bg-gray-100">
      <h2 className="text-xl font-semibold">Counter: {count}</h2>
      <button
        className="bg-blue-500 text-white px-4 py-2 mt-2 rounded-md hover:bg-blue-700"
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
    </div>
  );
}
