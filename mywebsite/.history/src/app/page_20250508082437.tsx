export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-100 to-blue-200 text-gray-800">
      <div className="max-w-4xl mx-auto py-20 px-6">
        <h1 className="text-5xl font-bold mb-4 text-center text-indigo-700">
          Jemal Eyasu
        </h1>
        <h2 className="text-2xl font-semibold text-center mb-8">
          Full Stack Developer
        </h2>
        <p className="text-lg text-center text-gray-700 mb-12">
          I build responsive web apps with modern technologies like React, Node.js, and Tailwind CSS.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="p-6 bg-white rounded-2xl shadow-md">
            <h3 className="text-xl font-semibold mb-2">💻 Frontend</h3>
            <p>React, Next.js, Tailwind, HTML/CSS, JavaScript</p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow-md">
            <h3 className="text-xl font-semibold mb-2">🛠 Backend</h3>
            <p>Node.js, Express, MongoDB, REST APIs</p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow-md">
            <h3 className="text-xl font-semibold mb-2">🔐 Security</h3>
            <p>Secure coding practices, authentication, and access control</p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow-md">
            <h3 className="text-xl font-semibold mb-2">🚀 Deployment</h3>
            <p>Vercel, Heroku, GitHub Actions, CI/CD pipelines</p>
          </div>
        </div>
      </div>
    </main>
  );
}
