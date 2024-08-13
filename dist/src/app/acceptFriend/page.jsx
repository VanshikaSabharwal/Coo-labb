"use strict";
"use client";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var navigation_1 = require("next/navigation");
var react_1 = require("react");
var axios_1 = __importDefault(require("axios"));
var AcceptFriend = function () {
    var searchParams = (0, navigation_1.useSearchParams)();
    var _a = (0, react_1.useState)(true), loading = _a[0], setLoading = _a[1];
    var _b = (0, react_1.useState)(null), error = _b[0], setError = _b[1];
    var _c = (0, react_1.useState)(false), success = _c[0], setSuccess = _c[1];
    (0, react_1.useEffect)(function () {
        var token = searchParams.get("token");
        if (token) {
            axios_1.default
                .post("/api/acceptFriend", { token: token })
                .then(function (response) {
                setSuccess(true);
            })
                .catch(function (err) {
                setError(err.message);
            })
                .finally(function () {
                setLoading(false);
            });
        }
    }, [searchParams]);
    return (<div>
      {loading && <p>Loading....</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {success && <p>Friend request Accepted</p>}
    </div>);
};
var SuspenseWrapper = function () { return (<react_1.Suspense fallback={<p>Loading....</p>}>
    <AcceptFriend />
  </react_1.Suspense>); };
exports.default = SuspenseWrapper;
