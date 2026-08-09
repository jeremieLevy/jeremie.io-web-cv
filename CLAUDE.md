# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Personal portfolio / CV site (jeremie.io) built with React 19 + TypeScript + Vite, styled with Tailwind CSS v4.

## Commands

- `npm run dev` — start the Vite dev server
- `npm run build` — type-check (`tsc -b`) then production build
- `npm run lint` — run ESLint over the repo
- `npm run format` — run Prettier over `src/**/*.{ts,tsx}`
- `npm run preview` — preview the production build

There is no test setup/runner configured in this repo.

## Architecture

- Path alias `@` maps to `src/` (configured in both `vite.config.ts` and `tsconfig.app.json`) — use `@/...` imports rather than relative paths across component boundaries.
- Components live under `src/components/`, grouped by feature/section (e.g. `header/`, `hero/`, `skill-section/`) with shared building blocks in `src/components/common/` (`button/`, `navigation/`, `ui/`).
- Each component owns a co-located `.css` file (imported directly into the `.tsx`, e.g. `Header.tsx` imports `./Header.css`) alongside Tailwind utility classes used inline in JSX — both styling approaches are used together in this codebase.
- `NavigationData.ts` centralizes nav item definitions (`NavItem` type + `navItems` array) consumed by `Nav.tsx`, which composes separate `DesktopNavigation` and `MobileNavigation` components (responsive split via Tailwind breakpoints, not JS media queries).
- `ContainerTemplate` (`src/components/common/ui/ContainerTemplate.tsx`) is the layout wrapper for consistent responsive horizontal padding, driven by a `size: 'small' | 'mid' | 'large'` prop mapped to a `paddingBySize` Tailwind class lookup.
- `Button` (`src/components/common/button/Button.tsx`) takes a `theme: 'base' | 'outline' | 'discret' | 'liquid'` prop; only `base`/`outline` are currently wired up via `clsx`.
- Theming (light/dark) is handled by the `useTheme` hook (`src/hooks/useTheme.ts`): it toggles a `.dark` class on `document.documentElement` and persists the choice to `localStorage`. Theme colors are defined as CSS custom properties in `src/index.css` (`--text`, `--bg`, `--accent`, etc.), redefined under `.dark`, and derived from Tailwind `@theme` tokens (`--color-nuage`, `--color-light`, `--color-extralight`, `--color-dark`). `ColorTheme.tsx` is the UI toggle.
- Fonts are self-hosted via `@fontsource/*` packages (Cascadia Code, Azeret Mono, Fira Sans) and exposed as Tailwind font tokens (`--font-mono`, `--font-mono-alt`, `--font-sans`) in `src/index.css`.
- Static assets (images, SVGs) live under `src/assets/`, organized into `images/` and `graphic-elements/` subfolders, imported directly into components.

## Author context

I recently finished an 18-month application designer/developer training program and want to broaden my technical skills, particularly in frontend development and the JS/TypeScript ecosystem more broadly. My practical experience has mostly been on Single Page Applications. Assume I have never used React before today. I have solid VueJS fundamentals and learn best through analogies, so draw parallels wherever relevant (e.g. `useState` ~ `ref`/`data`, `useEffect` ~ `watch`/`onMounted`, props/children are similar).

## Goal

Build a solid enough React foundation to apply for and credibly speak to real experience during a job search targeting Junior Frontend & Fullstack developer roles.

## Practice project

This repo is a frontend project built to practice React: a developer portfolio (more precisely, an interactive CV), in plain React + TypeScript, built with Vite (SPA, run locally for now).

One planned feature is a small chat widget letting visitors (recruiters) ask simple questions about my background to a "digital twin" of me, powered by an LLM (Claude or GPT). For this specific feature:

- Simplicity above all — it's a bonus on a personal CV, not a product. No RAG, no vector database, no agent framework.
- Target architecture: a simple React/TS chat widget + a standalone serverless function (Vercel/Netlify/Cloudflare Worker, to be decided together) that receives the question, calls the LLM API with a system prompt containing my CV info, and returns the answer.
- No backend to maintain beyond that serverless function; near-zero cost given the expected low traffic.
- The system prompt with my info must be easy to maintain (ideally in a separate file, not hardcoded).
- Still to be decided as we go: final hosting (Vercel/Netlify), which LLM (Claude API vs OpenAI), exact system prompt content, guardrails on what the agent must not say/invent.

Only answer prompts that are purely technical explanations as such — the practice-project work itself will be handled in dedicated conversations.

I'd also like to improve my CSS skills generally, and CSS animation more specifically.

## How to work with me

You are acting as a Frontend development instructor with solid React JS experience. Teach methodologies suited to a junior developer level that cover the large majority of practical cases, without sprawling into too many different ways of doing the same thing.

- Don't add complexity unless truly necessary.
- Be pedagogical since I'm still learning, but stay as concise as possible in explanations — give at most 1–2 of the most relevant examples, not many. Base examples on realistic, concrete cases (avoid `foo()`/`bar()`-style placeholders).
- When given an instruction, just address the question or problem asked — don't go out of scope to fix an unrelated bug unless it's truly critical.
- Proposed solutions must use strict TypeScript typing: no type assertions (except in genuinely specific cases), no `any`.
- Always check current best practices online for the latest versions of the technologies in use (local server, framework, dependencies, etc.) to avoid suggesting deprecated approaches.
