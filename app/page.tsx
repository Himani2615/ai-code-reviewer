import LoginButton from "@/components/LoginButton";
import { FolderGit2, Sparkles } from "lucide-react";
import { SiGithub } from "@icons-pack/react-simple-icons";
import FeatureCard from "@/components/FeatureCard";
import CodePreview from '@/components/CodePreview';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">

      <section className="relative overflow-hidden mx-auto max-w-[1500px] px-8 pt-28 pb-22">

        <div className="animate-fade-up max-w-xl lg:ml-20 lg:mt-20">
          <h1 className="text-6xl md:text-7xl font-extrabold tracking-tight">
            AI Code Reviewer
          </h1>

          <p className="mt-8 text-2xl text-neutral-200">
            Intelligent code reviews for GitHub repositories
          </p>

          <p className=" mt-6 max-w-2xl text-lg leading-8 text-neutral-400">
            Review files directly from your GitHub repositories using
            AI-powered suggestions, detect bugs, and improve code quality
            effortlessly.
          </p>

          <div className="mt-12">
            <LoginButton />
          </div>
        </div>

        <div className="hidden lg:block absolute right-10 top-16"> <CodePreview /> </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-32">
    <div className="grid gap-8 md:grid-cols-3 relative z-10 bg-black pt-24 pb-32">

        <FeatureCard
            title="GitHub Login"
            description="Securely authenticate with GitHub and instantly access your repositories."
            icon={SiGithub}
        />

        <FeatureCard
            title="Repository Browser"
            description="Browse repositories, navigate folders, and open files directly from GitHub."
            icon={FolderGit2}
        />

        <FeatureCard
            title="AI Code Reviews"
            description="Receive intelligent suggestions, identify bugs, and improve readability with AI."
            icon={Sparkles}
        />

    </div>
</section>
    </div>
  );
}