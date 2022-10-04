import { createStitches } from '@stitches/react';

export const {
    styled,
    css,
    globalCss,
    keyframes,
    getCssText,
    theme,
    createTheme,
    config,
  } = createStitches({
    theme: {
        colors: {
            background: '#6B635C',
            text: '#E8C3A2',
            alert: '#2d2c2b',
            white: '#fff',
            blood_900: '#590202',
            blood_800: '#732525',

            primary_900: '#B07846',
            primary_800: '#E39A5B'
        }
    },
    media: {
        bp1: '(max-width: 480px)',
        bp2: '(max-width: 768px)',
        bp3: '(max-width: 1024px)',
    },
  })