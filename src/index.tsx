import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import NavProvider from './context/navigation';
import { Provider } from 'react-redux';
import { store } from './store';

const element = document.getElementById('root') as HTMLDivElement;
const root = ReactDOM.createRoot(element);

root.render(
  <Provider store={store}>
  <NavProvider>
    <App />
  </NavProvider>
  </Provider>
);
