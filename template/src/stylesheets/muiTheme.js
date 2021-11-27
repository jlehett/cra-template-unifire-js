import { createTheme } from '@mui/material/styles';
import colors from '../stylesheets/colors.styles.scss';

const theme = createTheme({
    palette: {
        primary: {
            main: colors.primary,
        }
    },
});

export default theme;