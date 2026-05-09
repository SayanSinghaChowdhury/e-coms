import z from "zod";

export const dateSchema = z.object({
	date: z.date({ error: "Pick Date Properly" }),
});
