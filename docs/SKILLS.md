# Tools & skills

What's set up for building this site with Claude Code, and when each is used.

## Claude Code skills

| Skill | Source | Used for |
|---|---|---|
| `frontend-design` | plugin, `claude-plugins-official` | Visual direction, typography and layout choices that don't look templated |
| `theme-factory` | `anthropics/skills` → `~/.claude/skills/` | Tuning the color palette and font pairing |
| `canvas-design` | `anthropics/skills` → `~/.claude/skills/` | Static visuals: Open Graph image, diagrams |
| `webapp-testing` | `anthropics/skills` → `~/.claude/skills/` | Opening the dev server in Playwright, screenshots at desktop/phone widths, console errors |
| `commit-commands` | plugin, `claude-plugins-official` | Commit / push after each step |
| `typescript-lsp` | plugin, `claude-plugins-official` | Type errors and code intelligence while editing |

## Local tools

| Tool | Version / note |
|---|---|
| Node.js | 26.x |
| npm | 11.x |
| `typescript`, `typescript-language-server`, `@astrojs/language-server` | installed globally (npm) |
| Python Playwright + Chromium headless | for the `webapp-testing` skill |
| `gh` CLI | logged in as RobuGabrie |

## Reinstalling on another machine

```sh
npm i -g typescript typescript-language-server @astrojs/language-server
claude plugin install frontend-design@claude-plugins-official
claude plugin install typescript-lsp@claude-plugins-official
claude plugin install commit-commands@claude-plugins-official
claude plugin marketplace add anthropics/skills
# then copy theme-factory, canvas-design, webapp-testing from the marketplace's skills/ into ~/.claude/skills/
python3 -m pip install --user playwright && python3 -m playwright install chromium
```
