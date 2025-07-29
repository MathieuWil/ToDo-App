import Link from 'next/link'
import SunMoonButton from './themeButton'

export default function Header() {
  return (
    <header className="max-w-screen-lg mx-auto flex items-center justify-between px-6 py-4">
  
  {/* Titre */}
  <Link href="/" className="text-xl font-bold">
    ToDo App!
  </Link>

  {/* Liens + icône */}
  <div className="flex items-center space-x-6">
    <Link href="/" className="hover:text-gray-500 dark:hover:text-gray-400 transition">
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

