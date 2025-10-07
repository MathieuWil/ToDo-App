'use client';

import { Plus } from 'lucide-react';
import { createCarte } from '@/app/actions/createCarte';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function CarteForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const titre = formData.get('titre');
    if (typeof titre !== 'string' || titre.trim() === '') {
      setError('Le titre est obligatoire');
      setLoading(false);
      return;
    }

    try {
      await createCarte(formData);
      form.reset();
      router.refresh();
    } catch (err) {
      setError('Erreur lors de la création de la carte');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
  onSubmit={handleSubmit}
  className="flex flex-col sm:flex-row items-end justify-center gap-4 py-4 w-full"
>
  <div className="flex flex-col w-full sm:w-auto">
    <label htmlFor="titre" className="text-sm font-medium mb-1">
      Titre *
    </label>
    <input
      id="titre"
      name="titre"
      type="text"
      required
      className="border px-2 py-1 rounded w-full"
      disabled={loading}
    />
  </div>

  <div className="flex flex-col w-full sm:w-auto">
    <label htmlFor="description" className="text-sm font-medium mb-1">
      Description
    </label>
    <input
      id="description"
      name="description"
      type="text"
      className="border px-2 py-1 rounded w-full"
      disabled={loading}
    />
  </div>

  {/* Bouton centré sur mobile, inline sur tablette+ */}
  <div className="w-full sm:w-auto flex justify-center sm:justify-start">
    <button
      type="submit"
      className=" hover:text-gray-500 dark:hover:text-gray-400 transition"
      disabled={loading}
      aria-label="Ajouter"
    >
      <Plus />
    </button>
  </div>

  {error && (
    <p className="text-red-500 mt-2 sm:mt-0 sm:ml-4">{error}</p>
  )}
</form>

  );
}
