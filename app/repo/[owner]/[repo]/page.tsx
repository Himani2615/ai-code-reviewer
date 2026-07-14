import { getRepositoryContents } from "@/lib/github";
import FileExplorer from "@/components/FileExplorer";

export default async function RepositoryPage({ params}: {params: Promise<{ owner: string; repo: string }>}) {

  const { owner, repo } = await params;

  const contents = await getRepositoryContents(owner, repo);

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <h1 className="mb-8 text-center text-3xl font-bold">
        {repo}
      </h1>

      <FileExplorer
        owner={owner}
        repo={repo}
        initialContents={contents}
      />
    </div>
  );
}