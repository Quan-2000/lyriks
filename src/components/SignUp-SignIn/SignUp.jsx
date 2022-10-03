import React, { useState } from "react";

const SignUp = () => {
  const [signUpForm, setSignUpForm] = useState({
    fname: '',
    lname: '',
    email: '',
    password: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { fname, lname, email, password } = signUpForm;
    console.log(signUpForm);
    fetch("http://localhost:5000/register", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        fname,
        email,
        lname,
        password,
      }),
    }).then((res) => res.json()).then((data) => {
      console.log(data, 'userRegister');
    });
  };
  return (
    <form onSubmit={(e) => handleSubmit(e)} className="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer">
      <h3 className="font-bold text-3xl text-white text-left mt-4 mb-10">Sign Up</h3>

      <div className="mb-3">
        <label className="font-bold text-3xl text-white text-left mt-4 mb-10">First name</label>
        <input
          type="text"
          className="form-control"
          placeholder="First name"
          onChange={(e) => { setSignUpForm({ ...signUpForm, fname: e.target.value }) }}
        />
      </div>

      <div className="mb-3">
        <label className="font-bold text-3xl text-white text-left mt-4 mb-10">Last name</label>
        <input
          type="text"
          className="form-control"
          placeholder="Last name"
          onChange={(e) => { setSignUpForm({ ...signUpForm, lname: e.target.value }) }}
        />

      </div>

      <div className="mb-3">
        <label className="font-bold text-3xl text-white text-left mt-4 mb-10">Email address</label>
        <input
          type="email"
          className="form-control"
          placeholder="Enter email"
          onChange={(e) => { setSignUpForm({ ...signUpForm, fname: e.target.value }) }}
        />
      </div>

      <div className="mb-3">
        <label className="font-bold text-3xl text-white text-left mt-4 mb-10">Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter password"
          onChange={(e) => { setSignUpForm({...signUpForm, password: e.target.value }) }}

        />
      </div>

      <div className="d-grid">
        <button type="submit" className="btn btn-primary font-bold text-3xl text-white text-left mt-4 mb-10">
          Sign Up
        </button>
      </div>
      <p className="forgot-password text-right">
        Already registered <a href="/sign-in">Sign in?</a>
      </p>
    </form>
  );
};

export default SignUp;