import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import PokedexContext from './PokedexContext';
import { api, getListPokemonsApi, getGenderPokemonApi } from '../services/api';

function PokedexProvider({ children }) {
	const [arrayPokemons, setArrayPokemons] = useState([]);
	const [totalPage, setTotalPage] = useState(0);
	const [page, setPage] = useState(0);
	const [isDetailsClick, setIsDetailsClick] = useState(false);
	const [idPokemonOnClick, setIdPokemonOnClick] = useState(0);
	const [gender, setGender] = useState();

	const pokemonsPerPage = 16;
	const offetRequest = ( page * pokemonsPerPage);

	async function getPokemonData() {
		try {
			const { results, count } = await getListPokemonsApi(pokemonsPerPage, offetRequest );
			
			const promises = results.map(async (pokemon) => {
				return await api.get(pokemon.url.split('v2', 2)[1]);
			});
			const result = await Promise.all(promises);
			setArrayPokemons(result);
			setTotalPage(Math.ceil(count / pokemonsPerPage));

		} catch (error) {
			console.log('error: ', error);
		}
	}

	async function getGenderPokemon() {
		const {pokemon_species_details} = await getGenderPokemonApi(1);
		setGender(pokemon_species_details);
	}

	useEffect(() => {
		getPokemonData();
	}, [page]);


	useEffect(() => {
		getGenderPokemon();
	}, []);

	const context = {
		arrayPokemons,
		gender,
		idPokemonOnClick,
		isDetailsClick,
		page,
		totalPage,
		getPokemonData,
		setArrayPokemons,
		setIdPokemonOnClick,
		setIsDetailsClick,
		setPage,
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
