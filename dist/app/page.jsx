"use client";
import { useSession, signIn } from "next-auth/react";
import ChatRoom from "@/src/components/ChatRoom/ChatRoom";
import { RxGithubLogo } from "react-icons/rx";
import { AiFillGoogleCircle } from "react-icons/ai";
export default function Login() {
    var session = useSession().data;
    console.log(session);
    if (session) {
        return (<>
        <ChatRoom />
      </>);
    }
    return (<div className="signIn flex items-center justify-center flex-col h-full w-screen">
      <div className="rounded border-2 w-1/2 h-96 flex items-center justify-center flex-col">
        <h2 className=" text-center text-2xl ">Sign In to continue</h2>

        <div className="github text-center">
          <button onClick={function () { return signIn("github"); }}>
            <RxGithubLogo className="w-10 h-10 my-1 mx-1"/>
          </button>
          <button onClick={function () { return signIn("google"); }}>
            <AiFillGoogleCircle className="w-10 h-10 my-1 mx-1"/>
          </button>
        </div>
      </div>
    </div>);
}
