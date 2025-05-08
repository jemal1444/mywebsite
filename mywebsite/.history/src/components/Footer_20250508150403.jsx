export default function Footer() {
  return (
    <footer className="bg-green-800 text-white py-8">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold">Jemal Eyasu</h3>
            <p className="text-green-200">Full Stack Developer</p>
          </div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-green-300 transition-colors">
              LinkedIn
            </a>
            <a href="#" className="hover:text-green-300 transition-colors">
              GitHub
            </a>
            <a href="#" className="hover:text-green-300 transition-colors">
              Twitter
            </a>
          </div>
        </div>
        <div className="mt-8 text-center text-green-300 text-sm">
          © {new Date().getFullYear()} All rights reserved
        </div>
      </div>
    </footer>
  );
}