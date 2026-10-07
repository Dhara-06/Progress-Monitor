# LearnLog user guide

LearnLog is a personal learning journal that runs in your browser. You log what you studied, then review it in the diary, calendar, progress chart, notes, and journey timeline.

There is no account and no sign-in. Everything you save stays in this browser on this computer. Clearing site data, or opening the app in another browser, starts from an empty journal.

The name in the sidebar (**Jordan Lee**) and the greeting (**Sunflower**) are part of the screen. They cannot be changed.

## Open the app

1. In the project folder, run `npm install` the first time.
2. Run `npm run dev`.
3. Open [http://localhost:5173/](http://localhost:5173/) in your browser.

The left sidebar is always available:

| Sidebar item | What it is for |
| --- | --- |
| Overview | Home. Totals, recent entries, and a greeting. |
| My diary | Full list of learning entries. Search, edit, and delete. |
| Calendar | Month view. Days with an entry can be opened. |
| Progress | Total minutes and a chart of learning time. |
| Knowledge notes | Short notes that are separate from diary entries. |
| My journey | Milestones on a timeline. |
| New entry | Opens the diary form from any page. |
| Light mode / Dark mode | Switches the theme. The choice is remembered. |

**Settings** in the sidebar is a label only. It does not open a page.

The top of every page shows today’s date, the page title, and another **New entry** button.

## A full session, start to finish

Use this order the first time.

1. Open **Overview**.
2. Click **Add today's progress** (or **New entry**).
3. Fill in the diary form and click **Save entry**. The form closes and the new entry appears at the top of your journal.
4. On **Overview**, check the four totals and the **Recent entries** list. Click the card to open the full entry.
5. Open **My diary** to search, edit, or delete entries.
6. Open **Calendar** and click a marked day to jump back to that entry.
7. Open **Progress** to see total minutes and the chart.
8. Open **Knowledge notes**, create a note, write it, and click **Save note**.
9. Open **My journey**, add a milestone, and click **Save milestone**.
10. Use **Dark mode** or **Light mode** if you want a different look. Leave the tab open or close it. Your data remains in this browser.

## New or edit a diary entry

The form title is **New diary entry** or **Edit entry**.

| Field | Required | How to use it |
| --- | --- | --- |
| Date | Yes | The day this learning belongs to. Defaults to today. |
| Learning time (minutes) | Yes | How long you studied. Defaults to 30. Use 0 or more. |
| Title | Yes | A short name, such as “React router”. |
| Topics (comma separated) | No | Example: `Coding, reading`. Each topic becomes a tag. |
| What did you learn? | No | The main note. This text is the preview on cards. |
| What did you work on? | No | The task or project. |
| What did you accomplish? | No | What you finished. |
| What do you understand? | No | What is clear now. |
| What was difficult? | No | What blocked you. |
| What did you discover? | No | A surprise or new idea. |
| Thoughts | No | Anything else you want to remember. |
| Productivity (1–5) | No | Drag the slider. Defaults to 3. |
| Checklist | No | Type a task, then click **Add** or press Enter. Check a box to mark it done. Click **×** to remove a task. |

Click **Save entry** to keep it. Click **Cancel** or the **×** to close without saving that form.

Empty reflection boxes are skipped on the entry page. Only boxes you filled in are shown.

## Overview

Page title: **Your learning overview**.

- The banner greets you and offers **Add today's progress**, which opens a new diary entry.
- **Current streak** counts consecutive days that have an entry, counting backward from today. If today has no entry, the streak is 0.
- **Learning time** is the sum of minutes on every entry.
- **Entries logged** is how many diary entries you have.
- **Avg productivity** is the average of the 1–5 slider across all entries.
- **Recent entries** shows the three newest cards. **View all →** goes to **My diary**. Click a card to open that entry.
- **Focus goals** looks for saved goals. This app has no screen for creating goals, so this box stays on **No goals yet**. **Manage →** opens **My journey**, where you add milestones instead.

If you have no entries yet, the page shows **Create your first entry**.

## My diary

Page title: **My learning diary**.

- **+ New entry** opens the form.
- **Search your diary...** filters by title, topics, and any of the reflection boxes. The count next to the search shows how many entries match.
- Each row is a card plus two icon buttons:
  - Pencil opens that entry in the form.
  - Trash deletes that entry immediately. There is no confirmation on this page.
- Click the card (not the icons) to open the full entry.

If the search matches nothing, the page says to try another search. Clearing the search box shows the full list again.

## Entry details

Open an entry from **Overview**, **My diary**, or **Calendar**.

The page shows the title, topics, date, minutes, productivity, each reflection you filled in, the checklist, and topic tags.

- **Back** returns to the previous page.
- **Edit entry** opens the form with this entry’s values. Saving updates the same entry.
- **Delete** asks **Delete this entry?** If you confirm, the entry is removed and you land on **My diary**.

If the link does not match a saved entry, the page says **Entry not found.**

## Calendar

Page title: **Learning calendar**.

- **←** and **→** move one month at a time.
- Days run Sunday through Saturday.
- A day with at least one entry is highlighted and can be clicked. That opens the entry for that date.
- Days with no entry cannot be clicked.
- If more than one entry shares the same date, the calendar opens the oldest one stored for that date. Use **My diary** to reach the others.

## Progress

Page title: **Your progress**.

- **Total learning time** is every entry’s minutes added together.
- The line under it is the number of journal entries.
- **Learning minutes by day** charts minutes per date. If several entries share a date, their minutes are added into one point. The chart shows up to the 14 most recent dates that have entries. Hover a point to see the minutes.
- With no entries, the page says **No activity yet**.

## Knowledge notes

Page title: **Knowledge notes**.

Notes are separate from diary entries. They are for ideas, quotes, and discoveries you do not want mixed into a daily log.

1. Click **+ New note** (or **Create a note** on the empty page).
2. A blank note titled **Untitled note** appears in the left list and opens for editing. Its category label is **Ideas**. There is no control to change the category.
3. Type a title and the body.
4. Click **Save note**. Until you save, a refresh can keep the empty note and lose unsaved typing in the boxes.
5. Click a note in the list to edit it again, change the text, then click **Save note**.
6. **Delete** asks **Delete this note?** Confirm to remove it.

After a save, the title and body are locked until you click that note in the list again.

## My journey

Page title: **My learning journey**.

Use this for milestones: a course finished, a first project, a decision, or any moment you want on a timeline. The number on the banner is how many milestones you have.

1. Click **+ Add milestone**.
2. Enter a title, pick a date (it starts as today), and describe what happened.
3. Click **Save milestone**. The form closes and the milestone appears on the timeline.
4. **Edit** on a milestone reopens the same form. Change it and click **Save milestone** again.
5. **Delete** asks **Delete this milestone?** Confirm to remove it.

Milestones do not change the streak, the minutes total, or the progress chart. Those come only from diary entries.

## What is saved, and where

| You create | Saved as | Shows up on |
| --- | --- | --- |
| Diary entry | This browser | Overview, My diary, Calendar, Progress, Entry details |
| Knowledge note | This browser | Knowledge notes |
| Milestone | This browser | My journey |
| Light or dark theme | This browser | The whole app |

Nothing is sent to a server. To start over, clear this site’s local storage in the browser, then reload the page.
