import { getRepositories } from "@/lib/github"; 

export default async function Dashboard(){
    const repos=await getRepositories();

    return(
        <div>
            <h1>Your Repositories</h1>

            <ul>
                {repos.map((repo: {id:number;name:string}) =>(
                    <li key={repo.id}>{repo.name}</li>
                ))}
            </ul>
        </div>
    )
}