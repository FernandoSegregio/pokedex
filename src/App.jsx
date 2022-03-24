import React from 'react';
import GlobalStyle from './style/GlobalStyle';
import RenderPokedex from './components/Pokedex/RenderPokedex';

function App() {
	return (
		<div className='container-pokedex'>
			<GlobalStyle />		
			<RenderPokedex />	
		</div>
	);
}

export default App;
