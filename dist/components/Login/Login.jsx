"use client";
import { useSession, signIn } from "next-auth/react";
import ChatRoom from "../ChatRoom/ChatRoom";
import { RxGithubLogo } from "react-icons/rx";
export default function Login() {
    var session = useSession().data;
    if (session) {
        return (<>
        <ChatRoom />
      </>);
    }
    return (<>
      Not signed in <br />
      <div className="signIn">
        <h2>Sign In to continue</h2>

        <div className="github">
          <button onClick={function () { return signIn("github"); }}>
            <RxGithubLogo />
          </button>
        </div>
      </div>
    </>);
}
