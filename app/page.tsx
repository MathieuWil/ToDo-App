import { getCartes } from "@/app/actions/getCartes";
import CarteItem from "@/app/components/cartes/carteItem";
import CarteForm from "./components/cartes/carteForm";

export default async function HomePage() {
  const cartes = await getCartes();
  const ouvertes = cartes.filter(c => c.etat === 1);
  const fermees = cartes.filter(c => c.etat === 0);

  return (
    <div className="text-xl font-bold w-full max-w-5xl mx-auto px-4">
      <CarteForm />

      <h1 className="text-2xl font-bold mb-6 mt-8">Cartes Ouvertes</h1>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
        {ouvertes.map(carte => (
          <CarteItem key={carte.id} carte={carte} />
        ))}
      </div>

      <h2 className="text-2xl font-bold mb-6 mt-8">Cartes Fermées</h2>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 opacity-40 mb-12">
        {fermees.map(carte => (
          <CarteItem key={carte.id} carte={carte} />
        ))}
      </div>
    </div>
  );
}
