import { NextResponse } from "next/server";
import { put, del } from "@vercel/blob";
import { db } from "@/server/db";
import { product } from "@/server/db/schema";
import { eq } from "drizzle-orm";

export async function POST(request: Request) {
  const formData = await request.formData();
  const file = formData.get("file") as File | null;
  const name = formData.get("name") as string;
  const category = formData.get("category") as string;
  const description = formData.get("description") as string;
  const productId = formData.get("id") as string | null;

  if (!name) {
    return NextResponse.json(
      { error: "Product name is required" },
      { status: 400 }
    );
  }

  try {
    let imageUrl: string | undefined;
    let imagePath: string | undefined;

    // If editing an existing product
    if (productId) {
      const existingProduct = await db.query.product.findFirst({
        where: eq(product.id, parseInt(productId))
      });

      if (!existingProduct) {
        return NextResponse.json(
          { error: "Product not found" },
          { status: 404 }
        );
      }

      if (file) {
        // Delete old blob if it exists
        if (existingProduct.imagePath) {
          await del(existingProduct.imagePath);
        }

        const blob = await put(file.name, file, {
          access: "public",
        });

        imageUrl = blob.url;
        imagePath = blob.pathname;
      } else {
        // Keep existing image if no new file uploaded
        imageUrl = existingProduct.imageUrl!;
        imagePath = existingProduct.imagePath!;
      }

      // Update product
      const updatedProduct = await db.update(product)
        .set({
          name,
          description,
          category,
          imageUrl,
          imagePath,
          updatedAt: new Date(),
        })
        .where(eq(product.id, parseInt(productId)))
        .returning();

      return NextResponse.json(updatedProduct[0]);
    }
    // Creating a new product
    else {
      if (!file) {
        return NextResponse.json(
          { error: "File is required for new products" },
          { status: 400 }
        );
      }

      // Upload to Vercel Blob
      const blob = await put(file.name, file, {
        access: "public",
      });

      // Save to database using Drizzle
      const newProduct = await db.insert(product).values({
        name,
        description,
        category,
        imageUrl: blob.url,
        imagePath: blob.pathname,
        updatedAt: new Date(),
      }).returning();

      return NextResponse.json(newProduct[0]);
    }
  } catch (error) {
    console.error("Operation error:", error);
    return NextResponse.json(
      { error: "Error processing request" },
      { status: 500 }
    );
  }
}
