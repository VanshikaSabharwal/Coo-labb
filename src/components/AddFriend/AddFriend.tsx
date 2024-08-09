"use client";

import { addFriendValidator } from "@/src/lib/validations/add-friend";
import axios, { AxiosError } from "axios";
import { FC } from "react";
import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const AddFriend: FC = () => {
  const [success, setSuccess] = useState<boolean>(false);

  const {} = useForm<FormData>({ resolver: zodResolver(addFriendValidator) });
  const addFriend = async (email: string) => {
    try {
      const emailValidate = addFriendValidator.parse({ email });
      await axios.post("/api/friend/add", {
        email: emailValidate,
      });
      setSuccess(true);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return;
      }
      if (error instanceof AxiosError) {
        return;
      }
    }
  };
  return (
    <form className="max-w-sm">
      <label htmlFor="email" className="font-medium text-sm">
        Add your friend by E-Mail
      </label>
      <input
        type="email"
        className="w-full rounded-md py-2 block"
        placeholder="name@google.com"
      />
      <button>Add </button>
    </form>
  );
};

export default AddFriend;
