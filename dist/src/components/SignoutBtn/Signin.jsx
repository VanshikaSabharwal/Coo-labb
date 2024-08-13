"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_2 = require("next-auth/react");
var Signin = function () {
    var session = (0, react_2.useSession)().data;
    return (<div>
      <button onClick={function () { return (0, react_2.signOut)(); }}>Sign out</button>
    </div>);
};
exports.default = Signin;
