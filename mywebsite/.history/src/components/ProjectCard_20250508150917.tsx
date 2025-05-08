interface ProjectCardProps {
  emoji: string;
  title: string;
  description: string;
}

export default function ProjectCard({ emoji, title, description }: ProjectCardProps) {
  return (
    <div className="p-6 bg-white rounded-xl shadow-md border border-green-100 hover:shadow-lg transition-shadow">
      <h3 className="text-xl font-semibold mb-2 text-green-700">
        {emoji} {title}
      </h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}