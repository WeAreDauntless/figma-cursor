---
allowed-tools: WriteToFile, ReadFiles, Bash(date:*)
argument-hint: [title] [--local] [--todo] [--think-about|--think-hard|--think-deeply]
description: Create a markdown note or append to todos list
---

# Create Note or Todo

## Context

- Current date and time: !`date '+%Y-%m-%d %H:%M:%S'`
- Short date and time for todos: !`date '+%Y-%m-%d %H:%M'`

## Instructions

**FIRST**: Check if `--todo` flag is present in `$ARGUMENTS` to determine the mode.

---

## TODO MODE (if --todo in $ARGUMENTS)

### Critical Rules for Todo Mode

When `--todo` flag is present in `$ARGUMENTS`:

1. **File location**: ALWAYS use `.notes/.local/todos.md` (ignore all other location flags)
2. **Action**: APPEND to existing file (create if doesn't exist)
3. **DO NOT solve, explain, or provide solutions**
4. **DO NOT write implementation details or code**
5. **ONLY capture what needs to be done later**

### Todo Process

1. Ensure `.notes/.local/` directory exists
2. Read existing `.notes/.local/todos.md` if it exists
3. Extract the todo description from `$ARGUMENTS` (everything that is not a flag)
4. Format the user's prompt as a clear, concise todo item
5. Include any @ file references from the conversation
6. Use the short date/time from context for the timestamp
7. Append to the file (preserve all existing content)

### Todo Format

Each todo should be appended in this format:

## [YYYY-MM-DD HH:MM] Todo Title

[Clear, formatted description of what needs to be done - NO solutions or explanations]

**References:**

- [any @ file references]
- [any relevant context from the conversation]

---

## NOTE MODE (if --todo NOT in $ARGUMENTS)

### Note Specifications

Create a new markdown note with the following specifications:

1. **Title**: Use `$1` as the note title (slugified for filename)
2. **Location**:
   - Default: `.notes/` directory
   - If `--local` in `$ARGUMENTS`: `.notes/.local/` directory
3. **Thinking mode**: Check `$ARGUMENTS` for:
   - `--think-about`: Use standard thinking
   - `--think-hard`: Use extended thinking
   - `--think-deeply`: Use deep extended thinking
4. **Content**: Include any file references, code blocks, or pasted content from the conversation context

### Note Structure

The note should have this frontmatter (in YAML format) using the full date/time from context:

---

title: [note title]
created: [YYYY-MM-DD HH:MM:SS from context]
updated: [YYYY-MM-DD HH:MM:SS from context]

---

### Filename Format

- Slugify the title (lowercase, hyphens for spaces)
- Format: `YYYY-MM-DD-[slugified-title].md`
- Example: `2025-10-01-my-project-notes.md`
- Use the date portion from the context date/time

### Note Process

1. Parse `$ARGUMENTS` to determine:
   - Note title from `$1`
   - Location (check for `--local` in `$ARGUMENTS`)
   - Thinking mode (check `$ARGUMENTS` for thinking flags)
2. Create the appropriate directory if it doesn't exist
3. Generate the filename with current date from context
4. Create the note with frontmatter (using context date/time) and content
5. Include any referenced content from @ mentions or pasted text in the conversation

---

## Usage Examples

### Todo Examples

Simple todo (no title needed, just description):
/note --todo "Fix the authentication bug in login flow"

Todo with file reference:
@auth.js
/note --todo "Refactor authentication to use new OAuth flow"

Todo with multiple references:
@config.js @auth.js
/note --todo "Update configuration to support new auth system"

### Regular Note Examples

Basic note in .notes/:
/note "Meeting Summary"

Local note in .notes/.local/:
/note "Personal Ideas" --local

Note with thinking mode:
/note "Complex Analysis" --think-hard

Combined flags:
/note "Deep Research" --local --think-deeply

With file reference:
@data.json
/note "Data Analysis" --think-about

---

## Summary

- **--todo**: Appends formatted task to `.notes/.local/todos.md` (NO solutions, just capture the task). Uses short date format from context.
- **No --todo**: Creates new dated note file with full content. Uses full date/time format from context.
- **--local**: Stores note in `.notes/.local/` instead of `.notes/` (ignored if --todo is used)
- **--think-about/hard/deeply**: Applies thinking mode to note creation
- **$1**: First argument is the note title (used for filename in note mode)
- **$ARGUMENTS**: All arguments passed to the command (used to detect flags like --todo, --local, --think-\*)
