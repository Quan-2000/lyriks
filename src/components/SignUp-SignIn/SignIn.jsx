import React, { useState } from "react";

const SignIn = () => {
  const [signInForm, setSignInForm] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = signInForm;
    console.log(signInForm);
    fetch('http://localhost:5000/register', {
      method: 'POST',
      crossDomain: true,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    }).then((res) => res.json()).then((data) => {
      console.log(data, 'userRegister');
      if (data.status === 'OK') {
        window.localStorage.setItem('token', data.data);
        window.location.href = '';
      }
    });
  };
  return (
    <form onSubmit={(e) => handleSubmit(e)} className="flex flex-col w-full p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer">
      <h3 className="font-bold text-3xl text-white text-left mt-4 mb-10">Sign In</h3>

      <div className="mb-3">
        <label className="font-bold text-3xl text-white text-left mt-4 mb-10">Email address</label>
        <input
          type="email"
          className="form-control"
          placeholder="Enter email"
          onChange={(e) => {
            setSignInForm({ ...signInForm, email: e.target.value });
          }}
        />
      </div>

      <div className="mb-3">
        <label className="font-bold text-3xl text-white text-left mt-4 mb-10">Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter password"
          onChange={(e) => setSignInForm({ ...signInForm, password: e.target.value })}
        />
      </div>

      <div className="mb-3">
        <div className="custom-control custom-checkbox">
          <input
            type="checkbox"
            className="custom-control-input"
            id="customCheck1"
          />
          <label className="custom-control-label font-bold text-3xl text-white text-left mt-4 mb-10" htmlFor="customCheck1">
            Remember me
          </label>
        </div>
      </div>

      <div className="">
        <button type="submit" className="btn btn-primary flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer">
          Submit
        </button>
      </div>
      <p className="forgot-password text-right">
        <a href="/sign-up" className="font-bold text-3xl text-white text-left mt-4 mb-10">Sign Up</a>
      </p>
    </form>
  );
};

export default SignIn;

