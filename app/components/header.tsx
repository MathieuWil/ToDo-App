import Link from 'next/link'
import SunMoonButton from './themeButton'

export default function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-4 text-gray-700 dark:text-gray-300 bg-stone-100 dark:bg-stone-900 transition-colors duration-300">
  {/* Titre */}
  <Link href="/" className="text-xl font-bold">
    ToDo App!
  </Link>

  {/* Liens + icône */}
  <div className="flex items-center space-x-6">
    <Link href="/todolist" className="hover:text-gray-500 dark:hover:text-gray-400 transition">
      ToDo List
    </Link>
    <Link href="/about" className="hover:text-gray-500 dark:hover:text-gray-400 transition">
      À propos
    </Link>
    <SunMoonButton />
  </div>
</header>

  )
}

