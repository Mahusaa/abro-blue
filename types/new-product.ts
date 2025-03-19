
import { z } from "zod";
import { NewProduct } from "@/server/db/schema";

export const productSchema = z.object({
  name: z.string().min(1, "Product name is required").max(100),
  category: z.string().min(1, "Category is required").max(50),
  description: z.string().optional(),
});

export interface ActionResponse {
  success: boolean;
  message: string;
  errors?: Partial<Record<keyof NewProduct, string[]>>;
}
