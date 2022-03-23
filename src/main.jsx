import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import PokedexProvider from './context/PokedexProvider';
import './index.css';

ReactDOM.render(
	<React.StrictMode>
		<PokedexProvider>
			<App />
		</PokedexProvider>
	</React.StrictMode>,
	document.getElementById('root')
);
