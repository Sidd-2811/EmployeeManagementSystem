import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // to handle form submission (also known as two way binding)
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(`email : ${email}`);
    console.log(`pass : ${password}`);

    // email or password field ko form submit ke bad khali karne ke liye
    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="border-2 border-emerald-600 p-20 rounded-xl">
        <form
          onSubmit={(e) => submitHandler(e)}
          className="flex flex-col items-center justify-center"
        >
          <input 
        //   yha email ki value set kari 
          value={email}
        //   setEmail se updated kari email ki value
          onChange={(e)=>setEmail(e.target.value)}
            required
            className="outline-none bg-transparent border-2 border-emerald-600 font-medium text-lg py-2 px-6 rounded-full placeholder:text-gray-400"
            type="email"
            placeholder="Enter your email"
          />

          <input 
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
            required
            className=" outline-none bg-transparent border-2 border-emerald-600 py-2  px-6 rounded-full placeholder:text-gray-400 mt-5 font-medium text-lg"
            type="password"
            placeholder="Enter Your Password"
          />
          <button className="mt-7 text-white border-none outline-none hover:bg-emerald-700 font-semibold bg-emerald-600 text-lg py-2 px-8 w-full rounded-full placeholder:text-white">
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
