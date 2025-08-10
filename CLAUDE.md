# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- **Development server**: `npm run dev` - Runs Next.js development server on port 9002 with Turbopack
- **Build**: `npm run build` - Creates production build
- **Lint**: `npm run lint` - Runs Next.js ESLint checks
- **Type check**: `npm run typecheck` - Runs TypeScript compiler without emitting files
- **Start production**: `npm start` - Runs production server

### AI Development
- **Genkit development**: `npm run genkit:dev` - Starts Genkit development server
- **Genkit with watch**: `npm run genkit:watch` - Starts Genkit with file watching

## Project Architecture

This is a Next.js 15 application for ALMO Premium Delights, a Russian chocolate-covered almond brand. The project uses modern React patterns with TypeScript and is deployed on Firebase App Hosting.

### Core Structure
- **Frontend**: Next.js 15 with App Router (`src/app/`)
- **AI Integration**: Firebase Genkit with Google AI (`src/ai/`)
- **Styling**: Tailwind CSS with shadcn/ui components
- **Language**: Russian (ru) with Cyrillic text content

### Key Directories
- `src/app/` - Next.js App Router pages and layouts
- `src/components/ui/` - shadcn/ui component library
- `src/lib/` - Utility functions and shared logic
- `src/hooks/` - React custom hooks
- `src/ai/` - AI/ML integrations using Firebase Genkit

### Technology Stack
- **Framework**: Next.js 15.3.3 with TypeScript
- **Styling**: Tailwind CSS with CSS variables for theming
- **UI Components**: shadcn/ui (Radix UI primitives)
- **AI**: Firebase Genkit with Google AI (Gemini 2.0 Flash)
- **Icons**: Lucide React
- **Forms**: React Hook Form with Zod validation
- **Hosting**: Firebase App Hosting
- **Fonts**: Alegreya (headlines), PT Sans (body)

### Design System
- **Color scheme**: CSS variables-based theming with neutral base colors
- **Typography**: Custom font stack with Google Fonts integration
- **Components**: Consistent Radix UI-based components via shadcn/ui
- **Responsive**: Mobile-first design approach

### Important Notes
- Russian language content throughout the application
- Product-focused landing page architecture
- Firebase App Hosting configuration in `apphosting.yaml`
- TypeScript and ESLint errors are ignored during builds (configured in `next.config.ts`)
- Uses `@/` path mapping for imports
- Placeholder images from placehold.co and QR code generation via qrserver.com API

### Configuration Files
- `components.json` - shadcn/ui configuration with default style and Lucide icons
- `tailwind.config.ts` - Extensive theme customization with CSS variables
- `next.config.ts` - Image domains whitelisted, build errors ignored
- `tsconfig.json` - Standard Next.js TypeScript configuration with path mapping