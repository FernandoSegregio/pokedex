import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import PokedexProvider from './context/PokedexProvider';
import './index.css';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
	<React.StrictMode>
		<PokedexProvider>
			<App />
		</PokedexProvider>
	</React.StrictMode>,
	document.getElementById('root')
);
serviceWorkerRegistration.register();
reportWebVitals();