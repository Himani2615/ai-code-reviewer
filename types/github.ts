export interface GitHubRepository {
  id: number;
  name: string;
  description: string | null;
  private: boolean;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  updated_at: string;
  owner: {
    login: string;
  };
};

export interface GitHubRepositoryContent{
  name:string;
  path:string;
  type: "file" | "dir";
  size:number;
  sha:string;
}
