import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SkillCard from '@/components/SkillCard';
import ProjectCard from '@/components/ProjectCard';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Jemal Eyasu | Full Stack Developer',
  description: 'I build secure and scalable web applications with expertise in frontend, backend, DevOps, and cybersecurity.',
  openGraph: {
    images: '/og-image.png',
  },
};

const skills = [
  {
    emoji: '💻',
    title: 'Frontend',
    description: 'React, Next.js, Tailwind, HTML/CSS, JavaScript',
  },
  {
    emoji: '🛠',
    title: 'Backend',
    description: 'Node.js, Express, MongoDB, REST APIs',
  },
  {
    emoji: '🔐',
    title: 'Security',
    description: 'Authentication, access control, secure code practices',
  },
  {
    emoji: '🚀',
    title: 'Deployment',
    description: 'Vercel, Heroku, GitHub Actions, CI/CD pipelines',
  },
  {
    emoji: '⚙️',
    title: 'DevOps',
    description: 'Docker, Kubernetes, Git, CI/CD, infrastructure as code',
  },
  {
    emoji: '🧪',
    title: 'Pentesting',
    description: 'OWASP Testing, Burp Suite, APK reverse engineering, mobile app security',
  },
];

const projects = [
  {
    emoji: '🌐',
    title: 'Personal Portfolio',
    description: 'A responsive site showcasing my skills, built with Next.js and Tailwind.',
  },
  {
    emoji: '💳',
    title: 'Secure Payment App',
    description: 'A mobile-first app with authentication and encrypted transaction data.',
  },
];

export default function Home() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 text-gray-800">
        <div className="max-w-5xl mx-auto py-20 px-6">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-4 text-green-800">
              Jemal Eyasu
            </h1>
            <h2 className="text-2xl font-semibold mb-8 text-green-700">
              Full Stack Developer
            </h2>
            <p className="text-lg mb-12 text-gray-700 max-w-2xl mx-auto">
              I build secure and scalable web applications, blending frontend, backend, DevOps, and cybersecurity expertise.
            </p>
          </div>

          {/* Skills Section */}
          <div id="skills" className="mb-20">
            <h2 className="text-3xl font-bold text-center text-green-800 mb-8">
              Skills
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills.map((skill) => (
                <SkillCard 
                  key={skill.title}
                  emoji={skill.emoji}
                  title={skill.title}
                  description={skill.description}
                />
              ))}
            </div>
          </div>

          {/* Projects Section */}
          <div id="projects" className="mt-12">
            <h2 className="text-3xl font-bold text-center text-green-800 mb-8">
              Projects
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {projects.map((project) => (
                <ProjectCard
                  key={project.title}
                  emoji={project.emoji}
                  title={project.title}
                  description={project.description}
                />
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}