---
description: Create a new App Detail Page based on the Master Template
---

This workflow describes the process for creating a new detailed service page for a TENSOR App.

1.  **Duplicate the Template**:
    -   Copy the content of `app-detail.html`.
    -   Create a new file named `[app-name-kebab-case].html` (e.g., `cs-ai-assistant.html`).

2.  **Update Content (Hero Section)**:
    -   `title` tag: Update to `[App Name] - TENSOR Apps`.
    -   `app-badge` (Category): Change text to match the app category (e.g., AI Chatbot).
    -   `app-badge` (Status): Update if needed (e.g., Live Service, Beta, Coming Soon).
    -   `icon-box-large`: Change the Lucide icon name (data-lucide="...") to a relevant icon.
    -   `app-headline`: Update with the full App Name.
    -   `app-subheadline`: Write a compelling 2-line value proposition.
    -   `primary-cta`: Update button text if specific action is needed.
    -   `app-preview-image`: Update `src` with a relevant placeholder or screenshot URL.

3.  **Update Content (Features Section)**:
    -   Update the 3 `feature-item` blocks.
    -   For each feature: Select a new icon, update the title, and write a brief description.

4.  **Update Content (How It Works)**:
    -   Update the 3 steps in `.step-list` to reflect the specific process of this app.

5.  **Link to Apps Page**:
    -   Open `apps.html`.
    -   Locate the specific card for this app.
    -   Update the `href` of the "View Details" link to point to the new file created in Step 1.

6.  **Verify**:
    -   Ensure the navigation links (About, Apps, Contact) work correctly.
    -   Check that styles are correctly loaded (using `styles.css?v=4`).
