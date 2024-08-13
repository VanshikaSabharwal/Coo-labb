import React from "react";
import { useSession, signOut } from "next-auth/react";
var Signin = function () {
    var session = useSession().data;
    return (<div>
      <button onClick={function () { return signOut(); }}>Sign out</button>
    </div>);
};
export default Signin;
