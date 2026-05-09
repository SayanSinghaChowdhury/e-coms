import z from "zod";
import { dateSchema } from "./schema";

export type dateType = z.infer<typeof dateSchema>;
