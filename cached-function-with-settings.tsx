import { cacheLife, cacheTag } from "next/cache";

async function getProducts() {
  "use cache"

  cacheLife("days"); // 24 hours
  cacheTag("products"); // Revalidate key

  const products = await db.product.findMany();
  return products;
}