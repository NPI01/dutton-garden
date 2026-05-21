// Theme configuration for The Garden

export type ThemeName = 'elegant' | 'wild';

export const themes = {
  elegant: {
    name: 'Elegant Garden',
    colors: {
      cream: '#FBF7F0',
      moss: '#7A9B76',
      violet: '#9B7BA3',
      coral: '#F4A6A3',
      earth: '#8B7355',
      midnight: '#2C3E50',
    },
    animations: {
      intensity: 'normal',
      petalCount: 15,
      butterflyCount: 0,
    },
  },
  wild: {
    name: 'Wild Garden',
    colors: {
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
    animations: {
      intensity: 'wild',
      petalCount: 40,
      butterflyCount: 8,
    },
  },
};

// Current active theme
export const CURRENT_THEME: ThemeName = 'wild';

