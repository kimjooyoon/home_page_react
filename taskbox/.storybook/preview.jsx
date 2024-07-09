import { ThemeProvider } from '@mui/material/styles';
import {withThemeFromJSXProvider} from '@storybook/addon-themes';

import lightTheme from '../../src/styles/lightTheme';
import darkTheme from '../../src/styles/darkTheme';
import {GlobalStyles} from "@mui/material";

export const decorators = [
    withThemeFromJSXProvider({
        themes: {
            light: lightTheme,
            dark: darkTheme,
        },
        defaultTheme: 'light',
        Provider: ThemeProvider,
        GlobalStyles,
    })];