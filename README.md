# Khetesh Singh - Engineering Portfolio

A responsive React + TypeScript portfolio focused on full-stack web
development: frontend applications and libraries, backend APIs, enterprise
integrations, and applied AI. Delivery and release engineering support this
full-stack profile rather than replacing it with a narrower job-title claim.

## Development

```sh
npm ci
npm run dev
```

```sh
npm run build
npm run lint
npm run preview
```

The production output is generated in `dist`. The site uses Vite and Tailwind CSS.
No backend or EmailJS configuration is required: contact links open an email
client, and the copy-email button announces success or failure.

## Content

- `src/sections/Hero.tsx`: introduction and selected career outcomes.
- `src/sections/ShowcaseSection.tsx`: frontend component library, RepoLens,
  and Automata, with expandable engineering notes.
- `src/sections/ExperienceSection.tsx`: employer and role progression.
- `src/sections/TechStack.tsx`: capabilities and supporting technologies.
- `src/sections/Contact.tsx`: email, GitHub, and LinkedIn.
- `src/components/MotionEffects.tsx`: GSAP entrances, scroll reveals, reading
  progress, pointer spotlights/tilt, and the pause-motion control.
- `src/components/AnimatedDetails.tsx`: native keyboard-accessible disclosures
  with reversible height/opacity animations for opening and closing.
- `src/components/ProjectPreviews.tsx`: interactive library explorer (sortable,
  selectable table, app frame, keyboard-accessible tabs) and Automata's AI-powered
  testing-scope map. These use example data, not proprietary UI or live test runs.
  Project cards use a balanced overview above a compact, full-width interactive
  stage. Engineering notes expand below the stage, never stretching a side panel.
- `public/17_11_2026.pdf`: the resume opened directly by the site's resume links.

Keep the supplied PDF resume and portfolio claims synchronized. Lead with full-stack
web application development; system integration, release engineering, and testing
are supporting parts of that work, not the portfolio's
professional identity. Automata is a testing framework: the described contribution
is improvements to its automation agents and complete ownership of building its
API-testing feature, not just frontend or integration work.
The first enterprise project is a frontend library, not a standalone product
platform. Automata is enterprise work using OpenAI; RepoLens uses Gemini.
The app-frame upgrade's 10-12s to 1-2s result refers to initial application load
time in consuming applications, not API latency or library build time.
GitHub Copilot and Claude Code are listed separately as AI development tools.
Internal work uses clearly labeled conceptual diagrams rather
than proprietary screenshots. Do not present diagrams as live product output or
add customer/adoption claims without supporting evidence.

## Accessibility and manual checks

- Keyboard-test the skip link, navigation, case-study disclosures, and contact actions.
- At mobile widths, open the navigation menu and follow each section link.
- Check layout at 320px, 390px, 768px, and desktop widths without horizontal overflow.
- Confirm each case study expands with Enter/Space and exposes its engineering notes.
- Check both opening and closing animation, including rapid direction changes.
- Switch library previews with clicks and arrow/Home/End keys; verify table sorting,
  row selection, and nested tab panels. Explore Automata's testing types and confirm
  API-feature ownership stays distinct from the broader framework scope.
- On desktop, keep the library and Automata stages below 360px tall in every
  interactive state. Expanding engineering notes must not increase stage height.
- Confirm career dots and the connecting line fill as entries cross 55% of the
  viewport, and unfill when scrolling back. This works even with motion paused.
- Check copy-email feedback and the fallback message when clipboard access fails.
- Check `/17_11_2026.pdf` directly and confirm all resume links open it.
- The site respects reduced-motion preferences and has no scroll-capturing 3D canvas.
- Verify **Pause motion** stops ambient animation and restores any scroll-reveal
  content to its readable state. **Resume motion** enables effects again.
- With reduced motion enabled, all content must remain visible and animation-free.
- Pointer tilt and spotlights run only on fine-pointer, hover-capable devices.
- Verify background orbit dots stay centered on the ring strokes throughout a
  full revolution, including tilted rings and mobile layouts.

The hero uses a visible SVG system with orbiting satellites, flowing connections,
CSS auroras, and floating code chips. The career timeline has a traveling signal
and a pulsing current-role marker, so motion is visible beyond the hero.
Project diagrams animate conceptually; they are not live
execution indicators. Motion does not capture scrolling or change project claims.
The blue grid and purple diamond patterns stay stationary while low-opacity
lighting sweeps/drifts behind their content on 18/20-second cycles. Both effects
respect Pause motion and reduced motion; the green background remains unchanged.

Measure performance against the production build, not the development server.
