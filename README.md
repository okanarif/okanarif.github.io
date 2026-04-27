# Personal Website - Okan Arif Güvenkaya

Modern, responsive, and professional personal website showcasing research, projects, publications, and experience in robotics and autonomous systems.

## Features

- 🎨 **Modern Design**: Clean, professional UI with gradient accents and smooth animations
- 📱 **Fully Responsive**: Works perfectly on desktop, tablet, and mobile devices
- 🚀 **Fast Loading**: Lightweight HTML/CSS/JS with CDN-hosted libraries
- 🎯 **Sections Included**:
  - Home (Introduction & Research Focus)
  - About Me (Academic Background & Motivation)
  - Research (Detailed Research Experiences)
  - Publications (IEEE IECON 2024 Paper)
  - Projects (8 Major Projects)
  - Experience (Industry & Teaching)
  - Skills (Technical & Soft Skills)
  - CV Download
  - Contact Information

## Technologies Used

- **HTML5**: Semantic markup
- **Tailwind CSS**: Utility-first CSS framework (via CDN)
- **JavaScript**: Vanilla JS for interactions
- **Font Awesome**: Icons
- **Google Fonts**: Inter font family

## Getting Started

### Prerequisites

No installation required! Just a web browser.

### Running Locally

1. Clone or download this repository
2. Open `index.html` in your web browser
3. That's it!

Alternatively, you can serve it with a simple HTTP server:

```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000

# Node.js (if you have http-server installed)
npx http-server
```

Then visit `http://localhost:8000` in your browser.

## Customization Guide

### 1. Update Personal Information

Open `index.html` and search for the following to update:

- **Name**: Search for "Okan Arif Güvenkaya"
- **Email**: Search for "your.email@example.com"
- **Social Media Links**: Update the `href` attributes in the Home section and Contact section
  - Google Scholar
  - GitHub
  - LinkedIn

### 2. Add Your Profile Photo

**IMPORTANT:** Your profile photo is displayed in both the Home section and About Me section.

1. Prepare your photo:
   - Use a professional headshot or biometric-style photo
   - Recommended size: 500x500 pixels or larger (square format)
   - Format: JPG, PNG, or WebP
   - File name: `profile.jpg` (or `profile.png`)

2. Place your photo:
   - Copy your photo to the `/home/okanarif/repositories/personalWebPage/` directory
   - Make sure the filename is exactly `profile.jpg` (or update the filename in `index.html`)

3. If using a different filename:
   - Open `index.html`
   - Find `src="profile.jpg"` (appears twice - in Home and About sections)
   - Replace with your actual filename: `src="your-photo-name.jpg"`

### 3. Update Research & Projects

- Research experiences are in the `#research` section
- Projects are in the `#projects` section
- Each has a card structure that you can duplicate and modify

### 4. Add Your CV

1. Place your CV PDF file in the same directory as `index.html`
2. Update the CV download link:

```html
<a href="your-cv-filename.pdf" download class="...">
```

### 5. Update Publication Links

In the Publications section, update the placeholder links:

```html
<a href="link-to-your-paper.pdf" class="...">PDF</a>
<a href="link-to-bibtex.txt" class="...">BibTeX</a>
```

### 6. Add Project Links

Update the project video/report/GitHub links throughout the Projects section:

```html
<a href="https://github.com/yourusername/project" class="...">GitHub</a>
<a href="link-to-video.mp4" class="...">Video</a>
```

### 7. Change Color Scheme

The website uses a purple/indigo gradient theme. To change colors:

- **Primary Gradient**: Search for `#667eea` and `#764ba2` and replace with your preferred colors
- **Tailwind Colors**: Replace `purple-600`, `indigo-600`, etc. with other Tailwind color variants like `blue-600`, `green-600`, etc.

## Deployment

### GitHub Pages

1. Create a GitHub repository
2. Push this code to the repository
3. Go to Settings → Pages
4. Select the branch and folder containing `index.html`
5. Your site will be live at `https://yourusername.github.io/repository-name/`

### Netlify

1. Sign up at [Netlify](https://www.netlify.com/)
2. Drag and drop the website folder
3. Your site will be live instantly with a custom URL

### Vercel

1. Sign up at [Vercel](https://vercel.com/)
2. Import your GitHub repository
3. Deploy with one click

## Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers

## Features in Detail

### Smooth Scrolling
Click any navigation link for smooth scroll to sections

### Active Navigation
Navigation highlights the current section while scrolling

### Mobile Menu
Responsive hamburger menu for mobile devices

### Hover Effects
Cards, buttons, and links have smooth hover animations

### Fade-in Animations
Content fades in as you scroll down the page

## License

This is a personal website template. Feel free to use it for your own personal website!

## Contact

For questions or suggestions about this template:
- Update with your contact information after customization

---

Built with ❤️ for the robotics research community

