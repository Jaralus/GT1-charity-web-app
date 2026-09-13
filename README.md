# GT1's Toolkit

A web app for children living with Type 1 Diabetes, their families, and carers,
built in partnership with [Go Type 1!](https://gotype1.com).

## Where the website lives

Everything in the [`site/`](site/) folder **is** the website, exactly as it
appears online — there is no separate build or "compile" step. If you open
`site/index.html` in a browser, you're looking at the real thing.

```
site/
  index.html   the page content (text, structure)
  styles.css   colours, fonts, spacing, layout
  app.js       the interactive logic (zones, quizzes, audio playback)
  audio/       the music and sound-effect clips
```

To change something on the live site: edit a file in `site/`, then upload
that same file to the hosting (see "Publishing a change" below). That's it —
no software to install, no commands to run.

## Making a text edit

Open `site/index.html` in any plain text editor (Notepad, VS Code, or
SiteGround's own File Manager code editor all work). The file is laid out in
labelled sections, e.g.:

```html
<!-- ============ LANDING ============ -->
<section id="view-landing" class="landing">
  ...
  <p class="landing-sub">A friendly guide for children living with Type 1 Diabetes...</p>
```

Find the section by its `<!-- ==== NAME ==== -->` comment, then edit the
text between the tags (e.g. between `<p ...>` and `</p>`). Don't remove or
change the tags themselves (the parts in `< >` — those control layout), and
leave `href="..."` links alone unless you mean to change where a link goes.

Save the file, then publish it (below).

## Making a styling edit

Colours, fonts and spacing live in `site/styles.css`. For example:

```css
--adult-slate: #4a5568;
```

Colours are mostly defined once near the top as named variables like the one
above, then reused everywhere — so changing a variable's value changes it
site-wide. If you're not sure which rule affects what, it's safest to make a
small change, preview it (below), and undo if it doesn't look right.

## Previewing a change before publishing

Just double-click `site/index.html` (or right-click → Open with → your
browser). It opens straight from your computer with no server needed, and
looks/behaves exactly as it will online — good enough to check text and
layout changes before uploading.

## Publishing a change (SiteGround)

1. Log into SiteGround → Site Tools → **File Manager** (or use an FTP client
   if you have one set up).
2. Navigate to the website's root folder (usually `public_html/`, or a
   subfolder if the app lives at a sub-path).
3. Upload the file(s) you changed from `site/`, overwriting the existing
   ones with the same names (e.g. upload your edited `index.html` over the
   one that's already there).
4. Visit the live site and check the change looks right.

You only need to upload the files you actually changed — you don't need to
re-upload the whole `site/` folder every time, though doing so is harmless.

## Swapping an audio clip

Each clip in `site/audio/` is a plain `.mp3` file. To replace one, export
your new audio as an `.mp3` with **the exact same filename** as the one
you're replacing (e.g. `kidsMusicHome.mp3`), then upload it over the old one
in `audio/` on the host. No other file needs to change.

## What not to touch casually

`app.js` controls the app's actual behaviour (which zone shows what, quiz
logic, audio playback). It's plain, readable JavaScript, but a small typo in
it can break the whole page (not just look wrong) — so treat changes there
as developer work, or get someone comfortable with JavaScript to review
before publishing.

## For developers

There is no build pipeline — `site/` is deployed as-is, which is why it's
plain (readable, unminified) rather than compiled or bundled. That's a
deliberate trade-off: the entire audio-heavy app is ~31MB, and minifying the
~180KB of JS/CSS saves under 40KB (~0.1% of the total) — not worth requiring
Node/npm for non-technical maintainers. If you ever want minification back,
`git log` has the earlier commit that added an esbuild-based `dist/` build.
