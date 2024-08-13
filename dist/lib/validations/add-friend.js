import { z } from "zod";
export var addFriendValidator = z.object({
    email: z.string().email(),
});
