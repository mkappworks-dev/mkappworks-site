---
name: Cloudzilla
description: A self-hostable, open source alternative to GitHub. Git hosting, pull requests, issues, and CI — on your own infrastructure.
status: wip
tags: [oss, infra, go, postgres]
github: https://github.com/mkappworks-dev
benchlabsApp: false
---

Cloudzilla is a lightweight, self-hostable Git forge. It provides the core features teams actually need: repository hosting, pull requests with code review, an issue tracker, and a basic CI runner.

Written in Go with a PostgreSQL backend. Ships as a single binary with embedded migrations. Deploy to any VPS in minutes — no Kubernetes required.

The goal is to be the simplest thing that actually works for a small team that wants to own their development infrastructure.
