import React, { useContext, useEffect, useState } from 'react';
import PokedexContext from '../../context/PokedexContext';
import { 
	PokemonDetailsContainerStyle,
	PokemonDetailsStyle,
	ArrowStyle,
	CarouselStyle,
	ButtonPokemonSelectStyle,
	NameStyle,
	TypeStyle,
	TypesStyle,
	ImgBackGroundCardStyle,
	NameDatailsPokemonStyle,
} from './style';	

import schemaPokeballColor from '../../style/schemaPokeballColor';

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
			<PokemonDetailsContainerStyle defaultValue={arrayDetails[1] && arrayDetails[1].types[0].type.name}>
				<ArrowStyle 
					type='button'
					onClick={ () => backToPokedex() } />
				<NameDatailsPokemonStyle>
					<NameStyle>{arrayDetails[1] && arrayDetails[1].name}</NameStyle>
					<TypesStyle>
						{arrayDetails[1] && arrayDetails[1].types.map(({ type }) => {
							return (
								<TypeStyle key={`${arrayDetails[1].id}_${type.name}`} defaultValue={arrayDetails[1].types[0].type.name}>
									{type.name}
								</TypeStyle>
							);
						})}
					</TypesStyle>
				</NameDatailsPokemonStyle>
				<CarouselStyle>
					{arrayDetails && arrayDetails.map(( {sprites, id }) => {
						return (
							<ButtonPokemonSelectStyle key={id} onClick={() => setIdPokemonOnClick(id)}>
								<img src={sprites.other.home.front_default} alt="front-pokemon" />
							</ButtonPokemonSelectStyle>
						);
					},
					) }
				</CarouselStyle>	
				<ImgBackGroundCardStyle
					src={ arrayDetails[1] && schemaPokeballColor[arrayDetails[1].types[0].type.name]}
					alt="background-pokebal" />
				<PokemonDetailsStyle>
					informações gereais sobre o pokemon!
				</PokemonDetailsStyle>
			</PokemonDetailsContainerStyle>
		</>
	);
}

export default PokemonDetails;