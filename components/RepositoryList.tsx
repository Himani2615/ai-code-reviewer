"use client";

import { useMemo, useState } from "react";
import SearchBar from "./SearchBar";
import RepositoryCard from "./RepositoryCard";
import { GitHubRepository } from "@/types/github";

export default function RepositoryList({repositories,}: {repositories: GitHubRepository[];}) {

  const [query, setQuery] = useState("");

  const filteredRepositories = useMemo(() => {
    return repositories.filter((repo) =>
      repo.name.toLowerCase().includes(query.toLowerCase())
    );
  }, [repositories, query]);

  return (
    <>
      <SearchBar value={query} onChange={setQuery} />

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {filteredRepositories.map((repo) => (
          <RepositoryCard key={repo.id} repo={repo} />
        ))}
      </div>
    </>
  );
}