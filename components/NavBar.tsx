"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { signIn, signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import { Code2, UserCircle2, LogOut, LogIn} from "lucide-react";
import { SiGithub } from "@icons-pack/react-simple-icons";


export default function NavBar() {
  const { data: session } = useSession();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-900 bg-black/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-8">

        <Link
          href="/"
          className="flex items-center gap-3 transition-opacity hover:opacity-90"
        >
          <Code2 className="h-7 w-7 text-amber-600" />
          <span className="text-xl font-semibold tracking-tight">
            AI Code Reviewer
          </span>
        </Link>

        <div className="relative">
          <button
            onClick={() => setOpen(!open)}
            className="overflow-hidden rounded-full border border-neutral-700 transition hover:border-neutral-500"
          >
            {session?.user?.image ? (
              <Image
                src={session.user.image}
                alt="Profile"
                width={40}
                height={40}
                className="rounded-full"
              />
            ) : (
              <UserCircle2 className="h-10 w-10 p-1 text-neutral-300" />
            )}
          </button>

          {open && (
            <div className="absolute right-0 mt-3 w-60 rounded-xl border border-neutral-800 bg-neutral-950 shadow-2xl">

              {session ? (
                <>
                  <div className="border-b border-neutral-800 px-4 py-3">
                    <p className="font-medium">
                      {session.user?.name}
                    </p>
                    <p className="text-sm text-neutral-400">
                      Logged in with GitHub
                    </p>
                  </div>

                  <a
                    href="https://github.com"
                    target="_blank"
                    className="flex items-center gap-3 px-4 py-3 text-sm transition hover:bg-neutral-900"
                  >
                    <SiGithub size={18} />
                    GitHub Profile
                  </a>

                  <button
                    onClick={() => signOut({callbackUrl: "/"})}
                    className="flex w-full items-center gap-3 px-4 py-3 text-left text-sm transition hover:bg-neutral-900"
                  >
                    <LogOut size={18} />
                    Sign Out
                  </button>
                </>
              ) : (
                <button
                  onClick={() => signIn("github")}
                  className="flex w-full items-center gap-3 px-4 py-3 text-left text-sm transition hover:bg-neutral-900"
                >
                  <LogIn size={18} />
                  Login with GitHub
                </button>
              )}
            </div>
          )}
        </div>

      </div>
    </header>
  );
}