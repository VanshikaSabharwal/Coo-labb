"use client";

import { addFriendValidator } from "@/src/lib/validations/add-friend";
import axios from "axios";
import { FC, useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { v4 as uuidv4 } from "uuid";

interface AddFriendButtonProps {}
type FormData = z.infer<typeof addFriendValidator>;

const AddFriend: FC<AddFriendButtonProps> = () => {
  const [success, setSuccess] = useState<boolean>(false);
  const router = useRouter();

  const { register, handleSubmit } = useForm<FormData>({
    resolver: zodResolver(addFriendValidator),
  });

  const handleShare = async (data: FormData) => {
    try {
      // Generate a unique token (this should be generated on the server side in a real-world app)
      const uniqueToken = uuidv4();
      const shareableLink = `${window.location.origin}/?token=${uniqueToken}`;

      // Copy the link to the clipboard
      await navigator.clipboard.writeText(shareableLink);
      alert("Link copied to clipboard!");

      router.push("/");

      setSuccess(true);
    } catch (error) {
      console.error("Failed to share the link:", error);
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
    </>
  );
};

export default AddFriend;
