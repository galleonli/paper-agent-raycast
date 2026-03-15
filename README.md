<p align="center" style="font-size: 1.25em;"><img src="assets/extension-icon.png" width="32" height="32" alt="" style="vertical-align: middle;" /> <strong>Paper Agent Raycast Extension</strong></p>

A [Raycast](https://www.raycast.com/) extension for the [Paper Agent](https://github.com/galleonli/paper-agent) workflow: run the pipeline, browse today’s and recent papers, search your library, manage favorites and a reading queue, and schedule daily runs on macOS.

**This repo contains the extension only.** You must install and configure the [Paper Agent core](https://github.com/galleonli/paper-agent) first.

---

## Requirements

- **Raycast** (macOS)
- **Paper Agent core** — cloned repo with valid `config.yaml`, `.venv`, and `paper_agent` installed
- **Paper directory** — a folder where the core writes notes, daily/weekly digests, and `library/` (JSON outputs)

---

## Quick start

### 1. Install Paper Agent core

You need the [Paper Agent core](https://github.com/galleonli/paper-agent) installed: clone, create a venv, install deps, copy `config.example.yaml` to `config.yaml`, and run the pipeline at least once so the library is populated.

**One-liner (Unix/macOS):**

```bash
git clone https://github.com/galleonli/paper-agent.git && cd paper-agent && ./scripts/bootstrap.sh
```

Then run the pipeline once (e.g. `./.venv/bin/python -m paper_agent run --config config.yaml`). For detailed core install (Windows, cron, config options), see the [core README Quick start](https://github.com/galleonli/paper-agent#quick-start).

### 2. Install this extension

- **From the Store:** search for “Paper Agent” in Raycast and install.
- **Local development:** clone this repo, run `npm install` and `npm run dev` to load the extension in Raycast.

### 3. Configure Preferences

Open **Raycast → Extensions → Paper Agent → Preferences** and set:

| Preference           | Description |
| -------------------- | ----------- |
| **Config file path** | Full path to the core `config.yaml` (e.g. `/path/to/paper-agent/config.yaml`). |
| **Paper directory**  | Your `delivery.paper_dir`: where notes, digests, and `library/` live. |
| **Python executable**| Optional. Leave empty to use `<config_dir>/.venv/bin/python3`. |

When you use **Run Paper Agent** or **Install Daily Schedule**, the extension builds runtime config (direction, delivery, summarize, sources, policy) from these preferences; values in `config.yaml` for those sections are overridden. Other sections (e.g. interests, export, prompts) are still read from `config.yaml`.

---

## Commands

| Command | Description |
| --------| ----------- |
| **Run Paper Agent** | Run the full pipeline once. Uses Preferences for direction, delivery, summarize, sources; reads the rest from `config.yaml`. Shows a toast when done, skipped, or failed. |
| **Today Papers** | Browse today’s papers from your local library. Detail view: title, authors, abstract, “Why this paper,” optional research summary. Actions: open paper/note, related papers, mark read, favorites, reading queue. |
| **Recent Papers** | Browse recently added papers (last N days). Same detail and actions as Today Papers. Limit is set in Preferences (Recent papers limit). |
| **Search Papers** | Search the local library by title, authors, abstract, categories, date. Same list actions as above. |
| **Favorite Papers** | Papers you’ve added to favorites from any list. Stored locally in the extension. |
| **Reading Queue** | Papers you’ve queued for reading. Stored locally; same open/read/favorite actions. |
| **Install Daily Schedule** | Install a macOS `launchd` job that runs Paper Agent daily at **04:00** and catches up once after boot/login if 04:00 was missed. Re-run after changing Preferences that affect the pipeline. |
| **Remove Daily Schedule** | Uninstall the daily `launchd` job. Logs and status history are kept. |
| **Check Run Status** | View whether the daily schedule is installed, today’s result, last successful day, and last run metadata. Actions: open config directory, log directory, state directory, last run log. |
| **Open Paper Directory** | Open the configured paper directory in Finder (notes, `library/`, digests). |
| **Open Config Directory** | Open the folder that contains your `config.yaml` (core repo root) in Finder. Also available as an action in **Run Paper Agent** (Core not found) and **Check Run Status** when Config file path is set. |

---

## Core not found

If the extension can’t detect the core (missing or invalid config path, missing Python/venv, or `paper_agent` not runnable), relevant commands show **Core not found** with:

- A link to the [core repo](https://github.com/galleonli/paper-agent)
- **Copy Bootstrap Command** — copies a one-line install command; paste in a terminal to clone and bootstrap the core, then set Preferences again
- **Open Config Directory** — shown only when **Config file path** is set; opens the folder containing `config.yaml` in Finder
- **Open GitHub** — opens the core repo in the browser

---

## Development

```bash
git clone <this-repo> && cd paper-agent-raycast
npm install
npm run dev    # Load extension in Raycast for development
npm run lint   # Validate package.json and run ESLint + Prettier
npm run build  # Compile extension
```

**Publish to the Raycast Store:** `npm run publish` (see [Raycast publish docs](https://developers.raycast.com/basics/publish-an-extension)).

---

## Troubleshooting

- **Today / Recent / Search show nothing** — Ensure **Config file path** and **Paper directory** are set and the core is working. Run the pipeline at least once so `library/` has JSON files.
- **Run Paper Agent fails or “Core not found”** — Check that the config path points to a real `config.yaml`, that the Python path (or default `.venv`) exists, and that `python -m paper_agent run --help` works in that environment.
- **Daily schedule not running** — After changing Preferences, run **Install Daily Schedule** again so the launchd job picks up the new config. Use **Check Run Status** to see install state and last run.

For core-side docs (config.yaml, Preferences vs config, scheduling, Google Scholar, output artifacts, troubleshooting), see the [Paper Agent core README](https://github.com/galleonli/paper-agent).

---

## License

This project is licensed under the [MIT License](LICENSE).
