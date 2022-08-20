
import Homepage from "./pages/Homepage";
import {useState, useEffect} from "react"

function App() {
  const URL = process.env.REACT_APP_API_URL;
  const [msg, setMsg] = useState("fetching")
  useEffect(() => {
    fetch(`${URL}/api/hello`).then(res=>res.json()).then(data => setMsg(data)).catch(err=>console.error(err))
    
  }, [])
  // const URL = process.env.REACT_APP_API_URL;
  return (
    <div className = "bg-purple-50">
      {msg.message}
    </div>
  );
}

export default App;
