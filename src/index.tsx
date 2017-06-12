
import * as ReactDOM from 'react-dom';
import routes from './common/routes';

// import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

ReactDOM.render(routes, document.getElementById('root')as HTMLElement);
registerServiceWorker();
