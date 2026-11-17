# Linux.pl production release: 2026-11-17

This is the verified release for https://przychodniakorona.pl/ after removing
the data security notice and updating Tomasz Rewers's portrait and thumbnail.

- Source commit: `1bb8b64007835c62c3f61b6aef1e45c7d0c0ccbf` (merged into `main`).
- Archive: [dental-korona-public_html-20261117-linux.zip](dental-korona-public_html-20261117-linux.zip).
- Archive size: 14,794,818 bytes.
- Archive SHA-256: `035adf2b205795e0a021f688435906c9f048fadaac992bf5774931b364c6901d`.
- File checksums: [manifest.json](manifest.json).

## Verification

All 89 archive entries match the local production build. All 88 publicly
accessible files also match the deployed website byte for byte, verified by
SHA-256 on 2026-11-17. This includes the repaired stylesheet
`assets/DPC5eDhE.css`, JavaScript, photos, thumbnails, and logo.

The remaining entry is `.htaccess`. It matches the local build but is not
publicly downloadable, so its current server contents were not verified over
HTTP. The archive uses forward slashes in all paths for Linux compatibility.

Verification covers the files required by this release; it does not enumerate
unreferenced older files that may remain on the server.

## Deployment

Upload and extract the archive directly into the domain's `public_html`,
allowing existing release files to be replaced. `index.html`, `.htaccess`,
`assets/`, and `gallery-thumbs/` must be directly inside `public_html`.

Use this complete archive instead of the earlier Windows-path ZIP or the
single-file CSS repair archive. The CSS repair is already included here.

Keep this release immutable. Save later verified deployments in a new release
directory with their source commit and manifest. Unpack archives outside the
repository or under ignored `tmp/` to avoid Tailwind scanning generated files.
