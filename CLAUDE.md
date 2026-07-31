# Working rules

Optimization only, never redesign. The site must look and behave identically
after any change unless explicitly told otherwise.

Never change without asking: layout, spacing, colors, fonts, Tailwind classes,
component structure, animations, timing, copy, links, image aspect ratios.

Always: branch before working, `npm run build` with zero errors, actually run
the dev server and look at the page before reporting done, commit each pass
separately, never merge to main unless asked.

Report: what changed, `git diff --stat`, what you skipped and why.
Stop and ask if a task seems to need a visual change.