import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SkillCard from '@/components/SkillCard';
import ProjectCard from '@/components/ProjectCard';
import { Metadata } from 'next';
import { motion } from 'framer-motion';

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

      <main className="min-h-screen bg-gradient-to-br from-indigo-100 to-blue-200 text-gray-800">
        <div className="max-w-5xl mx-auto py-20 px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl font-bold mb-4 text-center text-indigo-700">
              Jemal Eyasu
            </h1>
            <h2 className="text-2xl font-semibold text-center mb-8">
              Full Stack Developer
            </h2>
            <p className="text-lg text-center text-gray-700 mb-12">
              I build secure and scalable web applications, blending frontend, backend, DevOps, and cybersecurity expertise.
            </p>
          </motion.div>

          <div id="skills" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <SkillCard {...skill} />
              </motion.div>
            ))}
          </div>
        </div>

        <div id="projects" className="max-w-5xl mx-auto px-6 pb-20">
          <motion.h2 
            className="text-3xl font-bold text-center text-indigo-700 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Projects
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}