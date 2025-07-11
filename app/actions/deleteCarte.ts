"use server";
import { prisma } from "@/lib/prisma";

export async function deleteCarte(formData: FormData) {
  const id = formData.get("id");
  if (!id || typeof id !== "string") {
    throw new Error("ID manquant");
  }
  await prisma.carte.delete({ where: { id: parseInt(id, 10) } });
}
