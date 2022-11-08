import {
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

export const signInFireBase = async (
  auth: Auth,
  email: string,
  password: string
) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );

    const { user } = userCredential;

    return user;
  } catch (error) {
    throw new Error(error as string);
  }
};

export const createNewUserFireBase = async (
  auth: Auth,
  email: string,
  password: string
) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    const { user } = userCredential;

    return user;
  } catch (error) {
    throw new Error(error as string);
  }
};

export const signOutFireBase = async (auth: Auth) => {
  try {
    await signOut(auth);
  } catch (error) {
    throw new Error(error as string);
  }
};
