import OpenAI from "openai";
import { NextResponse } from "next/server";


const client = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: process.env.OPENROUTER_API_KEY,
});


export async function POST(request: Request) {
  try {
    const { fileName, filePath, code } = await request.json();

    console.log("Sending request to OpenRouter...");

    const completion = await client.chat.completions.create({
      model: "cohere/north-mini-code:free",
      messages: [
        {
          role: "system",
          content: `
               You are a senior software engineer conducting a professional code review.

Analyze the provided source file carefully. Focus on real, actionable issues.
Do not invent problems. If something is correct, acknowledge it.

Write the review as a polished engineering report, not as a generic AI checklist.

Use this structure:

Overall Assessment -
Give a concise 2-3 sentence assessment of the code.
Include a simple risk level: Low, Medium, or High.

🔴 Issues -
Include only genuine bugs, correctness problems, security concerns,
or significant design problems.
For each issue:
- Give it a short descriptive title.
- Explain why it is a problem.
- Provide a concrete recommendation.
- Include a small code snippet only when it helps.

If there are no significant issues, say so.

🟡 Improvements -
Discuss maintainability, readability, architecture, and engineering practices
that could be improved but are not actual bugs.

⚡ Performance -
Mention only meaningful performance concerns.
If there are none, say "No significant performance concerns."

✅ What's Good -
Highlight the strongest parts of the implementation.

 💡 Recommended Next Steps -
Give 2-5 prioritized actions.

End with a one-line verdict such as:
"Verdict: Good foundation — minor improvements recommended."

Formatting rules:
- Use Markdown headings and bold text.
- Use bullet points sparingly.
- Do not number every sentence.
- Avoid repetitive explanations.
- Keep the review concise and professional.
- Do not criticize harmless formatting choices as bugs.
- Do not recommend unnecessary architectural changes for a small file.
- Do not suggest upgrading libraries unless there is a clear technical reason.
- Dont use hashes and stars in response, use emojis and bullet points instead
- Dont make headlines , return plain text , dont bold it

          `,
        },
        {
          role: "user",
          content: `
File Name: ${fileName}

File Path: ${filePath}

Code: ${code} `, },],
});

    return NextResponse.json({
      review: completion.choices[0].message.content,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        review: "Failed to generate review.",
      },
      { status: 500 }
    );
  }
}