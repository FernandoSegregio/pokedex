import React, { useContext } from 'react';
import PokedexContext from '../../context/PokedexContext';
import PokemonDetails from '../PokemonDetails/PokemonDetails';
import Pokedex from './Pokedex';

function RenderPokedex() {
	const { isDetailsClick } = useContext(PokedexContext);
    

	return (
		<div>
			{
				!isDetailsClick ? <Pokedex /> : <PokemonDetails />
			}
		</div>
	);
}

export default RenderPokedex;