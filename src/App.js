import { BrowserRouter, Routes, Route } from "react-router-dom";
import Classroom from "./components/Classroom";
import Homepage from "./pages/Homepage";
import { useEffect } from "react"
import Login from "./pages/Login";
import Register from "./pages/Register";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useStateContext } from "./contexts/contextProvider";
import { useSelector } from "react-redux";

// This is used for routing user to landing page when the user is not logged in
const PrivateRoute = ({ state, to }) => {
  if (state.user) {
    return <Classroom />
  }
  else if (to==="login") {
    return <Login />
  }
  else if (to === "register"){
    return <Register />
  }
  else{
    return <Homepage />
  }
}

function App() {

  const { setScreenSize } = useStateContext();
  const state = useSelector(state => state.auth);


  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  });

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/login" element={
          <PrivateRoute state={state} to="login" />
        } />
        <Route exact path="/register" element={
          <PrivateRoute state={state} to="register" />
        } />
        <Route exact path="/" element={
          <PrivateRoute state={state} />} />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
    
  )
}

export default App;
