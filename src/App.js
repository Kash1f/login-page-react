import './App.css';
import React, {useState} from 'react';

const App = () => {

  const [login, setLogin]=useState(true)   //using react hook useState to store the data

  const [username, setUsername]=useState('')
  const [email, setEmail]=useState('')
  const [contact, setContact]=useState('')
  const [password, setPassword]=useState('')
  

  const handlechangeUsername=(event)=>{
    setUsername(event.target.value)
  }

  const handlechangeEmail=(event)=>{
    setEmail(event.target.value)
  }

  const handlechangeContact=(event)=>{
    setContact(event.target.value)
  }

  const handlechangePassword=(event)=>{
    setPassword(event.target.value)
  }

  const handleClick=()=>{
    setLogin(!login)
  }

  return (
    <div className="App">
          {login ?    //conditional rendering page according to given task
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
                <input type='text' className='text' value={username} onChange={handlechangeUsername}/>
              </div>
              <div>
                <label>Email: </label>
                <input type='email' className='email' value={email} onChange={handlechangeEmail}/>
              </div>

              <div>
                <label>Contact: </label>
                <input type='text' className='number' value={contact} onChange={handlechangeContact}/>
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
