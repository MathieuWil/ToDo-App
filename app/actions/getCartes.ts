"use server";
import { prisma } from "@/lib/prisma";

export async function getCartes() {
  return await prisma.carte.findMany({
    orderBy: {
      updated_at: "desc",
    },
  });
}