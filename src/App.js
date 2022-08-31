
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import Regsiter from "./pages/Regsiter";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path = "/" element = {<Homepage/>}/>
      <Route path = "Login" element = {<Login/>}/>
      <Route path = "Register" element = {<Regsiter/>}/>
      
    </Routes>
    </BrowserRouter>
    // <div className = " text-center">
    //   <Homepage/>
    //   <Login/>
    // </div>
  )
}

export default App;
