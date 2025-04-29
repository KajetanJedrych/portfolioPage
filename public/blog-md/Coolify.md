As a not-so-wealthy final-year student, I've always dreamed of building apps that people would actually want to use—maybe even earning a few bucks along the way to cover lunch. But every time I thought about getting started, I hit the same wall: deployment costs and complexity.

On one side, there are premium platforms that do everything for you—hosting, analytics, continuous deployment from GitHub, monitoring, the works—but they come bundled with a monthly subscription that can easily hit $20–30, or much more if you're not careful. On the other end of the spectrum, you have completely DIY solutions—self-hosted servers at home or ultra-cheap VPS setups, where you manage everything manually: ports, SSL, Docker, CI/CD, firewalls. That's a time and energy sink I couldn't afford.

## The Problem with "Free" Cloud Hosting

Initially, I went with Vercel for my personal website and this blog. They offer a generous free tier for low-traffic sites, and I don't exactly expect a flood of readers for my scattered developer musings 😅. The developer experience is top-notch—deploying from GitHub takes seconds.

But then I stumbled across a series of YouTube videos with alarming titles like "Vercel Charged Me Thousands of Dollars." That freaked me out. Turns out, if you accidentally misconfigure something, or your app goes viral for a day (or worse, gets abused), usage-based billing kicks in hard. As a beginner web developer, I know I'm bound to leave backdoors open that could be exploited, possibly leading to unexpected traffic surges and surprise charges.

So I had to cross Vercel off the list for anything beyond toy projects.

## Discovering Coolify: The Self-Hosted Vercel Alternative

And then, I found the golden grail: Coolify.

Coolify is an open-source, self-hosted platform that feels a lot like Vercel or Netlify—but you run it yourself. It's built by a solo developer (massive respect!), and while it's completely free to use, you can support the project by donating.

Coolify handles:

- Continuous deployment from GitHub or GitLab
- Docker container orchestration
- Environment variable management
- Build and deploy pipelines for static sites, Node.js, Python, and more

The only thing it doesn't include is server infrastructure—which is a feature, not a bug.

## What You'll Need to Follow This Setup

If you're interested in recreating this setup, here's what you'll need:

- A VPS (I used Hetzner's CX11 plan, which costs €4.15/month ≈ $5)
- A domain name (optional, but nice to have)
- A GitHub account with your code repo
- Docker & Docker Compose (installed on the VPS)
- A basic understanding of SSH and Linux commands

## Step-by-Step: From Local Code to Live Site

### 1. Rent a VPS

I used Hetzner Cloud:

- Sign up at Hetzner
- Create a new project and spin up a server (Ubuntu 22.04 recommended)
- Choose the CX11 plan (1 vCPU, 2 GB RAM) – perfect for small apps
- Add your SSH key during setup or enable root login via password (then switch to key-based login later for security)

### 2. Install Docker and Docker Compose

SSH into your server and run:

```bash
sudo apt update
sudo apt install -y docker.io docker-compose
sudo systemctl enable docker
sudo usermod -aG docker $USER
```

Log out and back in to apply the user group change.

### 3. Deploy Coolify

Coolify provides a one-line install script:

```bash
curl -fsSL https://cdn.coollabs.io/coolify/install.sh | bash
```

This sets up Coolify with Docker and starts it at http://your-server-ip:3000.

💡 **Tip**: Use a reverse proxy (e.g., Traefik or Nginx) and Let's Encrypt for HTTPS. Coolify can auto-configure Traefik during setup.

### 4. Connect Your GitHub Repository

- Log into Coolify (default user: admin@coolify.io, password: coolify)
- Add your GitHub token (create one at github.com/settings/tokens with repo access)
- Add a new application, link your repo, and define the build steps
  - For a static site: Coolify auto-detects npm run build and dist folder
  - For Node.js or full-stack apps: it uses Dockerfile if present

### 5. Configure a Domain (Optional but Recommended)

If you have a domain:

- Point your A record to the VPS IP
- In Coolify, add the domain under your app's settings
- Coolify + Traefik will automatically fetch an SSL cert

## Real Example: kalkulatory.org

To test my setup, I built a simple app—a collection of calculators. Yes, the internet is full of them, but these are _my_ calculators 😄.

I deployed it through Coolify with GitHub integration, and everything just worked. You can check it out at https://kalkulatory.org/.

## Lessons Learned (and Why This Is Worth It)

Out of necessity (read: my frugality), I ended up learning how to self-host a production-grade deployment pipeline. I now have:

✅ A GitHub-based CI/CD setup  
✅ A containerized app running on a secure VPS  
✅ HTTPS, automatic builds, and live deployments  
✅ Scalable infrastructure I control

And best of all? It costs me under $6/month, and I sleep well at night knowing I won't be hit with unexpected charges.

## Final Thoughts (and a Nudge to Try It Yourself)

If you're just getting started, this setup might sound intimidating. But here's the thing: you'll learn a ton, and once you've done it once, it becomes second nature.

You can start by trying:

- A static portfolio site
- A personal blog built with Astro, Hugo, or Next.js
- A basic Express or Flask app

And Coolify really does handle the hard parts for you. You still get that "magic deployment" feeling like Vercel, but with full control and no billing anxiety.

If you're building your own tools, ideas, or side projects—don't wait until you can afford fancy cloud infrastructure. Get it online. Learn by doing. And keep it cheap.
