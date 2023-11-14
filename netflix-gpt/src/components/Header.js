import { useNavigate } from "react-router-dom";
import logo from "../media/N-GPT-removebg-preview.png";
// import facelogo from "../media/face.png";
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
      {/* <div className="text-white text-center w-full font-semibold font-mono bg-black ">
        This is a educational/personal project. Only for learning purpose!
      </div> */}
      <div className="absolute px-8 py-4 bg-gradient-to-b from-black w-full flex justify-between z-10 items-center">
        <img className="h-12 bg-stone-800" src={logo} alt="logo" />
        {user && (
          <div className="flex items-center">
            <p className="text-white font-medium pr-2 h-full">
              {user.displayName}
            </p>
            {/* <img className="h-6 w-8" src={facelogo} alt="faceLogo" /> */}

            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 34 34"
              className="w-7 h-7 stroke-red-900 fill-red-900 mr-2"
            >
              <g>
                <path
                  d="M25.773,11.19c0,1.354-1.098,2.454-2.453,2.454c-1.354,0-2.451-1.1-2.451-2.454s1.1-2.453,2.451-2.453
		C24.677,8.737,25.773,9.836,25.773,11.19z M10.681,8.737c-1.354,0-2.453,1.099-2.453,2.453s1.101,2.454,2.453,2.454
		c1.354,0,2.453-1.1,2.453-2.454S12.037,8.737,10.681,8.737z M26.242,20.396c0.469-0.686,0.297-1.617-0.387-2.086
		c-0.685-0.473-1.615-0.297-2.086,0.385c-1.539,2.23-4.066,3.564-6.77,3.564c-2.701,0-5.231-1.334-6.77-3.564
		c-0.469-0.684-1.402-0.854-2.086-0.387c-0.682,0.471-0.855,1.402-0.385,2.086c2.096,3.047,5.551,4.865,9.24,4.865
		C20.688,25.262,24.145,23.441,26.242,20.396z M34,26.828V7.172C34,3.217,30.781,0,26.826,0H7.172C3.218,0,0,3.217,0,7.172v19.656
		C0,30.783,3.218,34,7.172,34h19.654C30.783,34,34,30.783,34,26.828z M26.828,4c1.75,0,3.174,1.423,3.174,3.172v19.655
		c0,1.75-1.424,3.172-3.174,3.172H7.174c-1.75,0-3.172-1.422-3.172-3.172V7.171c0-1.749,1.422-3.172,3.172-3.172L26.828,4L26.828,4z
		"
                />
              </g>
            </svg>
            <button
              className="text-white font-medium text-sm items-center"
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
