---
title: "Building Once, Scaling Everywhere: A Practical View of Platformisation"
description: "Platformisation is often described as a strategy. In practice, it is a discipline of abstraction, reuse, and restraint — deciding what should become a shared capability, and what should remain local to the problem at hand."
pubDate: 2026-02-24
slug: building-once-scaling-everywhere
tags: ["Platform Engineering", "Architecture", "Org Design"]
readingTime: "12 min read"
draft: false
---

## Introduction

There is a gap between the promise of platformisation as it appears in strategy documents and the reality of it as experienced by engineering teams. Closing that gap requires something less glamorous than vision: it requires decisions about what to abstract, when to abstract it, who owns the resulting layer, and how to sustain it over time. This article is a reflection on those decisions — drawn from experiences building shared platform capabilities in complex organisations, where the friction is real and the answers are rarely clean.

---

## The Promise of Platformisation

The value proposition for platformisation is genuine. As organisations grow and accumulate teams working on related problems, a pattern emerges: the same capability gets built several times, each time slightly differently. Authentication logic lives in four services. Notification handling is reinvented by every team that needs it. Data access patterns diverge in ways that become expensive to audit or change. Each individual decision was locally rational. The cumulative effect is fragmentation that compounds over time.

Platformisation addresses this by creating shared capabilities that teams can adopt rather than rebuild. Done well, it reduces duplicated effort, improves consistency, and allows individual teams to focus on the problem they are uniquely positioned to solve. A product team building a lending feature should not need to build identity verification from scratch. A mobile team should not need to re-implement push notification infrastructure. These are solved problems that can be maintained once and used everywhere.

The appeal intensifies as organisations scale. What can be managed by convention in a ten-person engineering team becomes unmanageable without explicit shared infrastructure at a hundred. Platformisation is the structural response to that scaling reality — and when it works, the benefits are substantial.

---

## Where Platformisation Often Goes Wrong

The failure modes are not obscure. They appear reliably, across different organisations, and they tend to share a root cause: the decision to build a platform was made before the shape of the platform was clear.

The most common failure is premature abstraction. A team identifies a pattern — perhaps three services have slightly similar data fetching logic — and decides to generalise it. The resulting platform encodes the assumptions that were visible at the time of building: the data shapes, the failure modes, the latency expectations. When the fourth and fifth consumers arrive with slightly different requirements, the platform either cannot accommodate them or must be extended in ways that compromise its original clarity. The abstraction that was meant to reduce complexity has introduced a new layer of it.

A related failure is adoption without pull. Platform teams sometimes build capabilities with significant investment and genuine technical quality, only to find that product teams do not adopt them. This is rarely because the product teams are acting in bad faith. It is more often because the platform was designed around the platform team's understanding of the problem, not around the actual workflow of the people it was meant to serve. A platform that requires significant integration effort, that changes its interfaces without warning, or that lacks the documentation and support to make adoption straightforward will be avoided — even when it is technically superior to what teams are building locally.

Centralisation creates its own failure mode. When a shared platform becomes the path through which all consequential technical decisions flow, it becomes a bottleneck. Product teams wait for platform teams. The platform roadmap is oversubscribed. Features that depend on platform changes are delayed. The shared layer, designed to accelerate delivery, is now slowing it. This is not evidence that platformisation is wrong. It is evidence that the boundary between what is shared and what is local was drawn in the wrong place.

Finally, there is the failure of scope. Platform teams, with good intentions, build for hypothetical future needs — the features that everyone might need, the generality that might be required when the organisation is three times larger. This often results in systems that are complex to understand and slow to change, optimised for a future that may not arrive in the form anticipated.

---

## What Should Be Platformised — and What Should Not

There is no universal rule, but there are useful heuristics. Good platform candidates tend to share several characteristics: they are needed by multiple teams, their core behaviour is stable, they are expensive or risky to rebuild locally, and they are separable from domain-specific logic. These characteristics tend to appear together for a reason. Capabilities that are needed by many teams and are stable in their core design are the ones where the investment in a shared implementation pays off over time — and where the platform team can maintain deep expertise without being pulled in different directions by competing product requirements.

