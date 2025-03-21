import EditProduct from "@/components/edit-product"
import { getProduct } from "@/server/db/queries"

export default async function EditPage({
  params
}: {
  params: Promise<{ id: number }>

}) {
  const productId = (await params).id
  const product = await getProduct(productId)
  if (!product) {
    return <div>Product not found</div>;
  }

  return <EditProduct product={product} />;
}
