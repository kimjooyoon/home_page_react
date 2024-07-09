import { ThemeProvider } from '@mui/material/styles';
import {withThemeFromJSXProvider} from '@storybook/addon-themes';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
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

export const parameters = {
    viewport: {
        viewports: {
            ...INITIAL_VIEWPORTS,
            small: {
                name: 'Small',
                styles: {
                    width: '500px',
                    height: '963px',
                },
            },
            responsive: {
                name: 'Responsive',
                styles: {
                    width: '100%',
                    height: '100%',
                },
            },
        },
    },
}