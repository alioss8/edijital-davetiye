import React, { useState } from "react";
import Invitation from "./components/Invitation";

function App() {
  const [theme, setTheme] = useState("light");

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4">
      <Invitation theme={theme} />

      <div className="flex gap-2 mt-4">
        <button
          onClick={() => setTheme("light")}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Light
        </button>
        <button
          onClick={() => setTheme("dark")}
          className="px-4 py-2 bg-gray-800 text-white rounded"
        >
          Dark
        </button>
      </div>
    </div>
  );
}

export default App;
