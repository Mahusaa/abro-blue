'use server'
import { eq } from "drizzle-orm"
import { revalidatePath } from "next/cache"
import { db } from "@/server/db"
import { product } from "@/server/db/schema"

export interface ActionResponse {
  success: boolean;
  message: string;
}



export async function deleteProduct(prevState: ActionResponse | null, id: number): Promise<ActionResponse> {
  try {

    await db.delete(product)
      .where(eq(product.id, id))

    revalidatePath("/edit/users")

    return { success: true, message: `Item ${id} deleted successfully` }
  } catch (error) {
    return { success: false, message: error instanceof Error ? error.message : 'An unknown error occurred' }
  }
}


