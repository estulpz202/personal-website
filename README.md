# Estuardo Lopez – Personal Website & Portfolio

A modern, fully responsive personal website and portfolio built with Next.js and Tailwind CSSxw. Designed to showcase my projects, skills, experience, and personal interests with a focus on professional presentation and user experience across all devices.

## 🚀 Features

- **Fully Responsive Design** - Optimized layout and interactions for all devices (mobile, tablet, desktop)
- **Project Showcase** - Detailed project pages with descriptions, technologies, and links
- **Interactive Elements** - Touch-friendly components with hover/active states for all devices
- **Resume Viewer** - Embedded PDF viewer with download option and mobile-friendly preview
- **Life Section** - Personal interests and background that showcases who I am beyond code
- **Subtle Animations** - Carefully applied animations for improved user experience
- **Consistent Design System** - Thoughtful typography, spacing, and color usage throughout
- **SEO Optimized** - Meta tags and structured data for better search visibility
- **Accessibility** - Keyboard navigation support and proper semantic HTML

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org) (App Router)
- **UI**: [React](https://react.dev)
- **Styling**: [Tailwind CSS](https://tailwindcss.com)
- **Language**: [TypeScript](https://www.typescriptlang.org)
- **Code Quality**:
  - [Prettier](https://prettier.io) for consistent formatting
  - [ESLint](https://eslint.org) for code quality
- **Performance**:
  - Optimized image loading with Next.js Image component
  - Responsive image sizing and lazy loading
  - Conditional rendering for different device sizes
- **Deployment**: [Vercel](https://vercel.com)

## 🧰 Development Commands

| Command               | Description                 |
| --------------------- | --------------------------- |
| `npm run dev`         | Start development server    |
| `npm run dev:network` | Start dev server on network |
| `npm run build`       | Build for production        |
| `npm run start`       | Start production server     |
| `npm run lint`        | Run ESLint                  |
| `npm run format`      | Run Prettier to format code |

## 📂 Project Structure

```plaintext
public/               # Static assets (images, resume PDF)
src/
├── app/              # Next.js App Router pages
│   ├── about/        # Professional background
│   ├── contact/      # Contact information
│   ├── life/         # Personal interests and background
│   ├── projects/     # Project showcase
│   │   └── [slug]/   # Dynamic project detail pages
│   ├── resume/       # Resume viewer
│   ├── icon.ico      # Site favicon
│   ├── globals.css   # Global styles and variables
│   ├── layout.tsx    # Root layout with header/footer
│   ├── not-found.tsx # 404 page
│   └── page.tsx      # Home page
└── components/       # Reusable React components
    ├── about/        # About page components
    ├── common/       # Shared UI components
    ├── contact/      # Contact page components
    ├── home/         # Home page components
    ├── layout/       # Layout components (header, footer)
    ├── life/         # Life page components
    ├── projects/     # Project components
    │   └── proj/     # Project detail components
    ├── skills/       # Skills display components
    └── ui/           # Base UI components (buttons, icons)
```

## 📱 Responsive Design Approach

The site implements a systematic responsive design approach:

- **Mobile-first** with progressive enhancement for larger screens
- **Consistent breakpoints** using Tailwind's sm, md, lg, xl system
- **Adaptive layouts** that change structure based on screen size
- **Touch-optimized** with active states matching hover effects
- **Optimized images** with appropriate sizing and cropping for each device
- **Precise spacing** using a graduated system that scales with screen size

## 🚀 Deployment

This site is deployed on [Vercel](https://vercel.com) with continuous deployment from the main branch.

## 📧 Contact

If you have any questions or feedback, feel free to reach out:

- Email: [elopezle@andrew.cmu.edu](mailto:elopezle@andrew.cmu.edu)
- LinkedIn: [linkedin.com/in/estuardo-lopez-letona](https://www.linkedin.com/in/estuardo-lopez-letona)
- GitHub: [github.com/estulpz202](https://github.com/estulpz202)
