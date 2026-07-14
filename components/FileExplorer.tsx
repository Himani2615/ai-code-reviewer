"use client";

import FileNode from "./FileNode";
import { GitHubRepositoryContent } from "@/types/github";

type Props = {
  owner: string;
  repo: string;
  initialContents: GitHubRepositoryContent[];
};

export default function FileExplorer({owner,repo,initialContents,}: Props) {
    
  const sortedContents = [...initialContents].sort((a, b) => {
    if (a.type !== b.type) {
      return a.type === "dir" ? -1 : 1;
    }

    return a.name.localeCompare(b.name);
  });

  return (
    <div className="rounded-2xl border border-neutral-800 bg-neutral-950 p-4">
      {sortedContents.map((item) => (
        <FileNode
          key={item.path}
          item={item}
          owner={owner}
          repo={repo}
        />
      ))}
    </div>
  );
}