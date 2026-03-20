'use cache';

async function getProducts() {
  const products = await db.product.findMany();
  return products;
}