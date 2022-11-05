import type { NextPage } from "next";
import { useContext } from "react";
import SignOutButton from "../src/components/entry/SignOutButton";
import { AuthenticationContext } from "./_app";

const Home: NextPage = () => {
    const { uid } = useContext(AuthenticationContext)!;

    return (
        <div>
            <div>Home Page</div>
            {uid && <SignOutButton />}
        </div>
    );
};

export default Home;
