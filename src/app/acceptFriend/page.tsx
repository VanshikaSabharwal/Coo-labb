"use client";

import { FC } from "react";
import { useSearchParams } from "next/navigation";
import { useEffect, useState, Suspense } from "react";
import axios from "axios";

const AcceptFriend: FC = () => {
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const token = searchParams.get("token");

    if (token) {
      axios
        .post("/api/acceptFriend", { token })
        .then((response) => {
          setSuccess(true);
        })
        .catch((err) => {
          setError(err.message);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [searchParams]);

  return (
    <div>
      {loading && <p>Loading....</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {success && <p>Friend request Accepted</p>}
    </div>
  );
};

const SuspenseWrapper: React.FC = () => (
  <Suspense fallback={<p>Loading....</p>}>
    <AcceptFriend />
  </Suspense>
);
export default SuspenseWrapper;
