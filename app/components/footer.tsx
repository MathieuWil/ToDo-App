import Link from "next/link";

export default function Footer() {
    return (
        <footer className="py-4 px-6 flex justify-center">
            <div className="flex items-center space-x-6">
                <Link href="https://github.com/MathieuWil/ToDo-App" className="hover:text-gray-500 dark:hover:text-gray-400 transition">
                    Github du Projet
                </Link>
                <Link href="https://www.linkedin.com/in/mathieu-wilkosz/" className="hover:text-gray-500 dark:hover:text-gray-400 transition">
                    Linkedin
                </Link>
                <Link href="/about" className="hover:text-gray-500 dark:hover:text-gray-400 transition">
                    Portfolio
                </Link>
            </div>
        </footer>
    );
}
