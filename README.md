# Pragmatic Task Manager

A minimal starter template: **React 19**, **Vite 7**, **TypeScript**, and **Zustand**.

---

## Tech stack

| Layer        | Choice    |
| ------------ | --------- |
| UI           | React 19  |
| Build        | Vite 7    |
| Language     | TypeScript 5.9 |
| State        | Zustand   |

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
├── store/           # Zustand stores (e.g. useAppStore.ts)
├── App.tsx
├── App.interface.ts
├── App.css
├── main.tsx
└── index.css
```

---

## Code style

- **ESLint** and **TypeScript** are aligned with strict, type-checked rules.
- Components use `FC<IProps>`; interfaces live in separate `*.interface.ts` files.
- Path aliases: `@store/*`, `@shared/*`, `@modules/*`, `@helpers/*`, `@components/*`.
