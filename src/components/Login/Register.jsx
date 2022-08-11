import React from "react";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";

const Register = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { signup } = useAuth();

  const handleChange = ({ target: { name, value } }) =>
    setUser({ ...user, [name]: value });

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(user.email, user.password);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email</label>
      <input
        type="email"
        name="email"
        placeholder="Enter your email"
        onChange={handleChange}
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        name="password"
        placeholder="Enter your password"
        id="password"
        onChange={handleChange}
      />
      <button>Register</button>
    </form>
  );
};

export default Register;
