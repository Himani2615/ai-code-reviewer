import React from "react";


export default function Home() {
  return(
      <div className="flex flex-col items-center min-h-screen justify-center">
        <h1 className="text-5xl font-bold tracking-tight">AI Code Reviewer</h1>
        <button type="button" className="border border-white px-5 py-2 text-2xl mt-20 cursor-pointer rounded bg-amber-800 hover:bg-amber-700 transition-colors duration-200">
          Get Started
        </button>
        <p className="mt-4 max-w-xl text-center text-lg text-gray-400">
          Get instant AI-powered feedback on your code, detect bugs,
          and improve code quality.
        </p>
      </div>
  )
}
