"use client";

import { useState } from "react";
import FileExplorer from "./FileExplorer";
import { GitHubRepositoryContent } from "@/types/github";
import CodeEditor from "@/components/CodeEditor";
import Button from "./Button";
import { NextResponse } from "next/dist/server/web/spec-extension/response";

export interface OpenedFile {
  name: string;
  path: string;
  content: string;
}

type Props = {
  owner: string;
  repo: string;
  repositoryId: number;
  initialContents: GitHubRepositoryContent[];
};

export default function RepositoryWorkspace({owner,repo,repositoryId,initialContents,}: Props) {

  const [reviewCount,setReviewCount]= useState(0);
  const [review,setReview] = useState("");
const [loading,setLoading] = useState(false);
const [saving,setSaving] = useState(false);
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

    setReview("");
    setReviewCount(0);
    setLoading(false);
    setSaving(false);
  };

  const handleSavedReviews = () => {
    console.log("Coming tomorrow :)");
};

const handleReview = async () => {
    if (!openedFile) return;
    setLoading(true);

    try {
    const response = await fetch("/api/review", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fileName: openedFile.name,
        filePath: openedFile.path,
        code: openedFile.content,
      }),
    });

    if(!response.ok){
        console.log("Failed to fetch review");
        return;
    }

    const data=await response.json();
    setReview(data.review);

  } catch (error) {
    console.error(error);
  } finally {
    setLoading(false);
  }

};

const handleSaveReview = async () => {
  if (!openedFile || !review) return;

  setSaving(true);

  try {
    const response = await fetch("/api/review/save", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        repositoryId,
        repositoryName: repo,
        filePath: openedFile.path,
        fileName: openedFile.name,
        review,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("SAVE API ERROR:", data);
      return;
    }

    console.log("Review saved!", data);

    setReviewCount((prev) => prev + 1);

  } catch (error) {
    console.error("SAVE REVIEW ERROR:", error);
  } finally {
    setSaving(false);
  }
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
            
            <div className="mb-4 flex items-center justify-between border-b border-neutral-800 pb-2">

    <div>
        <h2 className="font-semibold">
            {openedFile.name}
        </h2>

        <p className="text-sm text-neutral-500">
            {openedFile.path}
        </p>
    </div>

    <div className="flex gap-3">

        {(reviewCount>0 &&
           <Button onClick={handleSavedReviews}>
                Reviews ({reviewCount})
            </Button>
        )}

        <Button loading={loading} onClick={handleReview}>
            Review Code
        </Button>

    </div>

</div>

            {/* <pre className="whitespace-pre-wrap break-words text-sm">
              {openedFile.content}
            </pre> */}

            <div className={"h-full "} >
           {openedFile && ( <CodeEditor code={openedFile.content} language={getLanguage(openedFile.name.split(".").pop() ?? "")} />)}
           </div> 
          </div>
        ) : (
          <div className="flex h-full items-center justify-center text-neutral-500 w-full">
            Select a file to view its contents.
          </div>
        )}
    

{loading && (
    <p className="mt-6">
        Generating AI review....
    </p>
)}


{review && (

    <div className="mt-6 rounded-2xl border border-neutral-800 p-5 ">

        <h2 className="mb-4 text-xl font-semibold">
            AI Review
        </h2>

        <pre className="whitespace-pre-wrap text-sm">
            {review}
        </pre>

        <div className="mt-5">
            <Button loading={saving} onClick={handleSaveReview}>
                Save Review
            </Button>
        </div>

    </div>
)}
</div>
    </div>
  );
}