# Production baseline: 2026-11-17

## Current deployed release

The current website matches source commit
`1bb8b64007835c62c3f61b6aef1e45c7d0c0ccbf` on `main`: the security notice has
been removed and Tomasz Rewers has a new portrait and a separate thumbnail.

The verified Linux-compatible ZIP is tracked in
[`releases/2026-11-17/`](../releases/2026-11-17/README.md), together with the
SHA-256 manifest. After the missing CSS was uploaded, all 88 public files
matched this package byte for byte. The package has 89 entries including
the non-public `.htaccess` file, verified against the local build only.

The sections below preserve the earlier reconciliation evidence, before
these two changes were made and deployed.

## Earlier source baseline

The source baseline for https://przychodniakorona.pl/ is
`mobile-castomization` at `605a691` plus the previously uncommitted changes
captured by the production reconciliation commit.

## Evidence

- Local `main` was `21b7739`. After fetching, `origin/main` was `072d2e9`,
  the earlier merge of `mobile-castomization` at `658700f`.
- The live website matches the local release directory
  `artifacts/beehive-dental/dental-korona-public_html-20260815-173733-logo-fix-final`.
- All 87 public release files were downloaded from the live site and compared
  with SHA-256: 87 identical, zero differences.
- A fresh build of the working sources reproduced all 88 release files exactly.
  The extra file is `.htaccess`, verified against the local release only;
  the server's private configuration was not downloaded.
- After merging and checking out `main`, a second build matched 82 files byte
  for byte. Six text files differed only in CRLF/LF line endings introduced by
  Git on Windows (`index.html`, `.htaccess`, `favicon.svg`, `robots.txt`,
  `site.webmanifest`, `sitemap.xml`). All 88 files match in content; JavaScript,
  CSS, and bitmap images still have identical hashes.
- The supplied Downloads directory `public_html (1)` contains only a 42-byte
  file named `public_html`, pointing to
  `./domains/przychodniakorona.pl/public_html`. It is not a site backup.
- TypeScript validation passed. Vite built successfully with existing warnings
  about the tooltip sourcemap and a JavaScript chunk larger than 500 kB.

### Reference SHA-256 hashes

| Public path | SHA-256 |
| --- | --- |
| `index.html` | `1D9DA22769B3F79BA6AA09AD3F6AC1C0F6B59E63BCE65975CE7E70A356D1CFDB` |
| `assets/index-CXnrGJS3.js` | `8FBF52A29056F7D9C6BCF64439FACFA0BB10307E9D58E2C6F5E94173B75336B5` |
| `assets/DvqxQqyw.css` | `8BDCB2ED62C8B77522DDD651AA5C6E55BDBF237A0E41B558E07241AD62C76D6D` |
| `assets/_oZvQF9o.png` | `32276A1BC89C6CA2F5F9C2C292784A56BB18BC76999F90F1751D994B964C991F` |

Local audit evidence is in ignored `tmp/production-audit/`: downloaded public
files, `live-comparison.json`, the comparison script, and the reproduced build.

## Changes already present in production

- Security incident notice and its translations, footer entry, and dialog support.
- Shared language switcher and storage error handling.
- Updated team names and corresponding gallery translations.
- ASCII logo filename and hash-only generated asset names.
- Client-side routing fallback in the release `.htaccess`.
- The radiation information page changes from `mobile-castomization`.

These changes were recovered into version control; no new site content was
introduced during reconciliation.

## Repository and release workflow

`main` is the baseline for future work. Create a feature branch from the latest
`main`, make and verify the requested changes, then merge back into `main`.
Existing `mobile-castomization` and `test-website` branches retain their history.

GitHub Pages is a separate preview deployment using `BASE_PATH=/Dental-Korona/`.
Its automatic workflow now publishes only from `main`. Pushing to GitHub does
not update the Linux.pl website.

For a Linux.pl release, build from the repository root in PowerShell:

```powershell
$env:BASE_PATH = '/'
pnpm.cmd --filter @workspace/beehive-dental run typecheck
pnpm.cmd --filter @workspace/beehive-dental run build
```

Upload the **contents** of `artifacts/beehive-dental/dist/public`, including
`index.html`, `assets/`, and `.htaccess`, into the domain's `public_html`.
The source `artifacts/beehive-dental/public` directory alone is not a release.

Keep working ZIP packages and unpacked releases out of Git. Verified production
archives requested for retention are tracked under `releases/`, together with
their source commit and checksum manifest. The `.gitignore` rules for
`dental-korona-public_html-*` also keep Tailwind from scanning old generated
bundles, which otherwise changes the generated CSS even when source code is
unchanged. Preserve the lockfile for repeatable builds.
