import React from 'react';
import GlobalStyle from './style/GlobalStyle';
import Pokedex from './components/pokedex/Pokedex';
import FooterPage from './components/FooterPage/FooterPage';

function App() {
    
	return (
		<>
			<GlobalStyle />
			<Pokedex />
			<FooterPage />
		</>
	);
}

export default App;
