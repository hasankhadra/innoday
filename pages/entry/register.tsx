import type { NextPage } from "next";
// import { getAuth, onAuthStateChanged } from "firebase/auth";
import React, { useContext, useState } from "react";
import { useRouter } from "next/router";
import { onAuthStateChanged } from "firebase/auth";
import { FireBaseAppContext } from "../_app";
import { createNewUserFireBase } from "../../src/utils/firebase";

const Register: NextPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  const { auth } = useContext(FireBaseAppContext)!;

  onAuthStateChanged(auth, (user) => {
    if (user) {
      router.push("/");
    }
  });

  const signInWithEmailAndPasswordHandler = async (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    try {
      await createNewUserFireBase(auth, email, password);
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
      <h1 className="text-3xl mb-2 text-center font-bold">Register</h1>
      <div className="border border-blue-300 bg-blue-100 rounded-lg py-8 px-4">
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
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
