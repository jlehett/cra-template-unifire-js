import { Outlet } from 'react-router-dom';
import '@stylesheets/main.scss';
import '@stylesheets/typography.scss';
import { ThemeProvider } from '@mui/material/styles';
import muiTheme from '@stylesheets/muiTheme';

const App = ({}) => {
    return (
        <ThemeProvider theme={muiTheme}>
            Example App
            <Outlet/>
        </ThemeProvider>
    );
};

export default App;
