import { getCartes } from "@/app/actions/getCartes";
import CarteItem from "@/app/components/cartes/carteItem";
import CarteForm from "./components/cartes/carteForm";

export default async function HomePage() {
  const cartes = await getCartes();
  const ouvertes = cartes.filter(c => c.etat === 1);
  const fermees = cartes.filter(c => c.etat === 0);

  return (
    <div className="text-xl font-bold  w-0.8 mx-auto">
      <CarteForm />
      <h1 className="text-2xl font-bold mb-10 mt-15 ml-8">Cartes Ouvertes</h1>
      <div className="w-4/5 mx-auto grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
        {ouvertes.map(carte => (
          <CarteItem key={carte.id} carte={carte} />
        ))}
      </div>

      <h2 className="text-2xl font-bold mb-10 mt-15 ml-8">Cartes Fermées</h2>
      <div className="w-4/5 mx-auto grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 mb-45 opacity-40">
        {fermees.map(carte => (
          <CarteItem key={carte.id} carte={carte} />
        ))}
      </div>
    </div>
  );
}
