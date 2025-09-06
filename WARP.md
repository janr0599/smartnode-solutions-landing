# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Development Commands

### Core Development
- **Development server**: `pnpm dev` - Runs Next.js with Turbopack for faster builds
- **Build**: `pnpm build` - Creates production build
- **Production server**: `pnpm start` - Serves production build
- **Linting**: `pnpm lint` - Runs ESLint with Next.js configuration

### Package Management
This project uses **pnpm** as the package manager. Always use `pnpm install` and `pnpm add <package>` instead of npm or yarn.

## Architecture Overview

### Tech Stack
- **Framework**: Next.js 15 with App Router
- **Styling**: TailwindCSS with shadcn/ui components
- **Animations**: Motion (Framer Motion) + TailwindCSS animations
- **Internationalization**: Custom i18n implementation with middleware
- **Toast Notifications**: Sonner
- **Icons**: Lucide React + React Icons
- **Content**: Markdown files processed with Remark

### Project Structure

#### App Router Structure
- `src/app/layout.jsx` - Root layout with html/body tags and global styles
- `src/app/[lang]/layout.jsx` - Nested layout for internationalization with Toaster and Analytics
- `src/app/[lang]/page.jsx` - Main landing page composing all sections
- `src/app/emails/` - Email template components (using @react-email/render)

#### Component Architecture  
- **UI Components**: `src/components/ui/` - shadcn/ui base components
- **Feature Components**: `src/components/` - Page-specific sections (Header, Hero, Features, etc.)
- **Component Structure**: Landing page is composed of reusable sections imported in the main page

#### Internationalization (i18n)
- **Configuration**: `src/i18n-config.js` - Defines supported locales (en, es)
- **Middleware**: `src/middleware.js` - Handles locale routing and redirects
- **Translations**: `public/locales/en.json` and `public/locales/es.json`
- **Provider**: `src/lib/i18n-provider.js` - Context provider for translations
- **Hook**: `src/lib/use-translation.js` - Custom hook to access translations
- **URL Structure**: `/{lang}/path` format (e.g., `/en/`, `/es/`)

#### Content Management
- **Blog Posts**: `src/posts/{lang}/*.md` - Markdown files organized by language
- **Success Cases**: `src/success-cases/{lang}/*.md` - Case study content
- **Processing**: `src/lib/posts.js` and `src/lib/successCases.js` - Content parsing with gray-matter

#### Styling System
- **TailwindCSS**: Custom configuration with shadcn/ui design tokens
- **CSS Variables**: HSL-based color system defined in `src/app/globals.css`
- **Custom Animations**: Scroll animations and accordion effects
- **Component Variants**: Using class-variance-authority for component styling

### Key Configuration Files

#### shadcn/ui Configuration
- **components.json**: Defines component paths, style preferences, and aliases
- **Style**: "new-york" variant
- **Components**: `@/components/ui/`
- **Utils**: `@/lib/utils`

#### Path Aliases (jsconfig.json)
- `@/*` maps to `src/*` for cleaner imports

#### Next.js Configuration
- **MDX Support**: Configured for markdown content processing
- **File Extensions**: Supports .js, .jsx, .md, .mdx files

## Development Guidelines

### Component Development
- Use shadcn/ui components as base building blocks
- Implement responsive design with TailwindCSS utilities
- Follow the existing component composition pattern from the landing page
- Utilize the Motion library for animations and transitions

### Content Management
- Blog posts and success cases use frontmatter for metadata
- Content is organized by language folders
- Gray-matter processes markdown with metadata extraction
- Images are stored in `/public/` directory

### Internationalization
- Always check locale support in `i18n-config.js`
- Use the custom `useTranslation` hook for accessing translations
- Add new content to both `en.json` and `es.json` locale files
- Test locale routing and fallbacks

### Styling Patterns
- Use TailwindCSS utility classes for styling
- Leverage CSS custom properties for theming
- Implement consistent spacing using Tailwind's scale
- Use gradient backgrounds and subtle animations for visual appeal

### Performance Considerations
- Next.js App Router with server components by default
- Static generation for blog posts and success cases
- Turbopack enabled for faster development builds
- Optimized image handling through Next.js Image component

## Environment Setup

### Required Tools
- Node.js (compatible with Next.js 15)
- pnpm package manager
- Git for version control

### Development Flow
1. Clone repository
2. Run `pnpm install` to install dependencies
3. Start development server with `pnpm dev`
4. Access at `http://localhost:3000`
5. The app will redirect to locale-based URLs (e.g., `/en/`)

### Analytics Integration
- Google Analytics configured in the lang layout
- GTM ID: G-89ENM9L4J1 (configured in production)
