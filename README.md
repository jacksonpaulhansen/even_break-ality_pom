# Even Breakality (Pomodoro for Even G2)

Simulator-first Pomodoro app for Even G2 / Even Hub.

## Features

- Focus/Break timer
- Gesture input support:
  - `Click` = start/pause
  - `Double Click` = reset current mode
  - `Up` = switch to Focus
  - `Down` = switch to Break
- Transition modes:
  - `AUTO`: switches mode after transition duration
  - `MANUAL`: flashes, then shows `CLICK to continue` on HUD
- Transition flash customization:
  - Flash A char + qty
  - Optional Flash B alternate char + qty
  - Flash interval (`ms`)

## Run locally

1. Install once:
   - `npm install`
2. Start with runner:
   - `run-even-sim.ps1`
3. Runner starts:
   - app dev server: `http://127.0.0.1:5173`
   - control server: `http://127.0.0.1:8787`
   - Even Hub simulator (if installed/found)

## User Settings

- `Focus` (mins, decimal allowed)
- `Break` (mins, decimal allowed)
- `Transition`:
  - `Method`: `AUTO` or `MANUAL`
  - `Sec`: transition duration
- `Flash A`:
  - `Char`
  - `Qty`
- `Flash B`:
  - enable/disable via checkbox in header
  - `Flash` (ms), `Char`, `Qty`

## Debug Tools

- `Publish App`
- `Build EHPK`
- Event + publish logs

Debug tools can be hidden for end users via `HIDE_DEBUG_TOOLS` in `src/main.ts`.
Local dev toggle shortcut: `Ctrl+Shift+D`.

## Publish notes

- Publish flow now targets `main` branch.
- New repos created by publish flow are private by default.
- If GitHub Pages deploy fails, verify repository Pages source is set to `GitHub Actions`.
