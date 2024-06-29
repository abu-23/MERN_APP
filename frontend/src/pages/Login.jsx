import React from "react";
import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function loginUser(event) {
    event.preventDefault();

    const response = await fetch("http://localhost:5556/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    const data = await response.json();
    if (data.user) {
      localStorage.setItem("token", data.user);
      alert("Login succesfull");
      window.location.href = "/";
    } else {
      alert("Please check credentials");
    }
  }
  return (
    <div className="m-20 p-12 bg-gray-400 rounded-lg">
      <h1 className="my-4 text-xl font-bold	">Login</h1>
      <form onSubmit={loginUser}>
        <input
          className="p-1 my-2 rounded-md"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="email"
          placeholder="Email"
        />
        <br />
        <input
          className="p-1 my-2 rounded-md"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="password"
          placeholder="password"
        />
        <br />
        <input
          className="my-6 bg-black px-6 py-2 rounded-md text-white"
          type="submit"
          value="Login"
        />
      </form>
    </div>
  );
}

export default Login;
