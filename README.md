# Git CheatSite 🚀

An interactive, premium-designed visual Git cheat sheet and workflow guide. It helps developers understand how Git commands transition changes between different states: **Files (Working Directory)**, **Index (Staging Area)**, **Head (Local Repository)**, and the **Remote Repository**.

---

## 🎨 Features

- **Interactive State Transitions**: Visually trace how commands like `git add`, `git commit`, `git push`, and `git checkout` affect files across local and remote environments.
- **Workflow-Focused Navigation**: Easy-to-use navigation bar to switch between views:
  - **View All**: Full page layout with all sections.
  - **Workflow Guide**: Quick, step-by-step text-based instruction on setting up repositories and pushing changes.
  - **Main Content**: Visual interactive grid showing commands, ranges, and directions.
  - **Extras**: Extended information on advanced operations (Stash, Tag, Branching, Amend, Rebase, Recovery, Reset, and Reflog).
- **High-Quality Vector Visuals**: Clean, scale-independent SVG indicators representing states and flow directions.
- **Responsive & Modern Design**: Dark-themed, beautifully structured layout using modern CSS Grid and Flexbox techniques.

---

## 📂 Project Structure

```text
Git Cheatsite/
├── git-cheat-site-index.html  # Main entry point & HTML structure
├── style.css                  # Core layout & general style rules
├── script.js                  # Navigation logic & view switching
├── images/                    # SVG graphics & icons
│   ├── git-icon.svg
│   ├── git-vector.svg
│   ├── icon-arrow-left.svg
│   ├── icon-arrow-right.svg
│   ├── icon-circle.svg
│   ├── img-local-repo.svg
│   ├── img-remote-repo.svg
│   ├── img-staging-area.svg
│   └── img-working-directory.svg
└── other_styles/              # Modular stylesheets for layout components
    ├── style-site-footer.css
    ├── style-site-header.css
    ├── style-site-main.css
    ├── style-site-navigation.css
    ├── style-site-side-left.css
    └── style-site-side-right.css
```

---

## 🛠️ Technologies Used

- **HTML5**: Semantic markup for accessible structure.
- **CSS3 (Vanilla)**: Grid system, flexbox, variables, and responsive scaling.
- **JavaScript (ES6)**: DOM events and state manipulation for view filtering.
- **SVG**: High-resolution vector diagrams.

---

## 🚀 Getting Started

Since this is a client-side vanilla web application, no installation or build steps are required.

1. **Clone or Download** the repository to your local machine.
2. Open `git-cheat-site-index.html` directly in any web browser.
3. *Optional*: Serve the directory using a local web server (e.g. VS Code's **Live Server** extension or `npx serve`) for a local dev environment.

---

## 💡 Quick Tips

- Use **Landscape Mode** or a wider screen width for the best visualization experience.
- The **length** of each command block visually corresponds to the Git areas/stages it impacts.
- **Arrows** indicate the direction of change movement, while icons without arrows signify a command with no directional flow (like inspection or status checks).
