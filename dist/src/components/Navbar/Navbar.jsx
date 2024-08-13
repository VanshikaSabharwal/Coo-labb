"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var link_1 = __importDefault(require("next/link"));
var react_1 = __importDefault(require("react"));
var Signin_1 = __importDefault(require("../SignoutBtn/Signin"));
var Navbar = function () {
    return (<div>
      <ul className="navbar my-5 mx-2.5 flex flex-row items-center justify-end gap-8">
        <li>
          <link_1.default href="/rooms">Rooms</link_1.default>
        </li>
        <li>
          <link_1.default href="">Tasks Pending</link_1.default>
        </li>
        <li>
          <Signin_1.default />
        </li>
      </ul>
    </div>);
};
exports.default = Navbar;
