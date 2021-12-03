import { Outlet } from 'react-router-dom';
import '@stylesheets/main.scss';
import { ThemeProvider } from '@mui/material/styles';
import { useUserContextProvider } from '@unifire-js/firebase/auth';
import muiTheme from '@stylesheets/muiTheme';

const App = ({}) => {
    const UserContextProvider = useUserContextProvider();

    return (
        <UserContextProvider>
            <ThemeProvider theme={muiTheme}>
                Example App
                <Outlet/>
            </ThemeProvider>
        </UserContextProvider>
    );
};

export default App;
