"use strict";
"use client";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var socket_io_client_1 = __importDefault(require("socket.io-client"));
var useSocket = function (url) {
    var _a = (0, react_1.useState)(null), socket = _a[0], setSocket = _a[1];
    (0, react_1.useEffect)(function () {
        var socketIo = (0, socket_io_client_1.default)(url);
        setSocket(socketIo);
        return function () {
            socketIo.disconnect();
        };
    }, [url]);
    return socket;
};
exports.default = useSocket;
