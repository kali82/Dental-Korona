# Linux.pl release: 2026-11-17, revision 2

Status: accepted and verified on https://przychodniakorona.pl/ on 2026-11-17.

This release widens Tomasz Rewers's thumbnail crop to show his shoulders at
a scale comparable to the other team portraits. The full-size profile photo
and all other source assets are unchanged.

The 320 x 320 thumbnail is generated from the top 2424 x 2424 square of
`assets/Tomasz_Rewers_v2.jpg`, using bicubic resampling and JPEG quality 85.

- Archive: [dental-korona-public_html-20261117-r2-linux.zip](dental-korona-public_html-20261117-r2-linux.zip).
- Source commit, archive checksum, and individual file checksums: [manifest.json](manifest.json).
- Production build passed; the thumbnail was visually checked at desktop and mobile sizes.
- All 89 ZIP entries match the local build. Archive paths use forward slashes.
- All 88 public files on the live server match the manifest byte for byte.
- `.htaccess` is verified locally only; the server's private configuration was not downloaded.
- The complete package includes the stylesheet, `.htaccess`, photos, and thumbnails.

Upload and extract the archive directly into the domain's `public_html`,
replacing existing release files. `index.html` must be directly in `public_html`.
The regenerated JavaScript references the new thumbnail filename, so upload
the complete release rather than replacing just the old hashed image.

Only this accepted release is retained in the current repository tree.
Previous release packages remain available in Git history.
