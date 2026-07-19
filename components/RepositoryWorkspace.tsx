"use client";

import { useState } from "react";
import FileExplorer from "./FileExplorer";
import { GitHubRepositoryContent } from "@/types/github";
import CodeEditor from "@/components/CodeEditor"

export interface OpenedFile {
  name: string;
  path: string;
  content: string;
}

type Props = {
  owner: string;
  repo: string;
  initialContents: GitHubRepositoryContent[];
};

export default function RepositoryWorkspace({owner,repo,initialContents,}: Props) {

  const [openedFile, setOpenedFile] = useState<OpenedFile | null>(null);

  const onFileOpen = async (path: string) => {
    const response = await fetch(
      `/api/repository/file?owner=${owner}&repo=${repo}&path=${path}`
    );

    if (!response.ok) {
      console.error("Failed to fetch file");
      return;
    }

    const file: OpenedFile = await response.json();
    setOpenedFile(file);
  };

  function getLanguage(extension:string):string{
    switch(extension){
        case "js":
            return "javascript";

        case "ts":
            return "typescript";

        case "tsx":
            return "typescript";

        case "py":
            return "python";

        case "java":
            return "java";

        case "cpp":
            return "cpp";

        case "css":
            return "css";

        case "html":
            return "html";

        case "jsx":
    return "javascript";

case "json":
    return "json";

case "md":
    return "markdown";

case "yml":
case "yaml":
    return "yaml";

case "c":
    return "c";

case "go":
    return "go";

case "sql":
    return "sql";

        default:
            return "plaintext";
    }
}

  return (
    <div className="grid h-[calc(100vh-120px)] md:grid-cols-[320px_1fr] gap-4">
      <div className="overflow-y-auto">
      <FileExplorer
        owner={owner}
        repo={repo}
        initialContents={initialContents}
        onFileOpen={onFileOpen}
      />
      </div>

      <div className="rounded-2xl border border-neutral-800 bg-neutral-950 p-4 overflow-auto w-full min-w-0">
        {openedFile ? (
          <div className="w-full">
            <div className="mb-4 border-b border-neutral-800 pb-2">
              <h2 className="font-semibold">{openedFile.name}</h2>
              <p className="text-sm text-neutral-500">
                {openedFile.path}
              </p>
            </div>

            {/* <pre className="whitespace-pre-wrap break-words text-sm">
              {openedFile.content}
            </pre> */}

            <div className="h-full>">
           {openedFile && ( <CodeEditor code={openedFile.content} language={getLanguage(openedFile.name.split(".").pop() ?? "")} />)}
           </div> 
          </div>
        ) : (
          <div className="flex h-full items-center justify-center text-neutral-500 w-full">
            Select a file to view its contents.
          </div>
        )}
      </div>
    </div>
  );
}