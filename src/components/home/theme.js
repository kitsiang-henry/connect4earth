import { createTheme } from '@material-ui/core';

const THEME = createTheme({
    typography: {
        fontFamily: [
            '"Montserrat"', 'Open Sans'
        ].join(',')
    }
});

export default THEME;