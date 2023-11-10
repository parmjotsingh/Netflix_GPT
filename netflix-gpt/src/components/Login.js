import Header from "./Header";
import { useState } from "react";

function Login() {
  const [isSignInForm, setIsSignInForm] = useState(true);

  return (
    <div className="relative">
      <Header />
      <div>
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/ab4b0b22-2ddf-4d48-ae88-c201ae0267e2/6ea7bcbd-afea-41de-81d6-eb5bb5671a71/CA-en-20231030-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="background"
        />
      </div>
      <form className="absolute top-1/3 p-12 mx-auto left-0 right-0 w-3/12 bg-black text-white rounded-md bg-opacity-80">
        <h1 className="font-semibold text-3xl mb-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            value={""}
            className="p-2 my-4 w-full bg-gray-700 rounded-sm"
          />
        )}
        <input
          type="email"
          placeholder="Email"
          value={""}
          className="p-2 my-4 w-full bg-gray-700 rounded-sm"
        />
        <input
          type="password"
          placeholder="Password"
          value={""}
          className="p-2 my-4 w-full bg-gray-700 rounded-sm"
        />
        <button
          type="submit"
          className="bg-red-700 px-4 py-2 my-6 font-medium rounded-sm"
        >
          Login
        </button>
        <p
          className="text-md cursor-pointer"
          onClick={() => setIsSignInForm(!isSignInForm)}
        >
          {isSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Already a user? Sign In Now"}
        </p>
      </form>
    </div>
  );
}

export default Login;
