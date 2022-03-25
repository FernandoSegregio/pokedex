import React, { useContext, useState } from 'react';
import {SearchBarStyle } from './style';
import PokedexContext from '../../context/PokedexContext';
import { getPokemonApi } from '../../services/api';

function SearchBar() {
	const [pokemonName, setPokemonName] = useState('');
	const { setIdPokemonOnClick, setIsDetailsClick } = useContext(PokedexContext);
    
	async function getPokemon(e){
		e.preventDefault();
		const result = await getPokemonApi(pokemonName.toLocaleLowerCase());
		await setIdPokemonOnClick(result.data.id);
		setIsDetailsClick(true);
	}


	return (
		<form onSubmit={ (e) => getPokemon(e) }>
			<SearchBarStyle 
				type="text" 
				placeholder='Busque um pokemon' 
				onChange={ ({target}) => setPokemonName(target.value)}
			/>
		</form>
	);
}

export default SearchBar;