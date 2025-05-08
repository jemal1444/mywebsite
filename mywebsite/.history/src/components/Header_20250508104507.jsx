import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-indigo-700">Jemal Eyasu</h1>
        <nav className="space-x-6">
          <Link href="/" className="text-gray-700 hover:text-indigo-600 font-medium">Home</Link>
          <Link href="#skills" className="text-gray-700 hover:text-indigo-600 font-medium">Skills</Link>
          <Link href="#contact" className="text-gray-700 hover:text-indigo-600 font-medium">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
