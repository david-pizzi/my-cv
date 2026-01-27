# David Pizzi - Interactive CV

A modern, professional CV website designed for easy sharing and seamless PDF download. This digital portfolio provides a comprehensive view of my professional experience, technical expertise, and career achievements in an accessible, always up-to-date format.

## Why a Web-Based CV?

Traditional CVs become outdated the moment they're shared. This website solves that problem by serving as a single source of truth—always current, always accessible, and instantly shareable via a simple URL. Whether you're a recruiter, hiring manager, or potential collaborator, you'll always have access to my latest professional information.

## Features

- **Responsive Design** - Optimised for any device: desktop, tablet, or mobile
- **Professional Layout** - Clean, modern styling with thoughtful animations
- **Instant PDF Export** - Download a print-ready version with one click
- **Print-Optimised** - Carefully crafted CSS ensures high-quality PDF output
- **Automated PDF Generation** - Every update automatically produces a fresh downloadable PDF

## Hosting

Hosted on [GitHub Pages](https://pages.github.com/) for fast, reliable access worldwide.

## Automated PDF Generation

A [GitHub Actions workflow](.github/workflows/generate-pdf.yml) ensures the downloadable PDF stays in sync with the website. Whenever changes are pushed to the `main` branch:

- The workflow triggers automatically on updates to the core files
- Puppeteer renders the page exactly as it appears in the browser
- A fresh PDF is generated and committed to the repository

No manual steps required—the PDF is always current.

## Built With

This project was created using [GitHub Copilot](https://github.com/features/copilot), demonstrating the power of AI-assisted development for rapid, high-quality web development.
