import { useState, useEffect } from "react";


function App() {
  const URL = process.env.REACT_APP_API_URL;
  const [data, setData] = useState('Welcome');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState("");
  const [className, setClassName] = useState("");
  const [classid, setClassid] = useState("");
  const [cls, setClass] = useState([]);
  const [register, setRegister] = useState(false);

  const handleChange = (e) => {
    setUsername(e.target.value);
  }

  function handleClassIdChange(e){
    setClassid(e.target.value);
  }

  const handleClassNameChange = (e) => {
    setClassName(e.target.value);
  }

  const handleChangeEmail = e => setEmail(e.target.value)

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  }

  const getAllClasses = () => {
    if (localStorage.getItem('token')) {
      fetch(`${URL}/api/u/${localStorage.getItem('account_id')}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Token ${localStorage.getItem('token')}`
        }
      }).then(async (res) => {
        let data = await res.json()
        if (res.status === 200) {
          setClass(data.data)
          console.log(data.data)
        }
        else {
          alert(data.error)
        }
      })
    }
  }

  const handleRegister = () => {
    if (!username || !password || !email) {
      alert("Empty Username or Password")
      return;
    }
    else {
      fetch(`${URL}/api/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ account_id: username, password: password, email: email })
      }).then(async res => {
        setUsername("")
        setPassword("")
        setEmail("")
        let data = await res.json()
        if (res.status === 201) {
          setData(data)
          localStorage.setItem('token', data.token)
          localStorage.setItem('account_id', data.account_id)
          getAllClasses()
        }
        else {
          alert(data.error)
        }
      }).catch(e => console.error(e))
      
    }
  }

  const createClass = () => {
    if (!className) {
      alert("Empty Class Name")
      return;
    }
    fetch(`${URL}/api/create-class`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Token ${localStorage.getItem('token')}`
      },
      body: JSON.stringify({ name: className })
    }).then(async res => {
      setClassName("")
      let data = await res.json()
      if (res.status === 201) {
        getAllClasses()
        alert(data.message)
      }
      else {
        alert(data.error)
      }
    })
  }

  const handleLogin = () => {

    if (!username || !password) {
      alert("Empty Username or Password")
      return
    }

    fetch(`${URL}/api/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ account_id: username, password: password })
    }).then(async res => {
      setUsername("")
      setPassword("")
      setEmail("")
      let data = await res.json()
      if (res.status === 200) {
        setData(data)
        localStorage.setItem('token', data.token)
        localStorage.setItem('account_id', data.account_id)
        getAllClasses()
      }
      else {
        alert(data.error)
      }
    }).catch(e => console.error(e))
  }

  const login = () => {
    if (localStorage.getItem('token')) {
      fetch(`${URL}/api/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ account_id: localStorage.getItem('account_id'), password: localStorage.getItem('token') })
      }).then(async res => {
        let data = await res.json()
        if (res.status === 200) {
          setData(data)
          console.log(data)
        }
        else {
          alert(data.error)
        }
      }).catch(e => console.error(e))
      console.log("Logged in")
    }
  }

  useEffect(() => {
    login()
    getAllClasses()
  }, [])




  if (localStorage.getItem('token')) {
    return <div className="m-4">
      <div>Welcome: <span className="text-green-500">{data.name}</span></div>
      <div>Your account_id: <span className="text-green-500">{data.account_id}</span></div>
      <div>Your email: <span className="text-green-500">{data.email}</span></div>
      <div>You are {data.is_faculty ? '' : 'not'} faculty member </div>
      <div className="mt-4">
        <div>
          Your Classrooms
        </div>
        <div>
          {cls.length ? cls.map((item, index) => {
            return <div className="mt-2" key={index}>
              <div className="text-green-500">{index + 1}. Class code ==== {item.cls_id}</div>
              <div className="text-green-500">Class name ==== {item.name}</div>
              <div className="text-red-500"> Share this code to student for join them in class</div>
            </div>
          }) : <span className="text-red-400">
            {data.is_faculty ? "No Classroom created yet" : "No Classroom joined yet"}
          </span>}
        </div>
      </div>
      {data.is_faculty ?

        <div className="mt-4">
          <input className="rounded-md bg-red-100 border-black my-4" type="text" value={className} onChange={handleClassNameChange} placeholder="Class Name" /><br />
          <button className="rounded-lg py-2 bg-red-400 px-5 border-black" type="submit" onClick={()=> createClass()}>Create Class</button>
        </div> : <div className="mt-4">
          <input className="rounded-md bg-red-100 border-black my-4" type="text" onChange={handleClassIdChange} value={classid} placeholder="Class id" /><br />
          <button className="rounded-lg py-2 bg-red-400 px-5 border-black" type="submit" onClick={()=> {}}>Join Class</button>
        </div>


      }
      <div>
        <button className="bg-red-400 rounded-lg px-3 py-2 mt-4" onClick={() => {
          localStorage.clear();
          setData('Welcome');
          setClass([]);
        }}>Logout</button>
      </div>
    </div>
  }

  return (
    <div>
      {!register && <div className="mx-4 my-4">
        <h1 className="text-3xl">{data}</h1>
        <div>
          Login
        </div>
        <div>
          <input className="rounded-md bg-red-100 border-black my-4" type="text" value={username} onChange={handleChange} placeholder="username" /><br />
          <input className="rounded-md bg-red-100 border-black my-2" type="password" value={password} onChange={handleChangePassword} placeholder="password" /><br />
          <button className="rounded-lg py-2 bg-red-400 px-5 border-black" type="submit" onClick={()=>handleLogin()}>Login</button>
        </div></div>}
      {register &&
        <div className="mt-4 mx-4">
          <h1 className="text-3xl">{data}</h1>
          <div>
            Register
          </div>
          <div>
            <input className="rounded-md bg-red-100 border-black my-4" type="text" value={username} onChange={handleChange} placeholder="username" /><br />
            <input className="rounded-md bg-red-100 border-black my-2" type="email" value={email} onChange={handleChangeEmail} placeholder="email" /><br />
            <input className="rounded-md bg-red-100 border-black my-2" type="password" value={password} onChange={handleChangePassword} placeholder="password" /><br />
            <button className="rounded-lg py-2 bg-red-400 px-5 border-black" type="submit" onClick={()=>handleRegister()}>Register</button>
          </div>
        </div>
      }
      <button className="bg-green-600 rounded-lg mx-4 px-4 py-2 mt-4" onClick={() => { setRegister(!register) }}>{register ? 'Login' : 'Register'}</button>
    </div>

  );
}

export default App;
