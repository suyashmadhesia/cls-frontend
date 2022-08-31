
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Classroom from "./components/Classroom";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path = "/" element = {<Homepage/>}/>
      <Route path = "Login" element = {<Login/>}/>
      <Route path = "Register" element = {<Register/>}/>
      <Route path = "Classroom" element = {<Classroom/>}/>
      
    </Routes>
    </BrowserRouter>
    // <div className = " text-center">
    //   <Homepage/>
    //   <Login/>
    // </div>
  )
}

export default App;
