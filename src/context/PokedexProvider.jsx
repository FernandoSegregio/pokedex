import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import PokedexContext from './PokedexContext';
import { api, getListPokemonsApi } from '../services/api';

function PokedexProvider({ children }) {
	const [arrayPokemons, setArrayPokemons] = useState([]);
	
	const pokemonsPerPage = 16;

	async function getPokemonData() {
		try {
			const { results } = await getListPokemonsApi(pokemonsPerPage, 0);
			
			const promises = results.map(async (pokemon) => {
				return await api.get(pokemon.url.split('pokemon', 2)[1]);
			});
			const result = await Promise.all(promises);
			setArrayPokemons(result);

		} catch (error) {
			console.log('error: ', error);
		}
	}


	useEffect(() => {
		getPokemonData();
	}, []);



	const context = {
		arrayPokemons,
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
