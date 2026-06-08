---
name: Cloudzilla
description: A minimal, self-hosted Git forge and open source GitHub alternative. Git hosting, pull requests, code review, and issues from a single binary — no external runtime dependencies.
status: alpha
tags: [oss, infra]
stack: [Go, PostgreSQL, htmx, templ, Tailwind CSS]
github: https://github.com/mkappworks-dev/cloudzilla-app
url: https://cloudzilla.dev
icon: /cloudzilla_icon.svg
benchlabsApp: false
---

Cloudzilla is a minimal, self-hosted Git forge. It covers the parts a small team actually reaches for every day: repository hosting, pull requests, code review, and an issue tracker. Nothing it doesn't.

It is written in Go with a PostgreSQL backend and ships as a single binary. There is no external runtime to install and no sidecar services to babysit, and migrations are embedded, so the binary brings its own schema. You drop it on a box, point it at Postgres, and it runs.

That makes self-hosting realistic for teams who don't want to operate a platform. Deploy to any VPS in minutes, keep your code on infrastructure you control, and skip the Kubernetes cluster that most forges quietly assume you already have.
