import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import script from "../scripts/test.ts?raw";
import { UserService } from "windmill-client";

async function whoami() {
  const res = await UserService.globalWhoami();
  console.log(res);
}

function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    whoami();
  }, []);
  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">{script}</p>
    </>
  );
}

export default App;