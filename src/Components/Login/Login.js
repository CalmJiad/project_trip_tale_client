import React from "react";
import { useHistory, useLocation } from "react-router";
import useAuth from "../../Hooks/useAuth";

const Login = () => {
  const { googleSignInHandler, user, handleSignOut, setIsLoading } = useAuth();
  const location = useLocation();
  const redirect_url = location.state?.from || "/home";
  const history = useHistory();

  const handleGoogleSignIn = () => {
    googleSignInHandler()
      .then((result) => {
        history.push(redirect_url);
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <div className="container-fluid bg-info py-5">
      {user.email && (
        <h3 className="text-center mb-3">
          Welcome to <span className="text-danger fs-2">Trip Tale</span> !{" "}
          {user.displayName}
        </h3>
      )}
      <h2 className="text-center mb-5">
        {user.email
          ? "Want to sign out from your account?"
          : "Log In Using Google Account"}
      </h2>
      <div className="text-center m-auto">
        {!user.email ? (
          <button onClick={handleGoogleSignIn} className="btn bg-success px-5">
            <i className="fab fa-4x fa-google text-white"></i>
          </button>
        ) : (
          <button onClick={handleSignOut} className="btn btn-success px-5">
            Log Out
          </button>
        )}
      </div>
    </div>
  );
};

export default Login;
