import React from 'react';
import PropTypes from 'prop-types';
import PokedexContext from './PokedexContext';

function PokedexProvider({ children }) {
	const context = { 
    
	};

	return (
		<PokedexContext.Provider value={context}>
			{children}
		</PokedexContext.Provider>
	);
}
PokedexProvider.propTypes = {
	children: PropTypes.node.isRequired,
};

export default PokedexProvider;
