var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { useState, useEffect } from "react";
import useSocket from "../../../hooks/useSocket";
var OneToOneChat = function (_a) {
    var recieverId = _a.recieverId;
    var socket = useSocket("http:localhost:4000");
    var _b = useState(""), message = _b[0], setMessage = _b[1];
    var _c = useState([]), messages = _c[0], setMessages = _c[1];
    var sendMessage = function () {
        socket.emit("private_message", {
            recieverId: recieverId,
            message: message,
        });
        setMessage("");
    };
    useEffect(function () {
        var handlePrivateMessage = function (data) {
            setMessages(function (prevMessages) { return __spreadArray(__spreadArray([], prevMessages, true), [data.message], false); });
        };
        socket.on("private-message", handlePrivateMessage);
        return function () {
            socket.off("private_message", handlePrivateMessage);
        };
    }, [socket]);
    return (<div>
      <div>
        {messages.map(function (msg, index) { return (<div key={index}>{msg}</div>); })}
      </div>
      <input type="text" value={message} onChange={function (e) { return setMessage(e.target.value); }}/>
      <button onClick={sendMessage}>Send</button>
    </div>);
};
export default OneToOneChat;
