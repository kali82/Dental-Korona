# Local setup

The website exported from Replit lives in:

`artifacts/beehive-dental`

## Start on Windows

From the repository root:

```bat
scripts\dev-beehive-local.cmd
```

Open:

`http://localhost:5173`

## Standard pnpm workflow

```bat
corepack enable pnpm
pnpm.cmd install
pnpm.cmd --filter @workspace/beehive-dental run dev
```

If PowerShell blocks `npm` or `pnpm` with an execution policy error, use the `.cmd` variant, for example `pnpm.cmd`.

## Where to edit content

Most text, phone numbers, addresses, links, and images are currently hardcoded in these files:

- `artifacts/beehive-dental/src/pages/home.tsx`
- `artifacts/beehive-dental/src/pages/services.tsx`
- `artifacts/beehive-dental/src/pages/about.tsx`
- `artifacts/beehive-dental/src/pages/new-patients.tsx`
- `artifacts/beehive-dental/src/pages/gallery.tsx`
- `artifacts/beehive-dental/src/components/Navigation.tsx`
- `artifacts/beehive-dental/src/components/Footer.tsx`

