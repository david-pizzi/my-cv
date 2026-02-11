# David Pizzi CV — Agent Orchestration

## Project Context

This is David Pizzi's professional CV website, a single-page vanilla HTML/CSS/JS application hosted on GitHub Pages at `davidpizzi.com`. It doubles as an interactive web experience and generates a downloadable PDF (`David-Pizzi-CV.pdf`) via GitHub Actions + Puppeteer.

**Owner:** David Pizzi — AI & Cloud Engineering Leader (Capgemini)
**Stack:** Vanilla HTML5 / CSS3 / JavaScript (no frameworks, no build tools)
**Hosting:** GitHub Pages
**PDF generation:** `.github/workflows/generate-pdf.yml` (Puppeteer via Node)

### Key files

| File | Responsibility |
|------|---------------|
| `index.html` | All CV content and structure |
| `styles.css` | Design system, layout, animations, print styles |
| `script.js` | Interactivity: scroll reveal, modals, PDF export |
| `.github/workflows/generate-pdf.yml` | Automated PDF generation on push to main |

---

## Agent Roster

Three specialised agents handle distinct concerns. Each agent may also be invoked directly by the user for single-domain work.

| Agent | File | Domain |
|-------|------|--------|
| **Writer** | `.claude/agents/writer.md` | content, copy, wording, achievement phrasing, summary, tagline, ATS keywords |
| **Designer** | `.claude/agents/designer.md` | colour, typography, layout, spacing, animation, CSS, responsive, print/PDF appearance |
| **Developer** | `.claude/agents/developer.md` | HTML structure, JavaScript, accessibility, ARIA, modals, GitHub Actions workflow |

---

## Orchestration Rules

### 1. When to spawn an agent vs. act directly

Spawning an agent has overhead. Use this decision rule:

| Change type | Action |
|-------------|--------|
| **Trivial** — single element, ≤5 lines, obvious intent (fix a typo, tweak one CSS value, add one `aria-label`) | **Act directly.** No agent needed. |
| **Moderate — single domain** (rewrite a section, restyle a component, refactor a JS function) | **Spawn the relevant agent directly.** Pass the agent's `.md` file as its instructions. |
| **Significant — multi-domain** (new CV section, redesign of a component, interactive feature) | **Decompose into sub-tasks, spawn agents in order** — see below. |

**Decomposition order for multi-domain changes:**
1. **Writer** first — content drives what needs to exist
2. **Developer** second — structure wraps the content
3. **Designer** last — style is layered on top

### 2. Context to pass to every agent
Always include in the agent prompt:
- The specific user request
- The exact section(s) of the CV being changed
- The relevant file snippet(s) if the change is localised

### 3. Constraints all agents must respect
- **No external dependencies.** No npm packages, no CDN scripts beyond the two Google Fonts already in use.
- **No frameworks.** Vanilla JS and CSS only.
- **Print parity.** Every visual change must be checked against `@media print` rules in `styles.css`. The PDF output must remain professional.
- **No content invention.** The Writer agent refines and improves existing content; it never fabricates experience, qualifications, or metrics.
- **Accessibility baseline.** Semantic HTML, meaningful `alt` text, sufficient colour contrast (WCAG AA), keyboard-navigable modals.

### 4. Quality checklist before committing
- [ ] HTML validates (no unclosed tags, correct nesting)
- [ ] CSS variables used — no hardcoded colours or font stacks
- [ ] PDF layout unaffected (test via `window.print()` or run the workflow)
- [ ] No JavaScript errors in the browser console
- [ ] Mobile layout intact (test at 375px width)

---

## Design Tokens (quick reference)

```css
--primary: #0f172a          /* dark navy */
--accent: #3b82f6           /* blue */
--font-primary: 'Inter'     /* body text */
--font-display: 'Fraunces'  /* headings */
```

See `styles.css :root` for the full token set.

---

## Spawning agents

Agents are defined in `.claude/agents/` with YAML frontmatter. They are invoked via the Task tool using `subagent_type: general-purpose` — the agent's `.md` file path is referenced in the prompt so it loads its own instructions.

```
# Single-domain (moderate change)
Task tool
  subagent_type: general-purpose
  prompt: "Read D:\Docs\perso\Job\my-cv\.claude\agents\[writer|designer|developer].md for your instructions.
           Task: [user request].
           Relevant file section: [paste snippet if localised]."

# Multi-domain (significant change) — spawn sequentially, each building on previous output
1. general-purpose → read writer.md    → content changes first
2. general-purpose → read developer.md → structural changes based on writer output
3. general-purpose → read designer.md  → style changes based on developer output
```

> Note: `subagent_type: writer` (or designer/developer) is **not** valid — custom agents in `.claude/agents/` are not built-in Task tool agent types. Always use `general-purpose` and reference the `.md` file in the prompt.
