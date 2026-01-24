# Components Directory

This directory contains all React components organized by purpose.

## 📁 Subdirectories

### `/common/`
Reusable components used across multiple pages:
- `Navbar.tsx` - Main navigation
- `Footer.tsx` - Site footer
- `ToggleMode.tsx` - Theme toggle
- `Theme.tsx` - Theme provider

### `/features/`
Components for specific features:
- `HeroSection.tsx` - Landing hero
- `ProjectSection.tsx` - Projects showcase
- `ControllerSection.tsx` - Interactive controls
- `ProjectComponents/` - Individual project cards

### `/layout/`
Layout and structural components:
- `Quote.tsx` - Quote display
- `ImageLayout.tsx` - Image grid
- `SpotifyPlugin.tsx` - Spotify integration
- `CopyRight.tsx` - Copyright info
- `ViewCount.tsx` - Page counter
- `SocialMedia.tsx` - Social links
- `GetInTouch.tsx` - Contact section
- `InfoSection.tsx` - Information display

### `/ui/`
Basic UI elements and design system:
- `button.tsx` - Button component
- `card.tsx` - Card component
- `avatar.tsx` - Avatar component
- `tooltip.tsx` - Tooltip component
- `dropdown-menu.tsx` - Dropdown menu
- `separator.tsx` - Visual separator
- `animated-theme-toggler.tsx` - Theme toggle animation

## 📝 Component Guidelines

1. **Naming**: Use PascalCase for component names
2. **File Structure**: One component per file
3. **Exports**: Use default exports for components
4. **Types**: Define types in the same file or `/types/` directory
5. **Styling**: Use Tailwind CSS classes

## 🚀 Adding New Components

1. Choose appropriate subdirectory
2. Create component file
3. Follow existing patterns
4. Add to index if needed