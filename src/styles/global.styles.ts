import { globalCss, theme } from './stitches.config';

export const stitchesGlobalStyles = globalCss({
  ':root': {
    fontSize: '16px',

    '@breakpoint1': {
      //1024px
      fontSize: '14px',
    },
  },
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },

  '@font-face': [
    {
      fontFamily: 'Poppins',
      src: "url('/fonts/Poppins-Regular.ttf')",
      fontWeight: '400',
      fontDisplay: 'optional',
      fontStyle: 'normal',
    },
    {
      fontFamily: 'Poppins',
      src: "url('/fonts/Poppins-Medium.ttf')",
      fontDisplay: 'optional',
      fontWeight: '500',
      fontStyle: 'normal',
    },
    {
      fontFamily: 'Poppins',
      src: "url('/fonts/Poppins-Bold.ttf')",
      fontDisplay: 'optional',
      fontWeight: '700',
      fontStyle: 'normal',
    },
  ],

  html: {
    height: '100%',
    width: '100%',
  },

  '*::-webkit-scrollbar': {
    width: '0.5rem',
    height: '0.5rem',
  },
  '*::-webkit-scrollbar-track': {
    backgroundColor: theme.colors.background3,
    borderRadius: theme.radii.md,
  },
  '*::-webkit-scrollbar-thumb': {
    backgroundColor: theme.colors.primary,
    borderRadius: theme.radii.md,

    border: 'none',
    outline: 'none',

    '&:hover': {
      filter: 'brightness(1.5)',
    },
    '&:active': {
      backgroundColor: theme.colors.secondary,
    },
  },

  body: {
    height: '100%',
    width: '100%',
    display: 'flex',
    fontFamily:
      'Poppins, Inter var,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji',

    backgroundColor: theme.colors.background1,
    color: theme.colors.text1,

    '[data-nextjs-scroll-focus-boundary]': {
      display: 'contents',
    },
  },
});
