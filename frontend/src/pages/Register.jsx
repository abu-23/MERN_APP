import React from "react";
import { useState } from "react";

function Register() {
  const [name, SetName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function registerUser(event) {
    event.preventDefault();

    const response = await fetch("http://localhost:5556/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    });
    const data = await response.json();
    console.log(data);
  }
  return (
    <div className="m-20 p-12 bg-gray-400 rounded-lg">
      <h1 className="my-4 text-xl font-bold	">Register</h1>
      <form onSubmit={registerUser} className="">
        <input
          className="p-1 my-2 rounded-md"
          onChange={(e) => SetName(e.target.value)}
          value={name}
          type="text"
          placeholder="Name"
        />
        <br />
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
          value="Register"
        />
      </form>
    </div>
  );
}

export default Register;
