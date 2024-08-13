"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addFriendValidator = void 0;
var zod_1 = require("zod");
exports.addFriendValidator = zod_1.z.object({
    email: zod_1.z.string().email(),
});
