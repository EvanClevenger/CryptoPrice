import "./index.css";
import Login from "./components/Login";
// import Dashboard from "./components/Dashboard";
import SignUp from "./components/SignUp";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
