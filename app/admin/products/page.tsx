import ProductsTable from "@/components/products-table";
import { getProducts } from "@/server/db/queries";

export default async function Page() {
  const products = await getProducts()
  return (
    <ProductsTable products={products} />
  )
}
