# Estuardo Lopez – Personal Website & Portfolio

A modern, responsive personal website and portfolio built with Next.js and Tailwind CSS. Designed to showcase my projects, skills, experience, and provide professional contact information.

## 🚀 Features

- **Project Showcase** - Detailed project pages with descriptions and links
- **Resume Viewer** - Embedded PDF viewer with download option
- **Animations** - Subtle animations for improved user experience
- **SEO Optimized** - Meta tags and structured data for better search visibility
- **Accessibility** - Keyboard navigation support

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org) (App Router)
- **UI**: [React](https://react.dev)
- **Styling**: [Tailwind CSS](https://tailwindcss.com)
- **Language**: [TypeScript](https://www.typescriptlang.org)
- **Code Quality**:
  - [Prettier](https://prettier.io) for consistent formatting
  - [ESLint](https://eslint.org) for code quality
- **Performance**: Optimized image loading with Next.js Image component
- **Deployment**: [Vercel](https://vercel.com) (Planned)

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

```
public/               # Static assets (images, resume PDF)
src/
├── app/              # Next.js App Router pages
│   ├── about/
│   ├── contact/
│   ├── life/
│   ├── projects/
│   │   └── [slug]/
│   ├── resume/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
└── components/       # Reusable React components
    ├── about/
    ├── common/
    ├── home/
    ├── layout/
    ├── projects/
    │   └── proj/
    ├── skills/
    └── ui/
```

## 🚀 Deployment

This site will be deployed on [Vercel](https://vercel.com) with continuous deployment from the main branch.

## 📧 Contact

If you have any questions or feedback, feel free to reach out

- Email: [elopezle@andrew.cmu.edu](mailto:elopezle@andrew.cmu.edu)
- LinkedIn: [linkedin.com/in/estuardo-lopez-letona](https://www.linkedin.com/in/estuardo-lopez-letona)
- GitHub: [github.com/estulpz202](https://github.com/estulpz202)
