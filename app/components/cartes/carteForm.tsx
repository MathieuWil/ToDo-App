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
      router.refresh(); // Recharge la page / liste des cartes
    } catch (err) {
      setError('Erreur lors de la création de la carte');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-end gap-4 py-4">
      <div className="flex flex-col">
        <label htmlFor="titre" className="text-sm font-medium">
          Titre <span className="text-red-500">*</span>
        </label>
        <input
          id="titre"
          name="titre"
          type="text"
          required
          className="border px-2 py-1 rounded"
          disabled={loading}
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="description" className="text-sm font-medium">
          Description
        </label>
        <input
          id="description"
          name="description"
          type="text"
          className="border px-2 py-1 rounded"
          disabled={loading}
        />
      </div>

      <button
        type="submit"
        className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 disabled:opacity-50"
        disabled={loading}
        aria-label="Ajouter"
      >
        <Plus />
      </button>

      {error && <p className="text-red-500 ml-4">{error}</p>}
    </form>
  );
}
