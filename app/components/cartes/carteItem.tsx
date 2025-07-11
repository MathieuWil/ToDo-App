'use client';

import { Trash, PenLine } from "lucide-react";
import { deleteCarte } from "@/app/actions/deleteCarte";

interface CarteItemProps {
  carte: {
    updated_at: string | number | Date;
    created_at: string | number | Date;
    id: number;
    titre: string;
    description?: string | null;
  };
}

export default function CarteItem({ carte }: CarteItemProps) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg border border-black dark:border-white">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{carte.titre}</div>
        <p>{carte.description}</p>
        <div className="text-xs text-gray-500 mt-2">
          Créé le : {new Date(carte.created_at).toLocaleDateString()}
          <br />
          Modifié le : {new Date(carte.updated_at).toLocaleDateString()}
        </div>
      </div>
      <div className="px-6 pt-4 pb-2 flex gap-2">
        <form action={deleteCarte}>
          <input type="hidden" name="id" value={carte.id} />
          <button
            type="submit"
            className="hover:text-black dark:hover:text-white"
            aria-label="Supprimer"
          >
            <Trash />
          </button>
        </form>
        <button
          // ici redirection pour édition
          onClick={() => {
            window.location.href = `/edit/${carte.id}`;
          }}
          className="hover:text-black dark:hover:text-white"
          aria-label="Modifier"
        >
          <PenLine />
        </button>
      </div>
    </div>
  );
}
