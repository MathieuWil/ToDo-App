import { getCarteById } from "@/lib/cartes";
import { updateCarte } from "@/app/actions/updateCarte";
import { redirect } from "next/navigation";

export default async function EditCartePage({ params }: { params: { id: string } }) {
  const carteId = parseInt(params.id);
  const carte = await getCarteById(carteId);

  if (!carte) return <div>Carte introuvable</div>;

  async function handleUpdate(formData: FormData) {
    "use server";

    const titre = formData.get("titre") as string;
    const description = formData.get("description") as string;
    const etat = parseInt(formData.get("etat") as string);

    await updateCarte({ id: carteId, titre, description, etat });
    redirect("/");
  }

  return (
    <form action={handleUpdate} className="max-w-lg mx-auto p-4 flex flex-col gap-4">
      <h1 className="text-xl font-bold mb-4">Modifier la carte</h1>

      <div>
        <label className="block mb-1 font-medium">Titre</label>
        <input
          name="titre"
          defaultValue={carte.titre}
          className="w-full border px-2 py-1"
          required
        />
      </div>

      <div>
        <label className="block mb-1 font-medium">Description</label>
        <textarea
          name="description"
          defaultValue={carte.description ?? ""}
          className="w-full border px-2 py-1"
        />
      </div>

      <div>
  <label className="block mb-1 font-medium">État</label>
  <div className="flex gap-4">
    <label className="flex items-center gap-1">
      <input
        type="radio"
        name="etat"
        value="1"
        defaultChecked={carte.etat === 1}
      />
      Ouvert
    </label>
    <label className="flex items-center gap-1">
      <input
        type="radio"
        name="etat"
        value="0"
        defaultChecked={carte.etat === 0}
      />
      Fermé
    </label>
  </div>
</div>


      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
        Enregistrer
      </button>
    </form>
  );
}
