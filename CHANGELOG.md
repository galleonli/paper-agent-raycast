# Paper Agent Changelog

## [Maintenance] - {PR_MERGE_DATE}

- Update to Raycast API 2.6.3 and Node.js 22.22.2 for development and CI.
- Show core and library errors separately from empty results, with actions to open preferences and retry.
- Trim Python paths consistently, cancel superseded searches, and add timeouts for core checks and library queries.
- Allow library responses up to 8 MiB and report invalid CLI output.
- Preserve the clipboard when schedule installation cannot find the core.
- Add offline regression checks and a distribution build to CI.

## [Initial Release] - {PR_MERGE_DATE}

- **Run & automation:** Run Paper Agent pipeline (fetch, filter, summarize, deliver); Install / Remove Daily Schedule (launchd 04:00 + catch-up); Check Run Status (schedule, today’s result, last run metadata).
- **Browse & search:** Today Papers and Recent Papers with detail view; Search Papers across your local library.
- **Workflow:** Favorite Papers and Reading Queue (local storage); Open Paper Directory; Open Config Directory.
- **List actions:** Open paper/note, related papers, mark read/unread, add to favorites, add to reading queue.
- **Preferences:** Config file path, paper directory, Python executable; direction, summarize, and sources overrides (runtime config from Preferences; shared settings from core `config.yaml`).
