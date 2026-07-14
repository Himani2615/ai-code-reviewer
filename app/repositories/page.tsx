import { getRepositories } from "@/lib/github";
import RepositoryList from "@/components/RepositoryList";

export default async function Dashboard() {
  const repos = await getRepositories();

  return (
    <div className="min-h-screen bg-black px-8 py-10 text-white ">
      <div className="mx-auto max-w-7xl flex flex-col items-center justify-center">
        <h1 className="mb-8 text-4xl font-bold">
          Your Repositories
        </h1>

        <RepositoryList repositories={repos} />
      </div>
    </div>
  );
}