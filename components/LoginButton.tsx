"use client";

import {signIn} from "next-auth/react";

export default function LoginButton(){
    return (
        <button 
            onClick={() => signIn("github", {callbackUrl: "/dashboard"})}
            className="border border-white px-5 py-2 text-2xl mt-20 cursor-pointer rounded bg-amber-800 hover:bg-amber-700 transition-colors duration-200"
            >
                Login with Github
        </button>
    );
}