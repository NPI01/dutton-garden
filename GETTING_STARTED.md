# Getting Started with The Garden

Welcome to The Garden - an immersive progressive web app showcasing Dan Dutton's flower paintings!

## Quick Start

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```

3. **Open in Browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
dutton-garden/
├── app/                      # Next.js App Router pages
│   ├── page.tsx             # The Bloom (landing)
│   ├── gallery/             # The Beds (gallery)
│   ├── studio/              # The Compost (writings)
│   ├── music/               # The Rain (music)
│   ├── about/               # The Roots (about)
│   ├── layout.tsx           # Root layout
│   └── globals.css          # Global styles
├── components/              # React components
│   ├── navigation.tsx       # Main navigation
│   ├── interactive-flower.tsx
│   ├── bloom-hero.tsx
│   ├── pwa-installer.tsx
│   └── ...
├── lib/                     # Utility functions
│   ├── utils.ts             # Helper functions
│   └── register-sw.ts       # Service worker registration
├── flower-images/           # Local image storage (48 images)
└── public/
    ├── manifest.json        # PWA manifest
    ├── sw.js               # Service worker
    └── icon.svg            # App icon
```

## Key Features

### 🌸 The Bloom (Landing Page)
- Interactive flowers that bloom on page load
- Cursor-reactive animations
- Scroll-triggered hero text
- Random selection of 20 flowers from collection

### 🌺 The Beds (Gallery)
- All 48+ flower paintings organized in clusters
- Fullscreen image viewer
- Hover effects on cluster groups
- Responsive grid layout

### 📝 The Compost (Studio)
- Artist essays and writings
- Parallax scroll effects
- Behind-the-scenes content
- Typography-focused design

### 🎵 The Rain (Music)
- Interactive sound garden UI
- Click flowers to activate layers
- Visual feedback for active sounds
- Information about compositions
- *Note: Actual audio integration coming soon with Tone.js*

### 🌱 The Roots (About)
- Artist biography
- Animated SVG vines and roots
- Timeline of artistic journey
- Philosophy and quotes

## Design System

### Colors
```css
--garden-cream:   #FBF7F0  /* Base background */
--garden-moss:    #7A9B76  /* Primary green */
--garden-violet:  #9B7BA3  /* Accent purple */
--garden-coral:   #F4A6A3  /* Warm accent */
--garden-earth:   #8B7355  /* Brown tones */
--garden-midnight: #2C3E50 /* Dark text */
```

### Typography
- **Serif**: Playfair Display (headings, elegant)
- **Brush**: Homemade Apple (artistic accents)
- **Sans**: Inter (body text)

## Progressive Web App (PWA)

The site is configured as a PWA with:
- Service worker for offline caching
- Install prompt for home screen
- App manifest for native app experience
- Optimized image loading

### Testing PWA Features

1. Build production version:
   ```bash
   npm run build
   npm run start
   ```

2. Open DevTools → Application → Service Workers
3. Enable "Offline" mode to test caching
4. Use Lighthouse to audit PWA score

## Performance Optimizations

- **Image Optimization**: Next.js automatic image optimization
- **Code Splitting**: Automatic with Next.js App Router
- **Lazy Loading**: Images load as you scroll
- **Framer Motion**: Smooth animations without layout shift
- **useMemo**: Prevents unnecessary recalculations

## Customization

### Adding More Images
Place new flower images in `/flower-images/` directory. They'll be automatically included in the gallery.

### Modifying Colors
Edit `tailwind.config.ts` under `theme.extend.colors.garden`

### Adjusting Animations
Animation timing and effects are in each component. Look for:
- `initial`, `animate`, `exit` props (Framer Motion)
- `transition` configurations
- `whileHover`, `whileTap` interactions

## Next Steps

### Future Enhancements
- [ ] Integrate Tone.js for actual music playback
- [ ] Add Supabase for artwork metadata storage
- [ ] Implement Three.js particle effects
- [ ] Add more artist content (photos, videos)
- [ ] Create admin panel for content management
- [ ] Deploy to Vercel with custom domain

### For Deployment

1. **Vercel** (Recommended)
   ```bash
   npm run build
   vercel deploy
   ```

2. **Custom Server**
   ```bash
   npm run build
   npm run start
   ```

## Troubleshooting

### Images not loading?
- Check that images are in `/flower-images/` directory
- Verify file names match exactly (case-sensitive)
- Check browser console for 404 errors

### Animations laggy?
- Reduce number of interactive flowers on home page
- Check `prefersReducedMotion` setting
- Test on different devices/browsers

### PWA not installing?
- Must be served over HTTPS (or localhost)
- Check Service Worker is registered in DevTools
- Verify manifest.json is accessible

## Support

For questions or issues with this codebase, refer to:
- Next.js 15 docs: https://nextjs.org/docs
- Framer Motion: https://www.framer.com/motion/
- Tailwind CSS: https://tailwindcss.com/docs

---

Built with ❤️ for Dan Dutton's "The Garden"

