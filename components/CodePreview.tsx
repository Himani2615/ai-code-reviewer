export default function CodePreview() {
  return (
    <div
      className="
     translate-x-10
        rotate-[-8deg]
        opacity-75
        transition-all
        duration-500
        hover:opacity-90"
    >
      <div className="flex border-b border-neutral-800/50 py-3 px-5">
        <div className="flex gap-2">
          <div className="h-3 w-3 rounded-full bg-red-500/70" />
          <div className="h-3 w-3 rounded-full bg-yellow-500/70" />
          <div className="h-3 w-3 rounded-full bg-green-500/70" />
        </div>

        <span className="text-sm text-neutral-500">
          review.ts
        </span>

        <div className="w-12" />
      </div>

      <div className="font-mono text-[15px] leading-8 px-5 py-8 text-neutral-400">

        <p>
          <span className="text-purple-300">export async function</span>{" "}
          <span className="text-sky-300">reviewFile</span>() {"{"}
        </p>

        <p className="ml-8">
          <span className="text-purple-300">const</span> repository =
          <span className="text-amber-400"> await</span>{" "}
          github.getRepository();
        </p>

        <p className="ml-8">
          <span className="text-purple-300">const</span> context =
          <span className="text-amber-400"> await</span>{" "}
          retrieveRelevantFiles(repository);
        </p>

        <p className="ml-8">
          <span className="text-purple-300">const</span> review =
          <span className="text-amber-400"> await</span>{" "}
          ai.review({"{"}
        </p>

        <p className="ml-16">repository,</p>
        <p className="ml-16">context,</p>
        <p className="ml-16">adaptive: true,</p>

        <p className="ml-8">{"});"}</p>

        <p className="ml-8">
          <span className="text-purple-300">return</span> review;
        </p>

        <p>{"}"}</p>

        <div className="my-8 border-t border-neutral-800/50" />

        <div className="space-y-4">

          <div className="flex items-start gap-3">
            <span className="text-amber-500">💡</span>
            <span className="text-neutral-400">
              Prefer <span className="text-white">const</span> instead of{" "}
              <span className="text-white">let</span>.
            </span>
          </div>

          <div className="flex items-start gap-3">
            <span className="text-red-400">⚠</span>
            <span className="text-neutral-400">
              Possible null reference detected.
            </span>
          </div>

          <div className="flex items-start gap-3">
            <span className="text-green-400">✓</span>
            <span className="text-neutral-400">
              Function complexity is within recommended limits.
            </span>
          </div>

          <div className="flex items-start gap-3">
            <span className="text-amber-500">💡</span>
            <span className="text-neutral-400">
              Extract repeated logic into a helper function.
            </span>
          </div>

        </div>

        <div className="mt-8 border-t border-neutral-800/50 pt-6 text-neutral-500">
          Review completed • 4 Suggestions • Score: <span className="text-green-400">92/100</span>
        </div>

      </div>
    </div>
  );
}