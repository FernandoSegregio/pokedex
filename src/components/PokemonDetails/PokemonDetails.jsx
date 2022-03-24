import React, { useContext, useEffect, useState } from 'react';
import PokedexContext from '../../context/PokedexContext';
import { 
	PokemonDetailsContainerStyle,
	PokemonDetailsStyle,
	ArrowStyle,
	CarouselStyle,
	ButtonPokemonSelectStyle,
} from './style';	

function PokemonDetails() {
	const [arrayDetails, setArrayDetails] = useState([]);
	const {
		setIsDetailsClick,
		arrayPokemons,
		getPokemonData,
		idPokemonOnClick,
		setIdPokemonOnClick
	} = useContext(PokedexContext);

	async function backToPokedex(){
		setIsDetailsClick(false);
		await getPokemonData();
	}
	
	const indexPokemon = idPokemonOnClick - 1;

	useEffect(() => {
		const pokemonLeft = arrayPokemons[ indexPokemon === 0 ? 15 : indexPokemon - 1 ].data;
		const pokemon = arrayPokemons[indexPokemon].data;
		const pokemonRight = arrayPokemons[indexPokemon === 15 ? 0 : indexPokemon + 1].data;
		
		setArrayDetails([pokemonLeft, pokemon, pokemonRight]);
	
	}, [idPokemonOnClick]);


	return (
		<>
			<PokemonDetailsContainerStyle>
				<ArrowStyle 
					type='button'
					onClick={ () => backToPokedex() } />
				<CarouselStyle>
					{arrayDetails && arrayDetails.map(( {sprites, id} , i ) => {
						return (
							<ButtonPokemonSelectStyle key={ i } onClick={ () => setIdPokemonOnClick(id)}>
								<img src={sprites.other.home.front_default} alt="front-pokemon" />
							</ButtonPokemonSelectStyle>	
						);
					}
					) }
				</CarouselStyle>	
				<PokemonDetailsStyle>
			details
				</PokemonDetailsStyle>
			</PokemonDetailsContainerStyle>
		</>
	);
}

export default PokemonDetails;