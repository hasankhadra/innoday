/* eslint-disable import/extensions */
import type { NextPage } from "next";
// import { getAuth, onAuthStateChanged } from "firebase/auth";
import React, { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { onAuthStateChanged } from "firebase/auth";
import { FireBaseAppContext } from "../_app";
import { signInFireBase } from "../../src/utils/firebase";

const Login: NextPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const { auth } = useContext(FireBaseAppContext)!;

  onAuthStateChanged(auth, (user) => {
    if (user) {
      router.push("/");
    }
  });

  useEffect(() => {
    setLoading(false);
  }, []);

  const signInWithEmailAndPasswordHandler = async (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    try {
      await signInFireBase(auth, email, password);
      router.push("/");
    } catch (_error) {
      setError("Error signing in with password and email!");
    }
  };
  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.currentTarget;

    if (name === "userEmail") {
      setEmail(value);
    } else if (name === "userPassword") {
      setPassword(value);
    }
  };
  return (
    
   <div>
    {loading ? <div></div>: <div></div>}
     <h1 className="text-3xl mb-2 text-center font-bold">Login</h1>
      <div className="login">
        {error !== "" && <div>{error}</div>}
        <form className="">
          <label htmlFor="userEmail" className="block">
            Email:
          </label>
          <input
            type="email"
            className="my-1 p-1 w-full"
            name="userEmail"
            value={email}
            placeholder="E.g: example@company.com"
            id="userEmail"
            onChange={(event) => onChangeHandler(event)}
          />
          <label htmlFor="userPassword" className="block">
            Password:
          </label>
          <input
            type="password"
            className="mt-1 mb-3 p-1 w-full"
            name="userPassword"
            value={password}
            placeholder="Your Password"
            id="userPassword"
            onChange={(event) => onChangeHandler(event)}
          />
          <button
            className="bg-green-400 hover:bg-green-500 w-full py-2 text-white"
            onClick={(event) => {
              signInWithEmailAndPasswordHandler(event);
            }}
          >
            {" "}
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
