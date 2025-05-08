import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-gradient-to-br from-indigo-100 to-blue-200 text-gray-800">
        <div className="max-w-5xl mx-auto py-20 px-6">
          <h1 className="text-5xl font-bold mb-4 text-center text-indigo-700">
            Jemal Eyasu
          </h1>
          <h2 className="text-2xl font-semibold text-center mb-8">
            Full Stack Developer
          </h2>
          <p className="text-lg text-center text-gray-700 mb-12">
            I build secure and scalable web applications, blending frontend, backend, DevOps, and cybersecurity expertise.
          </p>

          <div id="skills" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Skills Cards */}
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
              <p>Authentication, access control, secure code practices</p>
            </div>
            <div className="p-6 bg-white rounded-2xl shadow-md">
              <h3 className="text-xl font-semibold mb-2">🚀 Deployment</h3>
              <p>Vercel, Heroku, GitHub Actions, CI/CD pipelines</p>
            </div>
            <div className="p-6 bg-white rounded-2xl shadow-md">
              <h3 className="text-xl font-semibold mb-2">⚙️ DevOps</h3>
              <p>Docker, Kubernetes, Git, CI/CD, infrastructure as code</p>
            </div>
            <div className="p-6 bg-white rounded-2xl shadow-md">
              <h3 className="text-xl font-semibold mb-2">🧪 Pentesting</h3>
              <p>OWASP Testing, Burp Suite, APK reverse engineering, mobile app security</p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
