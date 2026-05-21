# Theme Switching Guide

## Current Theme: 🌺 WILD GARDEN

Your elegant design is **fully preserved**! Switch back anytime.

---

## How to Switch Themes

### Method 1: Quick Switch (Tailwind Colors)

**To switch back to ELEGANT:**

In `tailwind.config.ts`, change the `garden` colors from WILD to ELEGANT:

```typescript
colors: {
  garden: {
    // Copy these ELEGANT colors (currently commented)
    cream: '#FBF7F0',
    moss: '#7A9B76',
    violet: '#9B7BA3',
    coral: '#F4A6A3',
    earth: '#8B7355',
    midnight: '#2C3E50',
  },
}
```

**To use WILD again:**

```typescript
colors: {
  garden: {
    // Use these WILD colors (currently active)
    cream: '#FFFBF0',
    moss: '#00D9A3',
    violet: '#B645D6',
    coral: '#FF6B9D',
    earth: '#FFB627',
    midnight: '#1A0B2E',
    lime: '#C6FF00',
    cyan: '#00E5FF',
    magenta: '#FF00E5',
    orange: '#FF6B00',
  },
}
```

### Method 2: Toggle Wild Elements

**In `app/page.tsx`**, comment out wild components:

```typescript
// WILD GARDEN (currently active)
<WildPetals />
<WildButterflies />

// To remove wild elements, comment out:
{/* <WildPetals /> */}
{/* <WildButterflies /> */}
```

---

## What Changed for WILD Theme

### 🎨 Colors
- **Neon Greens**: `#00D9A3`, `#C6FF00`
- **Electric Purples**: `#B645D6`, `#FF00E5`
- **Hot Pinks**: `#FF6B9D`
- **Bright Yellows**: `#FFB627`
- **Cyan**: `#00E5FF`
- **Orange**: `#FF6B00`

### 🦋 New Animations
1. **Wild Butterflies** (12 animated butterflies)
   - Flying in curved paths
   - Animated wing flapping
   - Color-coded trails
   - Infinite loops

2. **Wild Petals** (40 falling petals)
   - More petals than elegant theme
   - Colorful variety
   - Glowing effects
   - Swirling motion

3. **Enhanced Flower Interactions**
   - Bigger scale on hover (1.3x vs 1.15x)
   - Rotating glow effect
   - Cycling color gradients
   - Neon shadows

### 🌈 Background Effects
- Animated gradient background
- Multiple radial color bursts
- Pulsing overlay layers
- Moving color waves

---

## Files Modified

### Core Theme Files
- ✅ `tailwind.config.ts` - WILD colors (ELEGANT preserved)
- ✅ `app/globals.css` - WILD backgrounds & animations
- ✅ `lib/themes.ts` - Theme config (NEW)

### New WILD Components
- ✅ `components/wild-petals.tsx` (NEW)
- ✅ `components/wild-butterflies.tsx` (NEW)

### Enhanced Components
- ✅ `components/interactive-flower.tsx` - More intense animations
- ✅ `app/page.tsx` - Wild background layers

### Preserved (No Changes)
- ✅ `components/navigation.tsx`
- ✅ `components/bloom-hero.tsx`
- ✅ `app/gallery/page.tsx`
- ✅ `app/studio/page.tsx`
- ✅ `app/music/page.tsx`
- ✅ `app/about/page.tsx`

---

## Quick Comparison

| Feature | ELEGANT | WILD |
|---------|---------|------|
| **Color Scheme** | Soft pastels | Neon brights |
| **Motion** | Gentle | Intense |
| **Petals** | 15 subtle | 40 colorful |
| **Butterflies** | 0 | 12 animated |
| **Glow Effects** | Subtle shadows | Neon glows |
| **Background** | Static texture | Animated gradient |
| **Hover Scale** | 1.15x | 1.3x |
| **Animation Speed** | Moderate | Fast |

---

## Switching Back (Step-by-Step)

### 1. Colors (2 minutes)
```typescript
// tailwind.config.ts - line 12
garden: {
  cream: '#FBF7F0',    // Change from #FFFBF0
  moss: '#7A9B76',     // Change from #00D9A3
  violet: '#9B7BA3',   // Change from #B645D6
  coral: '#F4A6A3',    // Change from #FF6B9D
  earth: '#8B7355',    // Change from #FFB627
  midnight: '#2C3E50', // Change from #1A0B2E
  // Remove: lime, cyan, magenta, orange
}
```

### 2. Background (2 minutes)
```css
/* app/globals.css - line 28 */
.paint-texture {
  background-image: 
    repeating-linear-gradient(
      90deg,
      rgba(139, 115, 85, 0.03) 0px,
      transparent 1px,
      transparent 2px,
      rgba(139, 115, 85, 0.03) 3px
    ),
    repeating-linear-gradient(
      0deg,
      rgba(139, 115, 85, 0.03) 0px,
      transparent 1px,
      transparent 2px,
      rgba(139, 115, 85, 0.03) 3px
    );
}
```

### 3. Remove Wild Elements (1 minute)
```typescript
// app/page.tsx - lines 20-21
{/* <WildPetals /> */}
{/* <WildButterflies /> */}
```

### 4. Reduce Animation Intensity (Optional)
```typescript
// components/interactive-flower.tsx - line 73
whileHover={{ scale: 1.15, zIndex: 50 }}  // Change from 1.3
```

---

## Keep Both Themes?

You can create a theme toggle! Here's a quick approach:

1. Add a button in navigation
2. Store theme preference in localStorage
3. Conditionally render wild components
4. Use CSS variables for colors

Let me know if you want me to implement a theme switcher!

---

## Need Help?

- ✅ Colors not changing? Restart dev server
- ✅ Animations laggy? Reduce petal/butterfly count
- ✅ Want hybrid? Mix and match features!

Current Status: **WILD GARDEN** 🦋🌺✨

