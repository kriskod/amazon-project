import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../../firebase";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const signin = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((user) => {
        history.push("/");
      })
      .catch((error) => console.error(error.message));
  };

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((user) => {
        console.log(user);
        if (user) {
          history.push("/");
        }
      })
      .catch((error) => console.error(error.message));
  };
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1200px-Amazon_logo.svg.png"
        />
      </Link>
      <div className="login__container">
        <h1>Sign in</h1>
        <form action="">
          <h5>Email</h5>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="login__loginButton" onClick={signin} type="submit">
            Sign In
          </button>
        </form>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia
          suscipit, sunt laudantium architecto asperiores dicta soluta rerum
          fugit ducimus. Repellendus!
        </p>
        <button className="login__registerButton" onClick={register}>
          Create your account
        </button>
      </div>
    </div>
  );
}

export default Login;
