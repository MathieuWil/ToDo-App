"use server";

import { prisma } from "@/lib/prisma";

export async function updateCarte({
  id,
  titre,
  description,
  etat,
}: {
  id: number;
  titre?: string;
  description?: string;
  etat?: number;
}) {
  return await prisma.carte.update({
    where: { id },
    data: {
      titre,
      description,
      etat,
    },
  });
}
