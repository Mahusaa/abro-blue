'use server'

import { put } from "@vercel/blob";
import { db } from "@/server/db";
import { product } from "@/server/db/schema";
import { revalidatePath } from "next/cache";
import { productSchema } from "@/types/new-product";
import { ActionResponse } from "@/types/new-product";



export async function productAction(
  prevState: ActionResponse | null,
  formData: FormData
): Promise<ActionResponse> {
  const rawData = {
    name: formData.get("name") as string,
    category: formData.get("category") as string,
    description: formData.get("description") as string | null,
  };

  // Validate input using Zod schema
  const result = productSchema.safeParse(rawData);
  if (!result.success) {
    return {
      success: false,
      message: "Please fix the errors in the form",
      errors: result.error.flatten().fieldErrors,
    };
  }

  try {
    // Upload file first
    const file = formData.get("file") as File | null;
    let imageUrl: string | undefined;
    let imagePath: string | undefined;

    if (file) {
      const uploadResult = await uploadFile(file);
      if (!uploadResult.success) {
        return {
          success: false,
          message: uploadResult.message || "undefinded",
        };
      }
      imageUrl = uploadResult.imageUrl;
      imagePath = uploadResult.imagePath;
    }

    // Insert product into database
    await db.insert(product).values({
      name: result.data.name,
      description: result.data.description,
      category: result.data.category,
      imageUrl,
      imagePath,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

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

async function uploadFile(file: File): Promise<{ success: boolean; imageUrl?: string; imagePath?: string; message?: string }> {
  try {
    if (!file) {
      return { success: false, message: "No file selected" };
    }

    const blob = await put(file.name, file, { access: "public" });

    return {
      success: true,
      imageUrl: blob.url,
      imagePath: blob.pathname,
    };
  } catch (error) {
    console.error("File upload error:", error);
    return {
      success: false,
      message: "File upload failed",
    };
  }
}

