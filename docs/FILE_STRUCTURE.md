# Portfolio Project - File Structure Guide

This document explains the organized file structure of this portfolio project, designed to be beginner-friendly and scalable.

## 📁 Root Directory Structure

```
portfolio/
├── 📄 README.md                 # Project documentation
├── 📄 package.json              # Dependencies and scripts
├── 📄 index.html                # Main HTML file
├── 📄 vite.config.ts            # Vite configuration
├── 📄 tsconfig.json             # TypeScript configuration
├── 📄 eslint.config.js          # ESLint configuration
├── 📄 components.json           # Component configuration
├── 📄 .gitignore                # Git ignore rules
├── 📁 docs/                     # Additional documentation
├── 📁 node_modules/             # Installed dependencies
└── 📁 src/                      # Source code (main folder)
```

## 📁 Source Code Structure (`src/`)

```
src/
├── 📄 main.tsx                  # Application entry point
├── 📄 App.tsx                   # Main application component
├── 📁 components/               # Reusable UI components
│   ├── 📁 common/              # Common components (Navbar, Footer, etc.)
│   ├── 📁 features/            # Feature-specific components
│   ├── 📁 layout/              # Layout and structural components
│   └── 📁 ui/                  # Basic UI elements (buttons, cards, etc.)
├── 📁 pages/                    # Page components (for routing)
├── 📁 hooks/                    # Custom React hooks
├── 📁 lib/                      # Utility functions and helpers
├── 📁 types/                    # TypeScript type definitions
├── 📁 constants/                # Application constants
├── 📁 data/                     # Static data and content
├── 📁 styles/                   # CSS and styling files
└── 📁 images/                   # Image assets
    ├── 📁 avatars/             # Profile and avatar images
    ├── 📁 logos/               # Company and service logos
    ├── 📁 projects/            # Project showcase images
    └── 📁 tech/                # Technology stack icons
```

## 📋 Component Categories Explained

### 📁 `src/components/common/`
Components used across multiple pages:
- `Navbar.tsx` - Navigation bar
- `Footer.tsx` - Footer section
- `ToggleMode.tsx` - Dark/light mode toggle
- `Theme.tsx` - Theme provider

### 📁 `src/components/features/`
Components for specific features:
- `HeroSection.tsx` - Landing hero section
- `ProjectSection.tsx` - Projects showcase
- `ControllerSection.tsx` - Interactive controls
- `ProjectComponents/` - Individual project cards

### 📁 `src/components/layout/`
Layout and structural components:
- `Quote.tsx` - Quote display
- `ImageLayout.tsx` - Image grid layout
- `SpotifyPlugin.tsx` - Spotify integration
- `CopyRight.tsx` - Copyright information
- `ViewCount.tsx` - Page view counter
- `SocialMedia.tsx` - Social media links
- `GetInTouch.tsx` - Contact section
- `InfoSection.tsx` - Information display

### 📁 `src/components/ui/`
Basic UI elements and design system:
- `button.tsx` - Button component
- `card.tsx` - Card component
- `avatar.tsx` - Avatar component
- `tooltip.tsx` - Tooltip component
- `dropdown-menu.tsx` - Dropdown menu
- `separator.tsx` - Visual separator
- `animated-theme-toggler.tsx` - Theme toggle animation

## 🎯 File Organization Principles

### 1. **Separation of Concerns**
- Components are grouped by purpose
- UI logic separated from business logic
- Styles organized separately

### 2. **Scalability**
- Easy to add new features
- Clear naming conventions
- Modular structure

### 3. **Maintainability**
- Related files grouped together
- Clear directory names
- Consistent organization

## 🚀 Getting Started

1. **Install dependencies**: `npm install`
2. **Start development**: `npm run dev`
3. **Build for production**: `npm run build`
4. **Preview build**: `npm run preview`

## 📝 Development Guidelines

### Adding New Components
1. Determine component type (common/feature/layout/ui)
2. Create in appropriate directory
3. Follow existing naming conventions
4. Export from index files if needed

### Adding New Pages
1. Create in `src/pages/`
2. Add routing configuration
3. Use layout components consistently

### Adding New Images
1. Place in appropriate `src/images/` subdirectory
2. Use descriptive names
3. Optimize for web

## 🔧 Configuration Files

- **`vite.config.ts`** - Build tool configuration
- **`tsconfig.json`** - TypeScript compiler options
- **`eslint.config.js`** - Code linting rules
- **`components.json`** - Component library configuration

## 📚 Additional Resources

- [React Documentation](https://react.dev/)
- [Vite Documentation](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

---

This structure is designed to grow with your project. Keep it organized and follow the patterns established here!