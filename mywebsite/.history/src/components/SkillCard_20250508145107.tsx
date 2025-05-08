interface SkillCardProps {
    emoji: string;
    title: string;
    description: string;
  }
  
  export default function SkillCard({ emoji, title, description }: SkillCardProps) {
    return (
      <div className="p-6 bg-white rounded-2xl shadow-md">
        <h3 className="text-xl font-semibold mb-2">
          {emoji} {title}
        </h3>
        <p>{description}</p>
      </div>
    );
  }