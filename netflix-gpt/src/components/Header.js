import { useNavigate } from "react-router-dom";
import logo from "../media/N-GPT-removebg-preview.png";
import facelogo from "../media/face.png";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { getAuth } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { auth } from "../utils/firebase";

export default function Header() {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        //Signed in case
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        //Signed Out case
        dispatch(removeUser());
        navigate("/");
      }
    });
  }, []);

  function handleLogoutClick() {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        console.log("signed out");
      })
      .catch((error) => {
        // An error happened.
      });
  }

  return (
    <>
      <div className="text-white text-center w-full font-semibold font-mono bg-black">
        This is a educational/personal project. Only for learning purpose!
      </div>
      <div className="absolute px-8 py-2 bg-gradient-to-b from-black w-full flex justify-between z-10">
        <img className="h-12 bg-stone-800" src={logo} alt="logo" />
        {user && (
          <div className="flex items-center">
            <p className="text-white font-medium pr-2 h-full">
              {user.displayName}
            </p>
            <img className="h-6 w-8" src={facelogo} alt="faceLogo" />
            <button
              className="text-white font-medium text-sm"
              onClick={handleLogoutClick}
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </>
  );
}
