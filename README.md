# Task Manager Web Application

A simple, responsive task management web app built with **HTML, CSS, and JavaScript**. It lets users add, edit, delete, and track tasks, with all data saved locally in the browser so tasks persist even after refreshing or closing the page.

## Features

- **Add Tasks** — quickly create new tasks
- **Edit Tasks** — update existing task details
- **Delete Tasks** — remove tasks that are no longer needed
- **Mark Complete / Pending** — toggle a task's status with one click
- **Search** — find tasks quickly by typing keywords
- **Status Filtering** — view tasks by All, Pending, or Completed
- **Stats Counter** — see a live count of total, pending, and completed tasks
- **Dark Mode Toggle** — switch between light and dark themes
- **Local Storage Persistence** — tasks are saved in the browser's localStorage, so your task list stays intact even after closing the tab

## Tech Stack

- **Frontend:** HTML, CSS, JavaScript (vanilla, no frameworks or libraries)
- **Data Persistence:** Browser localStorage — no backend or database required

## Project Structure

```
TaskManager/
├── index.html      # App structure and layout
├── style.css        # Styling, including dark mode theme
└── script.js         # App logic — add/edit/delete tasks, filtering, search, localStorage handling
```

## Running Locally

1. Clone the repository:

   git clone https://github.com/bristichowdhury87-creator/Task_Manager.git

2. Open the project folder and simply open `index.html` in your browser.

That's it — no build steps, no server, no dependencies to install. Since everything runs in the browser and saves to localStorage, it works entirely offline once loaded.

## What I Learned

Building this project helped me get hands-on with core DOM manipulation — dynamically creating, updating, and removing elements on the page — along with using the browser's localStorage API to persist data without needing a backend. It also involved building filtering and search logic entirely in JavaScript.
