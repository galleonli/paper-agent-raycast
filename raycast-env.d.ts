/// <reference types="@raycast/api">

/* 🚧 🚧 🚧
 * This file is auto-generated from the extension's manifest.
 * Do not modify manually. Instead, update the `package.json` file.
 * 🚧 🚧 🚧 */

/* eslint-disable @typescript-eslint/ban-types */

type ExtensionPreferences = {
  /** Config File Path - Path to the Paper Agent core config.yaml. */
  "configPath": string,
  /** Paper Directory - Root directory for papers (daily digest and notes). Library is stored under paper_dir/library. Maps to delivery.paper_dir. */
  "paperDir": string,
  /** Python Executable - Optional override for Python binary (defaults to .venv/bin/python3 in the Paper Agent repo). */
  "pythonPath": string,
  /** Recent Papers Limit - Maximum number of papers shown in Recent Papers (used as --limit for the list CLI). */
  "recentLimit": string,
  /** Max Papers Per Day - Maps to direction.max_papers_per_day in config.yaml. */
  "maxPapersPerDay": string,
  /** Lookback Days - Maps to direction.lookback_days (catch-up window). */
  "lookbackDays": string,
  /** Required Keywords - OR match: at least one keyword must appear in title or abstract (not all). Comma-separated; maps to direction.include_keywords. */
  "keyphrases": string,
  /** Allow Categories - Comma-separated arXiv categories to include (maps to direction.allow_categories). */
  "allowCategories": string,
  /** Deny Categories - Comma-separated categories to exclude (maps to direction.deny_categories). */
  "denyCategories": string,
  /** Exclude Keywords - Comma-separated keywords; papers matching these are excluded (maps to direction.exclude_keywords). */
  "excludeKeywords": string,
  /** Discovery Policy - Off: select by required-keyword match only (title first, then abstract). No scoring policy. */
  "policyType": "off",
  /** Enable LLM Research Summary - When on, the three options below are used to generate research summaries. When off, they are ignored. */
  "summarizeEnabled": boolean,
  /** Summary Provider - Only used when "Enable LLM research summary" is on. LLM provider (e.g. openai). */
  "summarizeProvider": string,
  /** Summary Model - Only used when "Enable LLM research summary" is on. Model name (e.g. gpt-4o-mini). */
  "summarizeModel": string,
  /** Summary Language - Only used when "Enable LLM research summary" is on. Maps to summarize.language. */
  "summarizeLanguage": "en" | "zh" | "ja" | "de",
  /** OpenAI API Key - Optional. Used for LLM summaries when set. Leave empty to use OPENAI_API_KEY from your environment. */
  "openaiApiKey": string,
  /** Enable Scholar Inbox - Toggle Google Scholar Alerts (email only). */
  "scholarEnabled": boolean,
  /** Scholar Email Provider - Email source for extension runs: imap or gmail. */
  "scholarProvider": string,
  /** Scholar IMAP Host - IMAP host for Scholar Alerts (e.g. imap.gmail.com). */
  "scholarImapHost": string,
  /** Scholar IMAP User - IMAP user / email for Scholar Alerts. */
  "scholarImapUser": string,
  /** Scholar IMAP Password Env Var - Environment variable name for IMAP password (e.g. IMAP_PASSWORD). */
  "scholarImapPasswordEnv": string,
  /** Scholar IMAP Password - Optional. If set, used as the IMAP password (env var name above). All whitespace is removed, so Google app passwords work whether pasted with or without spaces. Leave empty to use the value from your environment. */
  "scholarImapPassword": string,
  /** Scholar Gmail Label - Gmail label/mailbox to read (e.g. scholar-alerts). */
  "scholarGmailLabel": string,
  /** Scholar From Addresses - Comma-separated sender addresses to filter (e.g. scholaralerts-noreply@google.com). Empty = no filter. */
  "scholarFromAddresses": string
}

/** Preferences accessible in all the extension's commands */
declare type Preferences = ExtensionPreferences

declare namespace Preferences {
  /** Preferences accessible in the `today-papers` command */
  export type TodayPapers = ExtensionPreferences & {}
  /** Preferences accessible in the `recent-papers` command */
  export type RecentPapers = ExtensionPreferences & {}
  /** Preferences accessible in the `search-papers` command */
  export type SearchPapers = ExtensionPreferences & {}
  /** Preferences accessible in the `favorite-papers` command */
  export type FavoritePapers = ExtensionPreferences & {}
  /** Preferences accessible in the `reading-queue` command */
  export type ReadingQueue = ExtensionPreferences & {}
  /** Preferences accessible in the `run-pipeline` command */
  export type RunPipeline = ExtensionPreferences & {}
  /** Preferences accessible in the `install-daily-schedule` command */
  export type InstallDailySchedule = ExtensionPreferences & {}
  /** Preferences accessible in the `remove-daily-schedule` command */
  export type RemoveDailySchedule = ExtensionPreferences & {}
  /** Preferences accessible in the `check-run-status` command */
  export type CheckRunStatus = ExtensionPreferences & {}
  /** Preferences accessible in the `open-paper-repo` command */
  export type OpenPaperRepo = ExtensionPreferences & {}
  /** Preferences accessible in the `open-config-directory` command */
  export type OpenConfigDirectory = ExtensionPreferences & {}
}

declare namespace Arguments {
  /** Arguments passed to the `today-papers` command */
  export type TodayPapers = {}
  /** Arguments passed to the `recent-papers` command */
  export type RecentPapers = {}
  /** Arguments passed to the `search-papers` command */
  export type SearchPapers = {}
  /** Arguments passed to the `favorite-papers` command */
  export type FavoritePapers = {}
  /** Arguments passed to the `reading-queue` command */
  export type ReadingQueue = {}
  /** Arguments passed to the `run-pipeline` command */
  export type RunPipeline = {}
  /** Arguments passed to the `install-daily-schedule` command */
  export type InstallDailySchedule = {}
  /** Arguments passed to the `remove-daily-schedule` command */
  export type RemoveDailySchedule = {}
  /** Arguments passed to the `check-run-status` command */
  export type CheckRunStatus = {}
  /** Arguments passed to the `open-paper-repo` command */
  export type OpenPaperRepo = {}
  /** Arguments passed to the `open-config-directory` command */
  export type OpenConfigDirectory = {}
}

