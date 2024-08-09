import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";

const Signin = () => {
  const { data: session } = useSession();

  return (
    <div>
      <button onClick={() => signOut()}>Sign out</button>
    </div>
  );
};

export default Signin;
