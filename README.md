# Pragmatic Task Manager

A minimal starter template: **React 19**, **Vite 7**, **TypeScript**, and **Zustand**. Custom UI (no component libraries); theme and routing set up.

---

## Tech stack

| Layer        | Choice    |
| ------------ | --------- |
| UI           | React 19  |
| Build        | Vite 7    |
| Language     | TypeScript 5.9 |
| State        | Zustand   |
| Routing      | React Router 7 |
| Drag & drop  | @atlaskit/pragmatic-drag-and-drop (installed; usage later) |

---

## Requirements

- **Node.js** 20+ (recommended for Vite 7)

---

## Quick start

```bash
npm install
npm run dev
```

App runs at **http://localhost:5173**.

---

## Scripts

| Command            | Description                    |
| ------------------ | ------------------------------ |
| `npm run dev`      | Start dev server with HMR      |
| `npm run build`    | Type-check + production build  |
| `npm run preview`  | Serve production build locally |
| `npm run lint`     | Run ESLint (max-warnings=0)    |

---

## Project structure

```
src/
├── providers/       # ThemeProvider, AppMainProvider (context + router)
├── pages/           # Route-level pages (e.g. boardPage)
├── theme/           # appPalette, applyTheme → CSS vars (--app-*)
├── components/      # BackdropLoading, LazyPageBoundary
├── helpers/         # buildProvidersTree
├── store/           # Zustand store(s)
├── appRoutes.config.tsx
├── App.tsx
├── main.tsx
└── index.css
```

---

## Theme

Colors are defined in `src/theme/appPalette.ts` and applied to `document.documentElement` as CSS custom properties (`--app-overlay`, `--app-background-neutral`, etc.) by **ThemeProvider** on mount. Use `var(--app-*)` in CSS. No MUI; palette aligned with Atlassian-style tokens.

---

## Code style

- **ESLint** and **TypeScript** strict, type-checked.
- Components: `FC<IProps>`; interfaces in separate `*.interface.ts` files; names start with `I`.
- Path aliases: `@store/*`, `@shared/*`, `@modules/*`, `@helpers/*`, `@components/*`, `@providers/*`, `@pages/*`, `@theme/*`.
- Providers: named export (`export { ThemeProvider }`); App composes them via `buildProvidersTree([...])`.
