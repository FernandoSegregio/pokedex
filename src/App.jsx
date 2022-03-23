import React from 'react';
import GlobalStyle from './style/GlobalStyle';
import Pokedex from './components/pokedex/Pokedex';
import FooterPage from './components/FooterPage/FooterPage';
import HeaderPage from './components/HeaderPage/HeaderPage';

function App() {
	return (
		<div className='container-pokedex'>
			<GlobalStyle />
			<HeaderPage />
			<Pokedex />
			<FooterPage />
		</div>
	);
}

export default App;
