import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-green-700 text-white shadow-md">
      <nav className="max-w-5xl mx-auto p-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          Jemal Eyasu
        </Link>
        <div className="flex gap-6">
          <Link href="#skills" className="hover:text-green-200 transition-colors">
            Skills
          </Link>
          <Link href="#projects" className="hover:text-green-200 transition-colors">
            Projects
          </Link>
          <Link href="#contact" className="hover:text-green-200 transition-colors">
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
}