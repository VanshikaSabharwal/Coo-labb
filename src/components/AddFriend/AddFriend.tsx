"use client";

import { addFriendValidator } from "@/src/lib/validations/add-friend";
import axios from "axios";
import { FC, useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";

interface AddFriendButtonProps {}
type FormData = z.infer<typeof addFriendValidator>;

const AddFriend: FC<AddFriendButtonProps> = () => {
  const [success, setSuccess] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const { register, handleSubmit } = useForm<FormData>({
    resolver: zodResolver(addFriendValidator),
  });

  const handleShare = async (data: FormData) => {
    try {
      // Request to generate a unique token
      const response = await axios.post("/api/generate-token");
      const { token } = response.data;

      // Construct the shareable link
      const shareableLink = `${window.location.origin}/accept-friend?token=${token}`;

      // Copy the link to the clipboard
      await navigator.clipboard.writeText(shareableLink);
      alert("Link copied to clipboard!");

      setSuccess(true);
      setError(null); // Clear any previous errors
    } catch (error) {
      console.error("Failed to share the link:", error);
      setError("Failed to generate or copy the link.");
      setSuccess(false);
    }
  };

  return (
    <>
      <form className="max-w-sm" onSubmit={handleSubmit(handleShare)}>
        <label htmlFor="email" className="font-medium text-sm">
          Add your friend by E-Mail
        </label>
        <input
          {...register("email")}
          type="email"
          className="w-full rounded-md py-2 block"
          placeholder="name@google.com"
        />
        <button type="submit">Add</button>
      </form>
      {success && (
        <p>Friend request has been generated and copied to clipboard!</p>
      )}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </>
  );
};

export default AddFriend;
