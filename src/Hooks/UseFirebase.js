import initializeAuthentication from "../Firebase/FIrebase.init";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { useState } from "react";
import { useEffect } from "react";

initializeAuthentication();

const useFirebase = () => {
  const googleProvider = new GoogleAuthProvider();
  const auth = getAuth();

  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const googleSignInHandler = () => {
    setIsLoading(true);
    return signInWithPopup(auth, googleProvider).catch((error) => {
      setError(error.message);
    });
  };

  const handleSignOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
  }, []);

  return {
    googleSignInHandler,
    handleSignOut,
    user,
    error,
    isLoading,
    setIsLoading,
  };
};

export default useFirebase;
