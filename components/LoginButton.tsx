"use client";

import {signIn} from "next-auth/react";

export default function LoginButton(){
    return (
        <button 
            onClick={() => signIn("github", {callbackUrl: "/repositories"})}
            className="border border-white text-2xl mt-10 cursor-pointer rounded bg-amber-800 hover:bg-amber-900 transition-colors duration-200 px-8 py-3"
            >
                Get Started
        </button>
    );
}