## Paper Agent Raycast Extension

This repository contains the Raycast extension only.

### 1) Install Paper Agent core first

Install and configure the core project from GitHub:

- https://github.com/galleonli/paper-agent

You should have a valid core `config.yaml` and a working Python environment before using this extension.

### 2) Install this extension

- For local development: run `npm install` and `npm run dev`.
- For store release: run `npm run publish`.

### 3) Configure Raycast Preferences

In Raycast -> Extensions -> Paper Agent -> Preferences, set:

- `Config file path` -> full path to the core `config.yaml`
- `Paper directory` -> your `delivery.paper_dir` directory
- `Python executable` -> optional override (leave empty to use `<core>/.venv/bin/python3`)
