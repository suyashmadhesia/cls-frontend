
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Classroom from "./components/Classroom";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import {useEffect} from "react"

function App() {
  
  useEffect(() => {
    if(localStorage.getItem('token')){
       
    }
 }, [])

  return (
    <BrowserRouter>
    <Routes>
      <Route path = "/" element = {<Homepage/>}/>
      <Route path = "Login" element = {<Login/>}/>
      <Route path = "Register" element = {<Register/>}/>
      <Route path = "Classroom" element = {<Classroom/>}/>
      
    </Routes>
    </BrowserRouter>
    
  )
}

export default App;
