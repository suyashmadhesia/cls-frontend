import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
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
const PrivateRouteClass = ({ state, children }) => {
  if(!state.user){
    return <Navigate replace to={"/home"} />
  }
  return children
}

const PrivateRouteLogin = ({state, children}) => {
  if(state.user){
    return <Navigate replace to={"/"} />
  }

  return children
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
        <Route exact path="/" element={
          <PrivateRouteClass state={state}>
            <Classroom />
          </PrivateRouteClass>
        } />
        <Route exact path="/home" element={
          <PrivateRouteLogin state={state}>
            <Homepage />
          </PrivateRouteLogin>
        } />
        <Route exact path="/login" element={
          <PrivateRouteLogin state={state}>
            <Login />
          </PrivateRouteLogin>
        } />
        <Route exact path="/register" element={
          <PrivateRouteLogin state={state}>
            <Register />
          </PrivateRouteLogin>
        } />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  )
}

export default App;
