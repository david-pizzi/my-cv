# 📄 David Pizzi - Interactive CV Website

A modern, responsive CV website showcasing Azure architecture, software engineering, and AI expertise with built-in PDF export functionality.

## ✨ Features

- **📱 Fully Responsive** - Looks great on desktop, tablet, and mobile devices
- **🎨 Modern Design** - Clean, professional layout with smooth animations
- **📄 PDF Export** - One-click PDF generation using browser print functionality
- **⌨️ Keyboard Shortcuts** - Press `Ctrl/Cmd + P` to quickly export
- **🎯 Print-Optimized** - Special CSS styling for high-quality PDF output
- **♿ Accessible** - ARIA labels and semantic HTML
- **⚡ Fast & Lightweight** - No external dependencies, pure HTML/CSS/JS

## 🚀 Quick Start

### Option 1: Open Directly
Simply open `index.html` in your web browser by double-clicking the file.

### Option 2: Local Server (Recommended)
For the best experience, use a local development server:

**Using Python:**
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

**Using Node.js (if you have npm):**
```bash
npx http-server
```

**Using VS Code:**
- Install the "Live Server" extension
- Right-click on `index.html` and select "Open with Live Server"

Then navigate to `http://localhost:8000` in your browser.

## 📝 Customization

### Update Your Information

1. **Personal Details** - Edit the header section in `index.html`:
   ```html
   <h1 class="name">Your Name</h1>
   <p class="title">Your Job Title</p>
   ```

2. **Contact Information** - Update email, phone, LinkedIn, and GitHub links:
   ```html
   <a href="mailto:your.email@example.com">your.email@example.com</a>
   ```

3. **Professional Summary** - Modify the summary text to describe your background.

4. **Experience** - Add/remove/edit job positions:
   - Update position titles, company names, dates, and locations
   - Modify responsibilities and achievements
   - Change technology tags

5. **Skills** - Customize skill categories and technologies:
   - Edit skill categories (Languages, Frontend, Backend, etc.)
   - Add/remove skill badges

6. **Education** - Update your educational background.

7. **Projects** - Showcase your best work with descriptions and tech stacks.

8. **Certifications** - Add your professional certifications.

### Customize Colors

Edit the CSS variables in `styles.css`:
```css
:root {
    --primary-color: #2563eb;      /* Main theme color */
    --primary-dark: #1e40af;       /* Darker shade */
    --text-primary: #1f2937;       /* Main text color */
    --text-secondary: #6b7280;     /* Secondary text */
}
```

### Change Background Gradient

Edit the body background in `styles.css`:
```css
body {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
```

## 📄 Generating PDF

### Method 1: Print Button
Click the "Export PDF" button in the top-right corner of the page.

### Method 2: Keyboard Shortcut
Press `Ctrl + P` (Windows/Linux) or `Cmd + P` (Mac).

### Method 3: Browser Menu
Use your browser's print function (File → Print).

### PDF Export Tips

For the best PDF quality:
1. In the print dialog, select "Save as PDF" as the destination
2. Choose "A4" or "Letter" paper size
3. Set margins to "Default" or "Minimum"
4. Enable "Background graphics" for colors
5. Disable "Headers and footers"

## 📂 File Structure

```
my-cv/
├── index.html          # Main HTML structure
├── styles.css          # All styling and print optimizations
├── script.js           # Interactivity and PDF export
├── .gitignore          # Git exclusions (CVs folder)
├── CVs/                # Generated PDFs (not tracked in git)
└── README.md           # This file
```

## 🎨 Sections Included

- **Header** - Contact details with GitHub (personal and Capgemini) profiles
- **Impact Metrics** - 20 years experience, 9 Microsoft certifications, SC security clearance, Ph.D.
- **Executive Summary** - Azure architecture, AI/DevSecOps, regulated environments expertise
- **Professional Experience**
  - Capgemini (2021-Present) - Multiple roles from Senior to Principal Engineer
  - Freelance (2017-2021) - Azure solutions and React development
  - Airbus Defence & Space (2014-2017) - Senior Software Architect
  - Previous roles at BAE Systems, University of Sussex, University College London
- **Technical Skills** - Cloud, DevSecOps, AI, development organized by category
- **Education** - Ph.D. and M.Sc. in Computer Science
- **Microsoft Certifications** - 9 certifications including 3x Expert level
- **Academic Publications** - Research papers with citation metrics

## 🛠️ Technical Details

- **Pure HTML/CSS/JavaScript** - No frameworks or dependencies required
- **Google Fonts** - Using Inter font family
- **Responsive Design** - Mobile-first approach with breakpoints
- **Print CSS** - Optimized `@media print` rules for PDF export
- **Smooth Animations** - Intersection Observer API for scroll effects
- **Accessibility** - Semantic HTML and ARIA labels

## 🌐 Browser Compatibility

- ✅ Chrome/Edge (Recommended for PDF export)
- ✅ Firefox
- ✅ Safari
- ✅ Opera

## 📱 Responsive Breakpoints

- **Desktop**: > 768px
- **Tablet/Mobile**: ≤ 768px

## 🎯 Showcasing Professional Profile

This CV website highlights:
- **20+ years** software engineering and architecture experience
- **Azure cloud expertise** with 9 Microsoft certifications (3x Expert)
- **Applied AI leadership** with GitHub Copilot, Azure OpenAI, and AI Agent Foundry
- **DevSecOps** and platform engineering across regulated environments
- **SC security clearance** for sensitive government work
- **Academic credentials** - Ph.D. in Computer Science
- **Research impact** - Published papers with 400+ citations
- Clean, semantic HTML structure and modern responsive design
- Print media queries for professional PDF generation

## 🚀 Deployment Options

### GitHub Pages
1. Create a new repository
2. Push your files
3. Go to Settings → Pages
4. Select main branch as source
5. Your site will be live at `https://yourusername.github.io/repo-name`

### Netlify
1. Drag and drop your folder to [Netlify Drop](https://app.netlify.com/drop)
2. Get instant deployment with HTTPS

### Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in your project folder
3. Follow the prompts

## 📞 Need Help?

- Check browser console for any JavaScript errors
- Ensure all files are in the same directory
- Test PDF export in Chrome for best results
- Validate HTML at [W3C Validator](https://validator.w3.org/)

## 📄 License

This is David Pizzi's personal CV. Template structure may be adapted for personal use.

---

**David Pizzi** | Senior Software Engineer | Azure Architect | Delivery Lead

Last updated: January 2026
