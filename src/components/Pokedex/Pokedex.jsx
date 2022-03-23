import React, { useContext } from 'react';
import PokedexContext from '../../context/PokedexContext';
import  { PokedexStyle, CardStyle, TypeStyle, IdStyle, ImgStyle } from './style';

function Pokedex() {
	const {  arrayPokemons } = useContext(PokedexContext);
	
	return (
		<PokedexStyle>
			{ arrayPokemons && arrayPokemons.map(( {data}, i) => {
				return (
					<CardStyle key={ i }>
						<span>{data.name}</span>
						<TypeStyle>
							{ data.types.map(( {type}, i) => {
								return (
									<span key={i}>
										{type.name}
									</span>
								);
							})}
						</TypeStyle>
						<IdStyle>#{('000' + Number(data.id)).slice(-3)}</IdStyle>
						<ImgStyle
							src={data.sprites.other.home.front_default}
							alt={data.name}
						/>
					</CardStyle>
				);
			}) }
		</PokedexStyle>
	);
}
export default Pokedex;
