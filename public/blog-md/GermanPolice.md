# When You're Building Innocent Side Projects… and the German Police Email You

One ordinary day, while I was peacefully minding my own business and working on my usual things, I received an email from my VPS provider.

It started like this:

*"We have received a notification from the German Federal Office for Information Security (BSI) for (the IP address of) a server you have with us."*

I don't know about you, but the moment I read German Federal Office and my server in the same sentence, everything else immediately stopped. Coffee forgotten. Slack ignored. Full focus mode activated.

According to the email, there was suspicious activity detected on my server — things happening that I was completely unaware of. The server had most likely been compromised and was being used for cryptocurrency mining… or potentially something much worse.

At that exact moment, everything clicked.

In a split second, I knew what I had done wrong. I knew where the mistake was. Unfortunately, fixing it wouldn't be as quick as realizing it.

## The Vulnerability I Thought Was "Not My Problem"

For a while, news about a serious security vulnerability in one of the popular React-related packages had been floating around the internet. It popped up on Twitter, Reddit, blog posts — even memes. I laughed at a few of them.

At work, we even received a serious internal message telling us to audit our applications and double-check that we weren't using this package anywhere.

And yet, it never crossed my mind that my private side projects could be affected.

You can probably guess how this story ends.

Of course they were using it.

It was basically like leaving the front door wide open, putting up a sign that said "Please help yourself, I'm out", and then being surprised that someone actually walked in.

## Damage Control (and a Slightly Higher VPS Bill)

Thankfully, the consequences weren't catastrophic.

So far, it amounted to:

- A noticeably higher VPS bill
- Several hours spent updating all dependencies to their latest secure versions

Not terrible — but still annoying.

Since I didn't feel like playing cybersecurity expert at 2 a.m., I made a drastic but effective decision:
I wiped the entire server without making a backup and rebuilt everything from scratch.

That part hurt.

Migrating user data from multiple applications, reconfiguring environments, redeploying services — it was slow, tedious, and mentally exhausting. Especially when I realized how many things I had set up once, months ago, and then completely forgotten about.

## Lessons I'll Carry for Life

This experience taught me lessons that will stay with me forever.

***Outdated packages are not harmless****
If I see a warning about outdated dependencies or vulnerabilities — even medium severity — I update them. Immediately. And I check regularly.

**Observability is not optional**
I now have proper alerts and monitoring for my VPS. CPU spikes, strange traffic, unusual resource usage — I want to know before a government agency does.

**Backups. Always.**
No explanation needed.

**Document everything**
I wrote down, step by step, how to rebuild every application from scratch.
Some apps only require a simple deploy. Others involve databases (Prisma), webhooks, secrets, and configuration that I had set up once and never touched again.

When things broke, I had to relearn everything under pressure. Now I have proper documentation and can recover quickly if something goes wrong.

## The Most Surprising Part

Apart from the stress and the lost dozen-or-so hours, nothing truly bad happened.

But what still amazes me is how strong denial can be.

I read countless warnings about a major vulnerability in React components. I saw memes. I saw official company messages. And still, my brain somehow decided:

"This doesn't apply to me."

It did.

And now, my side projects — and my servers — are a lot safer because of it.

Sometimes the best lessons come with a slightly higher VPS invoice… and an email from the German Federal Office for Information Security. 😅
