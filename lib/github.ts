import {auth} from "@/auth";
import { GitHubRepository } from "@/types/github";

export async function getRepositories() : Promise<GitHubRepository[]>{
    const session=await auth();

    if(!session?.accessToken) throw new Error("Not authenticated");

    const response= await fetch("https://api.github.com/user/repos",{
        headers:{
            Authorization: `Bearer ${session.accessToken}`,
            Accept:"application/vnd.github+json",
        },
        cache:"no-store",
    });

    if(!response.ok) throw new Error("Failed to fetch repositories");

    return response.json();
}