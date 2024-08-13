"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
var redis_1 = require("@upstash/redis");
exports.db = new redis_1.Redis({
    url: process.env.UPSTASH_REDIS_REST_URL,
    token: process.env.UPSTASH_REDIS_REST_TOKEN,
});
