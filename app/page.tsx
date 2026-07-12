import LoginButton from "@/components/LoginButton";

export default function Home() {
  return(
      <div className="flex flex-col items-center min-h-screen justify-center">
        <h1 className="text-5xl font-bold tracking-tight">AI Code Reviewer</h1>
        <LoginButton/>
        <p className="mt-4 max-w-xl text-center text-lg text-gray-400">
          Get instant AI-powered feedback on your code, detect bugs,
          and improve code quality.
        </p>

      </div>
  )
}
