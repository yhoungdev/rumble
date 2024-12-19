import "./App.css";
import IndexHomepage from "./pages";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ArenaPage from "./pages/arena";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<IndexHomepage />} />
        <Route path="/arena" element={<ArenaPage />} />
      </Routes>
    </Router>
  );
}

export default App;
