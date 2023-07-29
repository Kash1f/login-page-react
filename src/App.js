import './App.css';
import React, {useState} from 'react';

const App = () => {

  const [login, setLogin]=useState(true)

  const [email, setEmail]=useState('')
  const [password, setPassword]=useState('')
  const [country, setCountry]=useState('')
  const [username, setUsername]=useState('')


  const handlechangeUsername=(event)=>{
    setUsername(event.target.value)
  }

  const handlechangeEmail=(event)=>{
    setEmail(event.target.value)
  }

  const handlechangeCountry=(event)=>{
    setCountry(event.target.value)
  }

  const handlechangePassword=(event)=>{
    setPassword(event.target.value)
  }


  const handleClick=()=>{
    setLogin(!login)
  }

  return (
    <div className="App">

          {login ? 

            <div className='container'>
         <form className='my-signup-form'>
            <div>
              <label>Email: </label>
              <input type='email' className='email' value={email} onChange={handlechangeEmail}/>
            </div>

            <div>
              <label>Password: </label>
              <input type='password'className='password' value={password} onChange={handlechangePassword}/>
            </div>

            <button>
              Login
            </button>
            <button onClick={handleClick}>Sign Up </button>
          </form>
            </div>

            : 

            <div className='container'>
              <form className='my-login-form'>

              <div>
                <label>Username: </label>
                <input type='text' className='email' value={username} onChange={handlechangeUsername}/>
              </div>
              <div>
                <label>Email: </label>
                <input type='email' className='email' value={email} onChange={handlechangeEmail}/>
              </div>

              <div>
                <label>Country: </label>
                <input type='text' className='email' value={country} onChange={handlechangeCountry}/>
              </div>

              <div>
                <label>Password: </label>
                <input type='password' className='password' value={password} onChange={handlechangePassword} />
              </div>
              <button>
                Signup
              </button>

              <button onClick={handleClick}>Login</button>
              
            </form> 
            </div>}
    </div>
  );
}

export default App;
