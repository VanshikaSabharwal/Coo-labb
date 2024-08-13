"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState, Suspense } from "react";
import axios from "axios";
var AcceptFriend = function () {
    var searchParams = useSearchParams();
    var _a = useState(true), loading = _a[0], setLoading = _a[1];
    var _b = useState(null), error = _b[0], setError = _b[1];
    var _c = useState(false), success = _c[0], setSuccess = _c[1];
    useEffect(function () {
        var token = searchParams.get("token");
        if (token) {
            axios
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
var SuspenseWrapper = function () { return (<Suspense fallback={<p>Loading....</p>}>
    <AcceptFriend />
  </Suspense>); };
export default SuspenseWrapper;
