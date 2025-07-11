import { getCartes } from "@/app/actions/getCartes";
import CarteItem from "./carteItem";

export default async function TodoList() {
  const cartes = await getCartes();

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {cartes.map((carte) => (
        <CarteItem key={carte.id} carte={carte} />
      ))}
    </div>
  );
}
