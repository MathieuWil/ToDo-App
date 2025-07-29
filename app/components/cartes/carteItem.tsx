"use client";

import { useRouter } from "next/navigation";
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
  const router = useRouter();

  return (
    
    <div className="max-w-sm rounded overflow-hidden border">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{carte.titre}</div>
        <p className="break-words whitespace-pre-wrap">{carte.description}</p>
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
            className="hover:text-gray-500"
            aria-label="Supprimer"
          >
            <Trash />
          </button>
        </form>
        <button
          onClick={() => router.push(`/edit/${carte.id}`)}
          className="hover:text-gray-500"
          aria-label="Modifier"
        >
          <PenLine />
        </button>
      </div>
    </div>
  );
}
