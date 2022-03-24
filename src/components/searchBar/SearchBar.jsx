import React, { useContext, useState } from 'react';
import {SearchBarStyle } from './style';
import PokedexContext from '../../context/PokedexContext';
import { getPokemon } from '../../services/api';

function SearchBar() {
	const [pokemonName, setPokemonName] = useState('');
	const { setArrayPokemons, setIsDetailsClick } = useContext(PokedexContext);
    
	async function getPokemonApi(e){
		e.preventDefault();
		const result = await getPokemon(pokemonName);
		console.log([result]);
		setArrayPokemons([result]);
		setIsDetailsClick(true);
	}

	return (
		<form onSubmit={ (e) => getPokemonApi(e) }>
			<SearchBarStyle 
				type="text" 
				placeholder='Busque um pokemon' 
				onChange={ ({target}) => setPokemonName(target.value)}
			/>
		</form>
	);
}

export default SearchBar;