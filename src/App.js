
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Homepage from "./pages/Homepage";
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path = "/" element = {<Homepage/>}/>
      <Route path = "Login" element = {<Login/>}/>
      
    </Routes>
    </BrowserRouter>
    // <div className = " text-center">
    //   <Homepage/>
    //   <Login/>
    // </div>
  )
}

export default App;
