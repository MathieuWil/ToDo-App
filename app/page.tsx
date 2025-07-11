// app/page.tsx
import TodoList from "./components/cartes/TodoList";
import CarteForm from "./components/cartes/carteForm";

export default function Home() {
  return (
    <main className="px-6 py-8">
      <CarteForm />
      <TodoList />
    </main>
  );
}

