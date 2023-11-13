import validData from "../utils/validate";
import Header from "./Header";
import { useState, useRef } from "react";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import bgimage from "../media/background-login.jpg";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

function Login() {
  const navigate = useNavigate();
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const emailRef = useRef();
  const passwordRef = useRef();
  const nameRef = useRef();
  const dispatch = useDispatch();

  function handleButtonClick() {
    const message = validData(
      emailRef.current.value,
      passwordRef.current.value
    );

    console.log(message + emailRef.current.value + passwordRef.current.value);
    setErrorMessage(message);

    if (message != null) return;

    if (!isSignInForm) {
      // SIGN UP USER CREATION while LOGIN
      createUserWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      )
        .then((userCredential) => {
          // Signed in
          updateProfile(auth.currentUser, {
            displayName: nameRef.current.value,
          })
            .then(() => {
              // Profile updated!
              const { uid, email, displayName } = auth.currentUser;
              dispatch(
                addUser({ uid: uid, email: email, displayName: displayName })
              );
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMsg = error.message;
              setErrorMessage(errorCode + " " + errorMsg);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMsg = error.message;
          setErrorMessage(errorCode + " " + errorMsg);
        });
    } else {
      // USER SIGN IN LOGIC
      signInWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMsg = error.message;
          setErrorMessage(errorCode + " " + errorMsg);
        });
    }
  }

  return (
    <div className="relative">
      <Header />
      <div>
        <img src={bgimage} alt="background" />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute top-1/3 p-12 mx-auto left-0 right-0 w-3/12 bg-black text-white rounded-md bg-opacity-80"
      >
        <h1 className="font-semibold text-3xl mb-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            // value={""}
            ref={nameRef}
            className="p-2 my-3 w-full bg-gray-700 rounded-sm"
          />
        )}
        <input
          type="email"
          placeholder="Email"
          // value={""}
          className="p-2 my-3 w-full bg-gray-700 rounded-sm"
          ref={emailRef}
        />
        <input
          type="password"
          placeholder="Password"
          // value={""}
          className="p-2 my-3 w-full bg-gray-700 rounded-sm"
          ref={passwordRef}
        />
        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
        <button
          type="submit"
          className="bg-red-700 px-4 py-2 my-6 font-medium rounded-sm"
          onClick={handleButtonClick}
        >
          Login
        </button>
        <p
          className="text-md cursor-pointer"
          onClick={() => setIsSignInForm(!isSignInForm)}
        >
          {isSignInForm
            ? "New to N-GPT? Sign Up Now"
            : "Already a user? Sign In Now"}
        </p>
      </form>
    </div>
  );
}

export default Login;
