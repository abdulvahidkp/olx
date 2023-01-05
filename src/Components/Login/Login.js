import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FirebaseContext } from '../../store/Context';

import Logo from '../../olx-logo.png';
import './Login.css';

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { firebase } = useContext(FirebaseContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        history.push('/')
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode,'------',errorMessage);
      });
  }

  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => { setEmail(e.target.value) }}
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => { setPassword(e.target.value) }}
          />
          <br />
          <br />
          <button>Login</button>
        </form>
        <a onClick={()=>history.push('/signup')}>Signup</a>
      </div>
    </div>
  );
}

export default Login;
