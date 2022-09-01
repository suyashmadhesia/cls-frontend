
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Classroom from "./components/Classroom";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path = "/" element = {<Homepage/>}/>
      <Route path = "login" element = {<Login/>}/>
      <Route path = "register" element = {<Register/>}/>
      <Route path = "classroom" element = {<Classroom/>}/>
      
    </Routes>
    <ToastContainer />
    </BrowserRouter>
    
  )
}

export default App;
