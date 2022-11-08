import { getAuth } from "firebase/auth";
import { useRouter } from "next/router";

const SignOutButton = () => {
  const router = useRouter();
  const auth = getAuth();
  return (
    <button
      onClick={async () => {
        await auth.signOut();
        router.push("/entry/login");
      }}
    >
      Sign Out
    </button>
  );
};

export default SignOutButton;