Poor candidates tend to be the inverse: needed by one team, changing frequently in response to product direction, or tightly coupled to domain decisions that the platform team does not have the context to make well. A payment flow that embeds specific business rules is not a platform — it is a product feature that happens to be shared. Sharing it creates coupling without clarity about who owns the business decisions embedded in the code.

A practical heuristic for planning conversations: if the question "who is responsible when this changes?" has a complicated answer, that is usually a signal that the ownership model has not been resolved. Ownership model confusion is one of the most reliable predictors of platform failure. Ask the question early, before the building starts.

---

## Interfaces, Boundaries, and Ownership

The technical quality of a platform matters, but the quality of its interfaces matters more. A platform with a well-designed, stable API can be replaced entirely behind that API without disruption to its consumers. A platform with a poorly designed API — one that leaks internal state, changes without notice, or requires consumers to understand the platform's implementation to use it correctly — creates hidden dependencies that are expensive to unpick.

The interface between a platform and its consumers is not purely technical. It includes expectations about versioning: how much notice will be given before a breaking change? It includes expectations about support: who can product teams contact when something is wrong, and what response time should they expect? It includes expectations about deprecation: when a platform capability is retired, what is the path for consumers? These questions are organisational as much as technical, and they require explicit agreement rather than optimistic assumptions.

Ownership clarity is a prerequisite for sustainable platforms. It is not enough for a team to build a platform capability. Someone must own it — which means owning the roadmap, the backlog, the operational burden, the support conversations, and the decisions about when to change the interface and when to hold it stable. Platforms without clear owners deteriorate as the people who built them move on and the tacit knowledge embedded in the code is not preserved elsewhere.

The tension between platform team autonomy and product team autonomy is real and does not fully resolve. Platform teams need enough autonomy to make architectural decisions that are good for the platform in the long term — decisions that a product team, optimising for its own delivery, might not make. Product teams need enough autonomy to move without waiting for centralised approval on every integration decision. The practical resolution is usually interface-level: what is behind the interface is the platform team's domain; how the interface is used is the product team's domain. Maintaining this boundary requires ongoing attention and occasional negotiation.

---

## Platformisation as an Organisational Design Problem

Most platform failures are not architectural in the technical sense. They are organisational. The team structure, incentive model, and reporting lines that govern a platform team will shape its behaviour more reliably than any technical architecture decision.

A platform team measured by adoption metrics will prioritise making its platform easy to use and well-supported. A platform team measured by feature delivery will prioritise shipping new capabilities, potentially at the expense of stability and support quality. A platform team embedded in a product organisation will face pressure to deprioritise platform work in favour of the product team's immediate roadmap. A platform team in a centralised infrastructure organisation will face different pressures — towards consistency and control, sometimes at the cost of the flexibility that product teams need.

Conway's Law — the observation that systems tend to reflect the communication structures of the organisations that build them — is not a curiosity. It is an active constraint. If the organisational structure does not support the architecture you are trying to build, the architecture will eventually conform to the organisational structure. Building a well-integrated platform from a fragmented set of teams is very difficult. Building a fragmented platform from a cohesive team is much less likely.

This does not mean that organisational design is fully deterministic of outcomes, but it does mean that architectural decisions and organisational decisions need to be made together. The question of who owns the platform is as important as the question of what the platform contains.

---

## Closing Reflection

The best platforms are rarely the ones planned most ambitiously at the start. They tend to emerge from observation: watching the same problem get solved differently in five different places, recognising the common shape beneath the surface variation, and building something that makes the sixth instance significantly easier than the first five were.

The discipline is in resisting the abstraction before the pattern is clear — and in having the organisational support to do the extraction work properly when the pattern has become visible. Premature platformisation creates debt that compounds; well-timed platformisation creates leverage that compounds. The difference between the two is not technical sophistication. It is the patience to wait for the evidence, and the decisiveness to act on it when it arrives.
