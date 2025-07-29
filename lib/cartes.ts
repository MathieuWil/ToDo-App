import { prisma } from "@/lib/prisma";

export async function getCarteById(id: number) {
  return await prisma.carte.findUnique({ where: { id } });
}
