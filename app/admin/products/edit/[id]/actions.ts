'use server'

import { db } from "@/server/db";
import { product } from "@/server/db/schema";
import { revalidatePath } from "next/cache";
import { ActionResponse } from "@/types/new-product";
import { editSchema } from "@/types/edit-product";
import { eq } from "drizzle-orm";



export async function editAction(
  prevState: ActionResponse | null,
  formData: FormData
): Promise<ActionResponse> {
  const rawData = {
    id: Number(formData.get("id")),
    name: formData.get("name") as string,
    category: formData.get("category") as string,
    description: formData.get("description") as string | null,
  };

  // Validate input using Zod schema
  const result = editSchema.safeParse(rawData);
  if (!result.success) {
    return {
      success: false,
      message: "Please fix the errors in the form",
      errors: result.error.flatten().fieldErrors,
    };
  }

  try {

    await db.update(product)
      .set({
        name: result.data.name,
        description: result.data.description,
        category: result.data.category,
        updatedAt: new Date(),
      })
      .where(eq(product.id, result.data.id));

    revalidatePath("/products");
    return {
      success: true,
      message: "Product created successfully",
    };
  } catch (error) {
    console.error("Operation error:", error);
    return {
      success: false,
      message: "Error processing request",
    };
  }
}

