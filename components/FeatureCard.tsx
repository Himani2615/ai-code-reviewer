import { LucideIcon } from "lucide-react";
import { IconType } from "@icons-pack/react-simple-icons";

type FeatureCardProps = {
  title: string;
  description: string;
  icon: LucideIcon | IconType;
};

export default function FeatureCard({
  title,
  description,
  icon: Icon,
}: FeatureCardProps) {
  return (
    <div
      className="
      group
      rounded-3xl
      border border-neutral-800/70
      bg-neutral-950/60
      backdrop-blur-sm
      p-8
      transition-all
      duration-300
      hover:-translate-y-2
      hover:border-amber-700/50
      hover:bg-neutral-900/70
      hover:shadow-xl
      hover:shadow-amber-700/10"
    >
      <Icon
        className="mb-6 h-9 w-9 text-amber-700 transition-transform duration-300 group-hover:scale-110"
      />

      <h3 className="text-2xl font-semibold tracking-tight">
        {title}
      </h3>

      <p className="mt-4 leading-7 text-neutral-400">
        {description}
      </p>
    </div>
  );
}