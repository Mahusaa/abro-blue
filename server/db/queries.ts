import { and, eq, isNull } from 'drizzle-orm';
import { db } from '.';
import { cookies } from 'next/headers';
import { product, users } from './schema';
import { verifyToken } from '../auth/session';


export async function getUser() {
  const sessionCookie = (await cookies()).get('session');
  if (!sessionCookie?.value) {
    return null;
  }
  const sessionData = await verifyToken(sessionCookie.value);
  if (
    !sessionData?.user ||
    typeof sessionData.user.id !== 'number'
  ) {
    return null;
  }
  if (new Date(sessionData.expires) < new Date()) {
    return null;
  }
  const user = await db
    .select()
    .from(users)
    .where(and(eq(users.id, sessionData.user.id), isNull(users.deletedAt)))
    .limit(1);

  if (user.length === 0) {
    return null;
  }
  return user[0];
}

export async function getProducts() {
  const products = await db.query.product.findMany()
  return products
}

export async function getProduct(id: number) {
  const productone = await db.query.product.findFirst({
    where: eq(product.id, id),
  })
  return productone
}



