# Manoj Dada Portfolio Redesign

This project has been redesigned using React + Vite.

## Setup Instructions

1.  **Install Dependencies:**
    Open your terminal in this directory and run:
    ```bash
    npm install
    ```

2.  **Move Assets:**
    For the site to build correctly, please move the original static assets (images, PDFs) into the `public` folder or ensure they are imported correctly.
    -   Move `resume.pdf` to the `public/` folder.
    -   Images are currently imported from the root in the code, but for a cleaner project, you might want to move them to `src/assets` or `public` and update the imports.

3.  **Run Development Server:**
    ```bash
    npm run dev
    ```

4.  **Build for Production:**
    ```bash
    npm run build
    ```

## Project Structure

-   `src/components`: Reusable UI components (Navbar, etc.)
-   `src/pages`: Page components (Home, Research, etc.)
-   `src/index.css`: Global styles and variables
-   `vite.config.js`: Vite configuration

## Legacy Files
The old HTML/CSS files are still in the root directory (or `_legacy` if the move command worked). You can delete them once you are happy with the React version.