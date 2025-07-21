# Gaming Landing Website

A modern React + Vite website featuring animated hero sections, GSAP scroll effects, and custom fonts. Styled with Tailwind CSS and designed for creative gaming experiences.

## Features

- **React 18** with [Vite](https://vitejs.dev/) for fast development and HMR.
- **GSAP** animations and scroll triggers.
- **Tailwind CSS** for utility-first styling.
- **Custom fonts** loaded from `/public/fonts`.
- **Responsive design** and creative layouts.
- **ESLint** and Prettier for code quality.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

```sh
npm install
```

### Development

```sh
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build

```sh
npm run build
```

### Preview Production Build

```sh
npm run preview
```

## Project Structure

```
├── public/
│   ├── fonts/           # Custom font files
│   ├── img/             # Images
│   ├── audio/           # Audio files
│   └── videos/          # Video files
├── src/
│   ├── components/      # React components
│   ├── App.jsx          # Main app component
│   ├── main.jsx         # Entry point
│   ├── index.css        # Global styles
│   └── App.css          # App-specific styles
├── index.html           # HTML template
├── tailwind.config.js   # Tailwind configuration
├── postcss.config.js    # PostCSS configuration
├── vite.config.js       # Vite configuration
├── eslint.config.js     # ESLint configuration
├── package.json         # Project metadata and scripts
└── README.md            # Project documentation
```

## Deployment

- Ready for deployment on [Vercel](https://vercel.com/) (see `vercel.json` for rewrites).

## License

MIT

---

*Inspired by creative web design and gaming