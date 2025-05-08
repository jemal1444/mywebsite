interface ProjectCardProps {
    emoji: string;
    title: string;
    description: string;
  }
  
  export default function ProjectCard({ emoji, title, description }: ProjectCardProps) {
    return (
      <div className="bg-white rounded-2xl shadow-md p-6">
        <h3 className="text-xl font-semibold mb-2">
          {emoji} {title}
        </h3>
        <p>{description}</p>
      </div>
    );
  }