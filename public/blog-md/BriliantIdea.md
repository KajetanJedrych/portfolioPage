After completing my "training mission" by building a simple calculator site, I felt ready for a real project — something that could actually make money.

I went back to my list of ideas and found it: an app that pulls comments from social media and uses AI to extract the key insights, so you don’t have to read them all manually.

At first, I thought this was genius. It had “AI” in the name — and everything with AI these days seems to sell ten times better. I could already imagine YouTubers with tens of thousands of comments fighting over access to this magical comment analyzer.

---

## The Stack: What I Used and Why

This time, I built the app using Next.js (with the App Router) and React as the foundation. I love how Next.js handles both server-side rendering and API routes in the same codebase — it’s perfect for early-stage projects where you don’t want to spin up a separate backend.

For styling, I used **Tailwind CSS**, which has become my go-to. It lets me iterate on UI really fast without context-switching between HTML and CSS files.

Since this was a solo side project, I kept my dev workflow lean and simple:

- **pnpm** for faster package management  
- **TypeScript** (of course) for better DX  
- **Prettier + ESLint** to keep my code clean without thinking about formatting

---

## Working Around a 9-to-5 Schedule

I work full-time as a QA developer, so time was tight. I dedicated 1–2 hours each morning before work to the project. Evenings were off-limits — gym, dinner, time with my girlfriend. Life balance matters. So I turned myself into a morning person, just to make sure I could keep momentum.

---

## First Milestone: The Landing Page

After a few focused sessions, I had a basic landing page — built with Next.js pages and Tailwind. Nothing fancy, just enough to test the concept.

But I didn’t show it to anyone yet. I figured: I’ll wait until I’ve got a working prototype before getting feedback.

---

## Hooking into AI: Using Gemini API

The core feature — summarizing comments — relied on **Gemini AI’s API**. I expected this to be painful, but surprisingly, it just… worked.

The hardest part was formatting the prompt so it gave good results. I went through a few iterations of the prompt until I got concise and useful summaries.

---

## PDFs from Google APIs — The Unexpected Rabbit Hole

One of the challenges was generating PDFs from the text. I wanted users to export AI summaries, and I assumed this would be easy.

**Spoiler: it wasn’t.**

There are dozens of libraries (like pdf-lib, html2pdf, puppeteer) and methods. I tried multiple approaches:
 
- **html2pdf.js** → formatting was broken  
- **pdf-lib** → finally got it working after trial and error

Eventually, I settled on **pdf-lib** and generated the PDF manually, adding text line by line. It wasn’t perfect, but it got the job done.

---

## Adding Authentication: Auth.js (aka NextAuth)

Next, I added login and registration using **Auth.js**. I went with GitHub and Google as providers. This part did take longer than expected.

Some pain points:

- Redirect loops when not configuring callbacks correctly  
- Protecting API routes with session checks  
- Handling JWTs securely

But once it was set up, it was solid.

---

## The Reality Check

With the prototype live, I figured it was time to validate the idea.

So I reached out to some creator communities, posted in Reddit threads.

The response? **Crickets.**

Turns out, most creators already skim the top comments, which usually reflect the general sentiment. They don’t need AI to tell them “people liked the video.”

So yeah, the project didn’t take off. But I’m not mad about it.

---

## Lessons Learned

I learned so much:

- How to structure a full-stack Next.js project  
- How to integrate an external AI API  
- How to manage authentication and protected routes  
- How to (painfully) generate PDFs

And now I have a solid boilerplate I can reuse for future projects — complete with routing, Tailwind, auth, and an AI integration.

---

## What’s Next?

For my next project, I’m taking a different approach. This time I’m building something I personally use — and want to improve.
