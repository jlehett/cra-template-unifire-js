import { AppContainer } from 'react-hot-loader';
import ReactDOM from 'react-dom';
import Root from './root/root';
import './robots.txt';

const render = Component => {
    ReactDOM.render(
        <AppContainer>
            <Component/>
        </AppContainer>,
        document.getElementById('root'),
    );
}

render(Root);

if (module.hot) {
    module.hot.accept('./root/root', () => { render(Root) });
}