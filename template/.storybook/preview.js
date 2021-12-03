import '@storybook/addon-console';
import { ThemeProvider } from '@mui/material/styles';
import theme from '@stylesheets/muiTheme';
import '@stylesheets/main.scss';

export const decorators = [
    (Story) => (
        <ThemeProvider theme={theme}>
            <Story/>
        </ThemeProvider>
    ),
];

export const parameters = {
    controls: {
        expanded: true,
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
    viewport: {
        viewports: {
            phoneSmall: {
                name: 'iPhone SE',
                styles: {
                    width: '640px',
                    height: '1136px',
                },
            },
            matSmall: {
                name: 'Material Small',
                styles: {
                    width: '600px',
                    height: '600px',
                },
            },
            matMedium: {
                name: 'Material Medium',
                styles: {
                    width: '960px',
                    height: '960px',
                },
            },
            matLarge: {
                name: 'Material Large',
                styles: {
                    width: '1280px',
                    height: '600px',
                },
            },
            matExtraLarge: {
                name: 'Material Extra Large',
                styles: {
                    width: '1920px',
                    height: '1080px',
                },
            },
        },
    },
};