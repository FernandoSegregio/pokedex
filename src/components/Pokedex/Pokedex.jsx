import React, { useContext } from 'react';
import PokedexContext from '../../context/PokedexContext';
import HeaderPage from '../HeaderPage/HeaderPage';
import FooterPage from '../FooterPage/FooterPage';

import {
	PokedexStyle,
	CardStyle,
	IdStyle,
	ImgStyle,
	NameStyle,
	TypesStyle,
	TypeStyle,
	ImgBackGroundCardStyle,
	CardButtonPokemonStyle,
} from './style';

import schemaPokeballColor from '../../style/schemaPokeballColor';
import SearchBar from '../searchBar/SearchBar';


function Pokedex() {
	const { 
		arrayPokemons, 
		setIsDetailsClick, 
		setIdPokemonOnClick,
	} = useContext(PokedexContext);

	async function clickCardPokemon(idPokemon) {
		setIdPokemonOnClick(idPokemon);
		setIsDetailsClick(true);
	}


	return (
		<><HeaderPage />
			<PokedexStyle>
				{arrayPokemons &&
				arrayPokemons.map(({ data }) => {
					return (
						<CardButtonPokemonStyle key={`${data.id}_${data.name}`} onClick={() => clickCardPokemon(data.id)}>
							<CardStyle defaultValue={data.types[0].type.name}>
								<NameStyle>{data.name}</NameStyle>
								<TypesStyle>
									{data.types.map(({ type }) => {
										return (
											<TypeStyle key={`${data.id}_${data.type}`} defaultValue={data.types[0].type.name}>
												{type.name}
											</TypeStyle>
										);
									})}
								</TypesStyle>
								<IdStyle defaultValue={data.types[0].type.name}>
									#{('000' + Number(data.id)).slice(-3)}
								</IdStyle>
								<ImgStyle
									src={data.sprites.other.home.front_default}
									alt={data.name} />
								<ImgBackGroundCardStyle
									src={schemaPokeballColor[data.types[0].type.name]}
									alt={data.name} />
							</CardStyle>
						</CardButtonPokemonStyle>
					);
				})}
				<SearchBar />
			</PokedexStyle>
			<FooterPage />
		</>);
}
export default Pokedex;