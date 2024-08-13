"use strict";
"use client";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Login;
var react_1 = require("next-auth/react");
var ChatRoom_1 = __importDefault(require("@/src/components/ChatRoom/ChatRoom"));
var rx_1 = require("react-icons/rx");
var ai_1 = require("react-icons/ai");
var OneToOneChat_1 = __importDefault(require("../components/OneToOneChat/OneToOneChat"));
function Login() {
    var session = (0, react_1.useSession)().data;
    if (session) {
        return (<>
        <h1>Chat App</h1>
        <OneToOneChat_1.default receiverId="hello"/>
        <ChatRoom_1.default />
      </>);
    }
    return (<div className="signIn flex items-center justify-center flex-col h-full w-screen">
      <div className="rounded border-2 w-1/2 h-96 flex items-center justify-center flex-col">
        <h2 className=" text-center text-2xl ">Sign In to continue</h2>

        <div className="github text-center">
          <button onClick={function () { return (0, react_1.signIn)("github"); }}>
            <rx_1.RxGithubLogo className="w-10 h-10 my-1 mx-1"/>
          </button>
          <button onClick={function () { return (0, react_1.signIn)("google"); }}>
            <ai_1.AiFillGoogleCircle className="w-10 h-10 my-1 mx-1"/>
          </button>
        </div>
      </div>
    </div>);
}
