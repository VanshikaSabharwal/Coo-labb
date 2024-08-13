"use strict";
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
// components/ChatRoom.tsx
var react_1 = __importStar(require("react"));
var useSocket_1 = __importDefault(require("../../../hooks/useSocket"));
var ChatRoom = function () {
    var socket = (0, useSocket_1.default)("http://localhost:4000");
    var _a = (0, react_1.useState)([]), messages = _a[0], setMessages = _a[1];
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
      <h2>Receiver Chat</h2>
      <div>
        {messages.map(function (msg, index) { return (<div key={index}>{msg}</div>); })}
      </div>
    </div>);
};
exports.default = ChatRoom;
