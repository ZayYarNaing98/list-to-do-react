import { useEffect } from "react";
import "./App.css";
import Router from "./routes/Router";
import { useNavigate } from "react-router-dom";

function App() {

  // const authData = localStorage.getItem("authData");
  // const navigate = useNavigate();
  // useEffect(() => {
  //   navigate("/hello");
  // }, [authData]);
  return (
    <div>
      <Router />
    </div>
  );
}

export default App;
