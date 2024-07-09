import { ThemeProvider } from '@mui/material/styles';
import {withThemeFromJSXProvider} from '@storybook/addon-themes';

import theme from '../../src/theme';
import {GlobalStyles} from "@mui/material";

export const decorators = [
    withThemeFromJSXProvider({
        themes: {
            light: theme,
            dark: theme,
        },
        defaultTheme: 'light',
        Provider: ThemeProvider,
        GlobalStyles,
    })];