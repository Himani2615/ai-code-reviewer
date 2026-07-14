"use client";

import { useState } from "react";
import {
  Folder,
  FolderOpen,
  FileCode,
  ChevronRight,
  ChevronDown,
} from "lucide-react";
import { GitHubRepositoryContent } from "@/types/github";

type Props = {
  item: GitHubRepositoryContent;
  owner: string;
  repo: string;
  depth?: number;
    onFileOpen: (path: string) => void;
};

export default function FileNode(props: Props) {
  const { item, owner, repo, depth = 0,onFileOpen } = props;

  const [expanded, setExpanded] = useState(false);
  const [children, setChildren] = useState<GitHubRepositoryContent[]>([]);
  const [loaded, setLoaded] = useState(false);

  const handleClick = async () => {

    if (item.type === "file") {
    onFileOpen(item.path);
    return;
  }

    if (expanded) {
      setExpanded(false);
      return;
    }

    if (!loaded) {
      const response = await fetch( `/api/repository/contents?owner=${owner}&repo=${repo}&path=${item.path}`);

      const data: GitHubRepositoryContent[] = await response.json();

      data.sort((a, b) => {
        if (a.type !== b.type) {
          return a.type === "dir" ? -1 : 1;
        }

        return a.name.localeCompare(b.name);
      });

      setChildren(data);
      setLoaded(true);
    }

    setExpanded(true);
  };

  return (
    <>
      <div
        onClick={handleClick}
        style={{ paddingLeft: depth * 18 }}
        className="flex cursor-pointer items-center gap-2 rounded-md p-2 hover:bg-neutral-800"
      >
        {item.type === "dir" ? (
          <>
            {expanded ? (
              <ChevronDown size={16} />
            ) : (
              <ChevronRight size={16} />
            )}

            {expanded ? (
              <FolderOpen size={18} className="text-amber-500" />
            ) : (
              <Folder size={18} className="text-amber-500" />
            )}
          </>
        ) : (
          <>
            <span className="w-4" />
            <FileCode size={18} className="text-neutral-500" />
          </>
        )}

        <span>{item.name}</span>
      </div>

      {expanded &&
        children.map((child) => (
          <FileNode
            key={child.path}
            item={child}
            owner={owner}
            repo={repo}
            depth={depth + 1}
            onFileOpen={onFileOpen}
          />
        ))}
    </>
  );
}