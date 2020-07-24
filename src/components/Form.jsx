import React, { useState } from "react";

export default function Form(props) {
  const { user,setUser } = props;
  const [state, setState] = useState({
    username: "",
    password: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: value,
    });
    console.log(state);
  }
  return (
    <form>
      <p>{state.username + " " + state.password}</p>
      <div className="login-form-cont">
        <div>
          <h3>LOGIN</h3>
          <input
            name="username"
            type="text"
            placeholder="username"
            onChange={handleChange}
            value={state.username}
          ></input>
        </div>
        <div>
          <input
            name="password"
            type="password"
            placeholder="password"
            onChange={handleChange}
            value={state.password}
          ></input>
        </div>
        <button
          onClick={() => {
            setUser({
              username: state.username,
              password: state.password,
            });
            console.log(user);
          }}
        >
          Sign In
        </button>
      </div>
    </form>
  );
}
