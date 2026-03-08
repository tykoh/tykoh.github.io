---
title: "What Platforms Actually Are"
description: "The word gets used to mean everything from an API to a company strategy. Here's the definition that's actually useful when you're trying to build one."
pubDate: 2024-09-08
tags: ["Platform Engineering", "Architecture", "Leadership"]
readingTime: "6 min read"
---

In five years of working on what various organisations called "platform initiatives," I've heard the word used to mean: an API gateway, a set of shared Kubernetes clusters, a product with a developer portal, a business model, a strategic moat, and once — memorably — a PowerPoint deck that described the intention to eventually build something.

The ambiguity is not just semantic. It causes real problems. Teams get funded to build "a platform" without shared understanding of what they're building. Leadership asks for platform metrics without clarity on what the platform is doing for whom. Engineers build excellent technical infrastructure that no one uses, because it was designed as infrastructure rather than as something that solves a real problem for a real team.

I've found one definition useful enough to return to repeatedly, taken from Evan Bottcher and others who have thought carefully about this: **a platform is a self-service layer that allows teams to build and run their product capabilities without requiring specialist knowledge of the underlying infrastructure or dependencies.**

That definition contains several things worth unpacking.

---

## Self-service is the product

The most important word in the definition is "self-service." A platform that requires a ticket to provision a database is not a platform — it's a managed service with a queue. A platform that requires an onboarding meeting to understand is not a platform — it's documentation that happens to be interactive.

Self-service changes the economics. When a team can provision, deploy, monitor, and operate their service without involving the platform team, the platform team can focus on making the platform better rather than supporting current users. The leverage is real: one platform engineer's work benefits dozens of product engineers simultaneously.

But self-service is hard to design. It requires understanding not just what the platform does, but what the product teams actually need to do — and finding the abstraction layer that makes the underlying complexity disappear without removing the control that matters.

Getting this wrong in one direction produces a platform that's too abstract: it hides so much that product teams can't do what they need to do, and every unusual requirement becomes a support ticket. Getting it wrong in the other direction produces a platform that's too raw: product teams have full control but no reduction in cognitive load, and you've just renamed your infrastructure team.

---

## The cognitive load contract

A platform's core promise is a reduction in cognitive load. A product team using your platform should need to know less about infrastructure, less about security, less about observability, less about deployment mechanics — and should spend that reclaimed attention on the problem their product is trying to solve.

This is a contract. If your platform claims to handle security but product teams still have to understand your security model in detail to use it correctly, you haven't kept the contract. If your platform claims to handle observability but teams still have to instrument their own traces and configure their own dashboards from scratch, you haven't kept the contract.

Keeping the contract requires ongoing work. The contract degrades as the underlying complexity grows. New services get added, new compliance requirements appear, new infrastructure patterns emerge. The platform team's job is to absorb that complexity so product teams don't have to.

---

## Platforms are not for the platform team

This sounds obvious when stated directly. It's violated constantly in practice.

Platform teams often build what they find interesting to build — which is usually the technically complex, architecturally clever thing. They optimise for their own understanding of the problem space, which is naturally more sophisticated than their users'. They measure their success by platform capabilities rather than by what product teams were able to accomplish because of the platform.

The most common failure mode I've seen: a platform team builds something technically excellent that no one uses. The observability platform with perfect data models and no useful dashboards. The deployment framework that can handle any scenario but requires two days of configuration for the common one. The service mesh with every feature enabled, creating latency that no one can explain.

The discipline that corrects this is treating internal teams as customers. Proper customers: with preferences, constraints, and the ability to route around your product if it's not good enough. If product teams are deploying directly to EC2 with bash scripts rather than using your Kubernetes abstraction, the question isn't "why aren't they adopting the platform" — it's "what does the platform not provide that would make it obviously better than their current approach?"

---

## The three questions

When I'm evaluating a platform — or deciding whether to build one — I use three questions:

**What does a team need to go from idea to production?** Map every step. Every decision, every tool, every piece of knowledge required. Then identify which of those steps are solved (made invisible) by the platform, and which still require the team to figure things out.

**What happens when something goes wrong at 2am?** The platform's quality shows up most clearly at the edges — when something fails unexpectedly, when someone needs to debug something they didn't build, when an engineer who's been on call for 8 hours needs to understand what's happening. Good platforms produce clear, actionable signals. Bad platforms produce confusion.

**Can a new team be productive in their first week?** This is the adoption test. If the answer is "they need help from the platform team," that's not necessarily failure — but it's debt. The platform team's job is to reduce the dependency over time, not to be a permanent prerequisite.

---

## What this means for building one

If you're building a platform, the most useful thing you can do before writing code is to spend a week with the teams you're building for. Shadow their deployments. Sit with them during incidents. Understand what they hate about their current setup, not what you think they should hate.

Then build the smallest thing that demonstrably reduces their friction. Measure the reduction. Expand from there.

Platforms grow through adoption, not through feature completion. A platform that three teams love and rely on is more valuable than a platform that ten teams could theoretically use but don't. Start with the believers. Make them dramatically more productive. Let the reputation spread.

That's the sustainable path. Everything else is infrastructure looking for a use case.
