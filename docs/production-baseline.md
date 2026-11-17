# Production baseline: 2026-11-17, revision 2

## Current deployed release

The accepted website at https://przychodniakorona.pl/ matches release `r2`,
built from source commit `1c68f6e1b60432e3bd0809b1834ae00b66898afe`
and merged into `main`.

This version removes the security incident notice and updates Tomasz Rewers's
portrait. His separate thumbnail uses a wider crop that includes his shoulders;
the full-size profile photo is unchanged by the thumbnail adjustment.

The complete Linux-compatible ZIP and SHA-256 manifest are tracked in
[`releases/2026-11-17-r2/`](../releases/2026-11-17-r2/README.md).
Only this accepted package is retained in the current repository tree.
Previous packages and reconciliation records remain available in Git history.

## Verification

- All 88 public files were downloaded from the live server on 2026-11-17
  and matched the release manifest byte for byte, including photos and thumbnails.
- The archive has 89 entries matching the local build, with forward-slash paths
  suitable for Linux extraction.
- The additional `.htaccess` file was verified locally only; the server's
  private configuration was not downloaded.
- TypeScript validation and the production build passed for this release.
  Existing build warnings concern a tooltip sourcemap and a large JavaScript chunk.
- The wider thumbnail was visually checked at desktop and mobile sizes.

The individual file hashes, archive hash, and source commit are recorded in
[`manifest.json`](../releases/2026-11-17-r2/manifest.json).

## Repository and release workflow

`main` is the baseline for future work. Create a feature branch from the latest
`main`, make and verify the requested changes, then merge back into `main`.

GitHub Pages is a separate preview deployment using `BASE_PATH=/Dental-Korona/`.
Its automatic workflow publishes only from `main`. Pushing to GitHub does
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

Keep working ZIP packages and unpacked releases out of Git. The accepted
production archive is tracked under `releases/`, together with its source
commit and checksum manifest. Ignore rules for unpacked releases also prevent
Tailwind from scanning generated bundles and changing CSS unexpectedly.
Preserve the lockfile for repeatable builds.
