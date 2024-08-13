"use strict";
"use client"; // components/OneToOneChat.tsx
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var useSocket_1 = __importDefault(require("../../../hooks/useSocket"));
var OneToOneChat = function (_a) {
    var receiverId = _a.receiverId;
    var socket = (0, useSocket_1.default)("http://localhost:4000");
    var _b = (0, react_1.useState)(""), message = _b[0], setMessage = _b[1];
    var _c = (0, react_1.useState)([]), messages = _c[0], setMessages = _c[1];
    var sendMessage = function () {
        if (socket) {
            socket.emit("private_message", { receiverId: receiverId, message: message });
            setMessage("");
        }
    };
    (0, react_1.useEffect)(function () {
        var handlePrivateMessage = function (data) {
            setMessages(function (prevMessages) { return __spreadArray(__spreadArray([], prevMessages, true), [
                "".concat(data.senderId, ": ").concat(data.message),
            ], false); });
        };
        if (socket) {
            socket.on("private_message", handlePrivateMessage);
            return function () {
                socket.off("private_message", handlePrivateMessage);
            };
        }
    }, [socket]);
    return (<div>
      <h2>Sender Chat</h2>
      <div>
        {messages.map(function (msg, index) { return (<div key={index}>{msg}</div>); })}
      </div>
      <input type="text" value={message} onChange={function (e) { return setMessage(e.target.value); }}/>
      <button onClick={sendMessage}>Send</button>
    </div>);
};
exports.default = OneToOneChat;
