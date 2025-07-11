'use server';

import { prisma } from '@/lib/prisma';

export async function createCarte(formData: FormData) {
  const titreRaw = formData.get('titre');
  const descriptionRaw = formData.get('description');

  if (typeof titreRaw !== 'string' || titreRaw.trim() === '') {
    throw new Error('Le titre est requis et doit être une chaîne non vide.');
  }

  const titre = titreRaw.trim();
  const description = typeof descriptionRaw === 'string' ? descriptionRaw.trim() : null;

  await prisma.carte.create({
    data: {
      titre,
      description,
    },
  });
}

