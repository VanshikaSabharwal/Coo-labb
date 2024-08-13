"use strict";
"use client";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Login;
var react_1 = require("next-auth/react");
var ChatRoom_1 = __importDefault(require("../ChatRoom/ChatRoom"));
var rx_1 = require("react-icons/rx");
function Login() {
    var session = (0, react_1.useSession)().data;
    if (session) {
        return (<>
        <ChatRoom_1.default />
      </>);
    }
    return (<>
      Not signed in <br />
      <div className="signIn">
        <h2>Sign In to continue</h2>

        <div className="github">
          <button onClick={function () { return (0, react_1.signIn)("github"); }}>
            <rx_1.RxGithubLogo />
          </button>
        </div>
      </div>
    </>);
}
