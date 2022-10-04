import { globalCss } from "@stitches/react";
import '@fontsource/roboto'

export const GlobalStyle = globalCss({
    '*': {
        margin: 0,
        padding: 0,
        fontFamily: 'Roboto'
    },
    'body':{
        background: '$blood_900',
        height: '100%'
    },
    'a': {
        textDecoration: 'none',
    },
});
