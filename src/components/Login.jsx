import React from "react";

function Login() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="flex flex-col bg-neutral-100 rounded-2xl p-4">
        <input
          type="text"
          placeholder="Username"
          className="rounded-lg py-2 px-4 my-2"
        />
        <input
          type="text"
          placeholder="Password"
          className="rounded-lg py-2 px-4 my-2"
        />
        <button
          type="submit"
          className="bg-neutral-300 hover:bg-neutral-400 rounded-lg py-2 px-4 mt-2 w-min self-center text-neutral-600 hover:text-neutral-50"
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
