import { prisma } from "@/lib/prisma";

export async function getCartes() {
  return await prisma.carte.findMany({
    orderBy: {
      created_at: "desc",
    },
  });
}