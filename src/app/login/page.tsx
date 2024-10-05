import "./Login.css";
import React from "react";

function LoginPage() {
  return (
    <div className="Login">
      <div className="container mx-auto  flex justify-center">
        <div className="box-1 w-[70%]">
          <h1 className="uppercase">Welcome In KINGDOM OF TEA</h1>
          <p>Log in to become one of the featured ones</p>
          <form action="">
            <label htmlFor="email">Email</label>
            <input id="email" type="email" placeholder="Enter your Email" />
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
            />
            <div className="flex items-center justify-between info">
              <div className="flex items-center space-x-2">
                <input type="checkbox" id="agree" className="h-6 w-6 m-0" />
                <label htmlFor="agree" className="">
                  Remember Me
                </label>
              </div>
              <p>Forget your Password?</p>
            </div>
          </form>
          <button>Login</button>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
