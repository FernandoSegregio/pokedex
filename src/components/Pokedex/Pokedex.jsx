import React, { useContext } from 'react';
import PokedexContext from '../../context/PokedexContext';
import {
	PokedexStyle,
	CardStyle,
	IdStyle,
	ImgStyle,
	NameStyle,
	TypesStyle,
	TypeStyle,
} from './style';

function Pokedex() {
	const { arrayPokemons } = useContext(PokedexContext);

	return (
		<PokedexStyle>
			{arrayPokemons &&
		arrayPokemons.map(({ data }, i) => {
			return (
				<CardStyle key={i} defaultValue={data.types[0].type.name}>
					<NameStyle>{data.name}</NameStyle>
					<TypesStyle>
						{data.types.map(({ type }, i) => {
							return(
								<TypeStyle 
									key={i}
									defaultValue={data.types[0].type.name}
								>
									{type.name}
								</TypeStyle>
							);
						})}
					</TypesStyle>
					<IdStyle 
						defaultValue={data.types[0].type.name}
					>#{('000' + Number(data.id)).slice(-3)}</IdStyle>
					<ImgStyle
						src={data.sprites.other.home.front_default}
						alt={data.name}
					/>
				</CardStyle>
			);
		})}
		</PokedexStyle>
	);
}
export default Pokedex;
