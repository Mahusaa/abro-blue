import AllProducts from "@/components/all-products";
import { getProducts } from "@/server/db/queries";

export default async function Page() {
  const products = await getProducts()
  return (
    <AllProducts products={products} />
  )
}
