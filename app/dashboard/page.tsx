import {auth} from "@/auth";
import { redirect } from "next/navigation";

export default async function Dashboard(){
    const session=await auth();

    if(!session) redirect("/");

    return(
        <div>
            <h1> Dashboard</h1>

            <pre> 
                {JSON.stringify(session,null,2)}
            </pre>
        </div>
    );
}