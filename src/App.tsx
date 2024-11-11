import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import IndexHomepage from "./pages";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <IndexHomepage />
    </>
  );
}

export default App;
