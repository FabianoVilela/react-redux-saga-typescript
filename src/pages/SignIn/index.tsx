import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { StoreState } from "../../store/createStore";
import { signInRequest } from "../../store/features/auth/actions";

import "./index.css";

const SignIn: React.FC = () => {
  const { loadingSignInRequest, isSignedIn, token, error } = useSelector(
    (state: StoreState) => state.auth
  );
  const dispatch = useDispatch();

  const handleSignIn = (email: string, password: string) => {
    dispatch(signInRequest({ email, password }));
  };

  return (
    <div className='sign-in-page'>
      <input type='text' defaultValue='test@email.com' />
      <input type='password' defaultValue='12345678' />
      {error && (
        <span className='error'>Oh noooo!, something bad happened</span>
      )}
      <button
        onClick={() => handleSignIn("test@email.com", "12345678")}
        disabled={loadingSignInRequest}
      >
        {loadingSignInRequest ? "Loading" : "Sign In"}
      </button>
    </div>
  );
};

export default SignIn;
