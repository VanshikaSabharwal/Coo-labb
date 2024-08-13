"use strict";
"use client";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("next-auth/react");
var react_2 = __importDefault(require("react"));
var NextServer = function (_a) {
    var children = _a.children;
    return <react_1.SessionProvider>{children}</react_1.SessionProvider>;
};
exports.default = NextServer;
