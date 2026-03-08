---
title: "The Architecture of Slow"
description: "What endurance sport taught me about sustainable system design — and why the most durable platforms share a trait with ultramarathon runners."
pubDate: 2024-11-15
tags: ["Architecture", "Systems Thinking", "Endurance"]
readingTime: "8 min read"
---

There's a concept in ultramarathon running called "banking time." The idea is that if you run the early miles of a long race faster than your target pace, you're accumulating a time surplus that you can draw on when things get hard later. It sounds logical. It rarely works.

What actually happens is that you exhaust your glycogen stores in the first half, your muscles accumulate lactic acid faster than they can clear it, and by mile 50 of a 100-mile race, you're not drawing on a surplus — you're paying an interest-compounding debt. The runners who finish in the best shape are the ones who ran the early miles conservatively, almost frustratingly slow, and then had something left when the race actually started to matter.

I think about this constantly when I look at platform architectures.

---

## The Temptation of Early Optimism

In the early stages of building a platform, there's an enormous pressure to be fast. Customers are waiting. Competitors are shipping. The team is energised, and the architecture looks clean because nothing has touched it yet. This is the moment when the most consequential decisions get made — and the moment when they're most likely to be made poorly.

The temptation is to bank time. Build it fast. We'll refactor later. We'll add proper abstractions when we understand the domain better. We'll introduce proper observability once we have paying customers.

These are not irrational decisions, taken one at a time. But taken together, over months, they produce systems that resist change — systems where adding a new payment method requires touching eight services, where every deployment carries invisible risk, where the people who understand the system have left.

The slow runner who finishes strong. The fast starter who DNFs at mile 60. The pattern holds.

---

## What Durable Looks Like

I've had the opportunity to work on systems at different stages of their lifecycle — from greenfield builds with a small team to multi-year platforms with decades of accumulated decisions. The pattern I've noticed in the ones that last is not that they were built faster or slower, but that they were built with a clear sense of what would change and what wouldn't.

The things that won't change: the domain boundaries. The things that will change: everything else.

In domain-driven design, this is the concept of a bounded context — the explicit acknowledgment that different parts of your system have different languages, different rules, and different rates of change. A payment is not an account is not an order, even if they're all conceptually related to a transaction. Treating them as the same entity, early on, is the architectural equivalent of banking time. It feels efficient. It costs you later.

The durable platforms I've worked with share a few traits:

**They have explicit seams.** There are clear boundaries between domains, enforced by contracts (usually APIs), not by convention or team discipline. Convention decays. Contracts are harder to violate accidentally.

**They're boring by design.** The core transaction path — the thing that has to work at 3am when the on-call engineer is half-asleep — uses the most understood, battle-tested technology available. The experimental stuff happens at the edges, where failure is recoverable.

**They're designed to be replaced.** This sounds paradoxical. But the teams that built the best systems I've worked with always asked: "How would we migrate away from this if we needed to?" The question itself shapes better decisions. It forces explicit interfaces. It discourages hidden dependencies.

---

## The Cost of the Easy Decision

There's a version of technical debt that's obvious — the commented-out code, the function called `fix_this_later`, the service that no one wants to deploy because something always breaks. That debt is at least visible. You know it exists.

The harder kind of debt is architectural. It lives in the decisions about what owns what, which team is responsible for which boundary, what the contract between services actually means. This debt is invisible until you try to change something — and then it reveals itself as friction.

I've watched teams spend six months "rewriting" a service only to discover, three months in, that the new service has the same fundamental problem as the old one, because the problem was never in the service — it was in the model underneath it.

The training equivalent: you can't run your way out of a bad base. If you've spent months running too fast, doing the wrong kind of work, skipping the slow aerobic miles that build the foundation — you can't compensate in the final weeks before a race. You just arrive at the start line with a deficit you can't see yet.

---

## Running Slow is a Skill

The hardest thing I've had to learn in both endurance sport and platform design is that running slow is a skill. It's not the absence of speed. It's the deliberate choice to stay in a zone that feels insufficient, even when your training partners are running faster, even when the business is asking for more features, even when your instincts say you should be moving faster.

The physiological reason that slow running works: it trains your aerobic system — the engine that operates without oxygen debt, the one that can run for hours without degrading. Speed training stresses the system. Slow running builds the base that makes the speed sustainable.

The architectural reason that "slow" design works: it forces you to understand the domain before you encode it. It gives you time to discover the seams naturally, through use, rather than imposing them prematurely through assumption. It produces systems where the boring parts are genuinely boring — stable, predictable, recoverable — because that boring stability was chosen, not inherited.

---

## What This Looks Like in Practice

This isn't an argument for slow shipping. It's an argument for understanding what "fast" actually means over a longer horizon.

A team that ships rapidly but accumulates structural debt is fast for six months. After that, every new feature is slower than the last. The team spends more time managing the consequences of past decisions than building new things. The architecture becomes a constraint rather than an enabler.

A team that ships thoughtfully — that resists the urge to take the easy shortcut, that treats the first version as a discovery exercise rather than a final answer — is slower in month three. By month twelve, it's faster. By year two, it's dramatically faster, because the system bends toward the business rather than fighting it.

The ultramarathon runner who finishes in the top ten of their age category isn't the one who ran the first 40 miles fastest. It's the one who ran them at the right pace — and had something left when the race got hard.

Build for mile 60, not mile 20.
