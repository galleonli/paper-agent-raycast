## Paper Agent Raycast Extension

This repository contains the Raycast extension only. It requires the [Paper Agent core](https://github.com/galleonli/paper-agent) to be installed separately.

### 1) Install Paper Agent core first

Install and configure the core project:

- **GitHub:** https://github.com/galleonli/paper-agent

You need a valid `config.yaml` and a working Python environment (e.g. `.venv` with `paper_agent` installed) before using this extension.

**One-line bootstrap** (clone, venv, install, copy config):

```bash
git clone https://github.com/galleonli/paper-agent.git && cd paper-agent && python3 -m venv .venv && .venv/bin/pip install -r requirements.txt && cp config.example.yaml config.yaml
```

Then edit `config.yaml` and set **Config file path** and **Paper directory** in the extension Preferences to point to this install.

### 2) Install this extension

- **From Raycast Store:** install “Paper Agent” from the store.
- **Local development:** clone this repo, run `npm install` and `npm run dev`.
- **Publish to store:** run `npm run publish`.

### 3) Configure Raycast Preferences

In **Raycast → Extensions → Paper Agent → Preferences**, set:

- **Config file path** — full path to the core `config.yaml` (e.g. `/path/to/paper-agent/config.yaml`)
- **Paper directory** — your `delivery.paper_dir` (where notes and `library/` live)
- **Python executable** — optional; leave empty to use `<core>/.venv/bin/python3`

### Core not found

If the extension cannot detect the core (wrong paths, missing config, or `paper_agent` not runnable), it shows **Core not found** with a link to the core repo and a **Copy bootstrap command** action. Paste the copied command into a terminal to install the core, then set Preferences again. If you have already set **Config file path**, an **Open Config Directory** action is also shown to open the folder containing `config.yaml` in Finder.

### Opening folders

- **Open Paper Directory** — opens the configured paper directory (where notes and `library/` live).
- **Open Config Directory** — opens the folder that contains your `config.yaml` (the core repo root). Also available as an action in the **Run Paper Agent** “Core not found” view and in **Check Run Status** when Config file path is set.
