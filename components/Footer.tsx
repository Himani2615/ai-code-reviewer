import Link from "next/link";
import { Code2, Heart } from "lucide-react";
import { SiGithub } from "@icons-pack/react-simple-icons";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-900 bg-black">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-8 py-6 text-sm text-neutral-400 md:flex-row">
        <div className="flex items-center gap-2">
          <Code2 className="h-5 w-5 text-amber-600" />
          <span>
            <span className="font-semibold text-neutral-200">
              AI Code Reviewer
            </span>{" "}
            © {new Date().getFullYear()}
          </span>
        </div>

        <p className="text-center">
          Crafted with{" "}
          <Heart className="mx-1 inline h-4 w-4 fill-amber-600 text-amber-600" />
          by{" "}
          <span className="font-medium text-neutral-200">
            Himani Singh
          </span>
        </p>

        <Link
          href="https://github.com/himani2615"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 transition-colors hover:text-amber-500"
        >
          <SiGithub className="h-4 w-4" />
          <span>@himani2615</span>
        </Link>
      </div>
    </footer>
  );
}