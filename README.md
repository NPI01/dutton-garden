# The Garden - Dan Dutton

An immersive progressive web app showcasing the flower paintings and musical compositions of Kentucky folk artist Dan Dutton.

## Features

- **The Bloom (Home)**: Interactive landing page with cursor-reactive flower animations
- **The Beds (Gallery)**: Clustered gallery layout with fullscreen image viewing
- **The Compost (Studio)**: Essays, writings, and artist process with parallax effects
- **The Rain (Music)**: Interactive sound garden for exploring Dan's compositions
- **The Roots (About)**: Artist biography with animated SVG growth elements

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion, React Spring
- **3D**: Three.js, React Three Fiber
- **Audio**: Tone.js
- **PWA**: Progressive Web App with offline support

## Getting Started

First, install dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
dutton-garden/
├── app/
│   ├── page.tsx              # The Bloom (landing)
│   ├── gallery/              # The Beds
│   ├── studio/               # The Compost
│   ├── music/                # The Rain
│   ├── about/                # The Roots
│   └── layout.tsx
├── components/
│   ├── navigation.tsx
│   ├── interactive-flower.tsx
│   ├── bloom-hero.tsx
│   └── ...
├── flower-images/            # Local image storage
└── public/
    └── manifest.json         # PWA manifest
```

## Design Philosophy

The Garden is designed to feel like a living, breathing space—part website, part gallery, part interactive art installation. Every interaction is intentional, with animations that mirror the organic growth and decay of flowers in nature.

### Color Palette

- **Cream**: `#FBF7F0` - Base background
- **Moss**: `#7A9B76` - Primary green
- **Violet**: `#9B7BA3` - Accent purple
- **Coral**: `#F4A6A3` - Warm accent
- **Earth**: `#8B7355` - Brown tones
- **Midnight**: `#2C3E50` - Dark text

### Typography

- **Serif**: Playfair Display - Elegant, traditional
- **Brush**: Homemade Apple - Artistic, handwritten
- **Sans**: Inter - Clean, modern

## Future Enhancements

- Integration with Supabase for artwork metadata
- Audio implementation with Tone.js
- WebGL particle effects for enhanced visual experience
- Service worker for offline gallery access
- Deployment to Vercel

## License

All artwork and music © Dan Dutton. All rights reserved.

