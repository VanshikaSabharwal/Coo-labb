"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var AddFriend_1 = __importDefault(require("@/src/components/AddFriend/AddFriend"));
var friend = function () {
    return (<div>
      <div className="friendContainer">
        <h1 className="font-medium text-xl">Add your Friend</h1>
        <AddFriend_1.default />
      </div>
    </div>);
};
exports.default = friend;
