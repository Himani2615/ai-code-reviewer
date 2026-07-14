import Link from "next/link";
import {  Star, GitFork, Lock, Globe } from "lucide-react";
import { formatDistanceToNow } from "date-fns";
import { GitHubRepository } from "@/types/github";


export default function RepositoryCard({ repo }: { repo: GitHubRepository }) {
  return (
    <Link
      href={`/repo/${repo.owner.login}/${repo.name}`}
      className="group flex flex-col rounded-xl border border-neutral-800 bg-neutral-950 px-4 py-2 transition-all duration-200 hover:border-amber-600/60 hover:bg-neutral-900"
    >
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          {/* <FolderGit2 className="h-6 w-6 text-amber-500" /> */}

          <div>
            <h2 className="text-lg font-semibold text-white group-hover:text-amber-500 transition-colors">
              {repo.name}
            </h2>

            <p className="mt-3 text-sm text-neutral-400">
              {repo.description}
            </p>
          </div>
        </div>

        <span className="flex items-center gap-1 rounded-full border border-neutral-700 px-2 py-1 text-xs text-neutral-300">
          {repo.private ? (
            <>
              <Lock size={12} />
              Private
            </>
          ) : (
            <>
              <Globe size={12} />
              Public
            </>
          )}
        </span>
      </div>

      <div className="mt-auto pt-4 flex flex-wrap items-center gap-5 text-sm text-neutral-400 ">
        {repo.language && (
          <span>{repo.language}</span>
        )}

        <span className="flex items-center gap-1">
          <Star size={15} />
          {repo.stargazers_count}
        </span>

        <span className="flex items-center gap-1">
          <GitFork size={15} />
          {repo.forks_count}
        </span>

        <span className="ml-auto text-xs text-neutral-500">
          Updated {formatDistanceToNow(new Date(repo.updated_at), {
                addSuffix: true,
            })}
        </span>
      </div>
    </Link>
  );
}