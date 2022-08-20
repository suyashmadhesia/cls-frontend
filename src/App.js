import { useState, useEffect } from "react";


function App() {
  const URL = process.env.REACT_APP_API_URL;
  const [data, setData] = useState('Welcome');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState("");
  const [register, setRegister] = useState(false);

  const handleChange = (e) => {
    setUsername(e.target.value);
  }

  const handleChangeEmail = e => setEmail(e.target.value)

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
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
        }
        else {
          alert(data.error)
        }
      }).catch(e => console.error(e))
    }
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
      }
      else {
        alert(data.error)
      }
    }).catch(e => console.error(e))
  }
  useEffect(() => {
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
          localStorage.setItem('token', data.token)
          localStorage.setItem('account_id', data.account_id)
        }
        else {
          alert(data.error)
        }
      }).catch(e => console.error(e))
    }

  }, [])
  if (localStorage.getItem('token')) {
    return <div>
      <div>Welcome: <span className="text-green-500">{data.name}</span></div>
      <div>Your account_id: <span className="text-green-500">{data.account_id}</span></div>
      <div>Your email: <span className="text-green-500">{data.email}</span></div>
      <div>
        <button className="bg-red-400 rounded-lg p-2" onClick={() => {
          localStorage.clear();
          setData('Welcome');
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
          <button className="rounded-lg py-2 bg-red-400 px-5 border-black" type="submit" onClick={handleLogin}>Login</button>
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
            <button className="rounded-lg py-2 bg-red-400 px-5 border-black" type="submit" onClick={handleRegister}>Register</button>
          </div>
        </div>
      }
      <button className="bg-green-600 rounded-lg mx-4 px-4 py-2 mt-4" onClick={() => { setRegister(!register) }}>{register ? 'Login' : 'Register'}</button>
    </div>

  );
}

export default App;
