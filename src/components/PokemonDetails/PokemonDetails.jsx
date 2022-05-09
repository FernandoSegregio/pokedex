import React, { useContext, useEffect, useState } from 'react';
import PokedexContext from '../../context/PokedexContext';
import { api, getPokemonApi } from '../../services/api';
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
	DetailStyle,
	AbilitiesDetailsStyle,
	DetailsStyle,
	DetailTitle,
	ContainerBreedingStyle,
	BreedingStyle,
	GenderStyle,
	EggStyle,
	IdStyle,
	TitleBreegingStyle,
} from './style';

import schemaPokeballColor from '../../style/schemaPokeballColor';
import iconMale from '../../images/icon-male.svg';
import iconFemale from '../../images/icon-female.svg';

function PokemonDetails() {
	const [arrayDetails, setArrayDetails] = useState([]);
	const [eggGroup, setEggGroup] = useState('');
	const {
		setIsDetailsClick,
		getPokemonData,
		idPokemonOnClick,
		setIdPokemonOnClick,
		gender,
	} = useContext(PokedexContext);

	async function backToPokedex() {
		setIsDetailsClick(false);
		await getPokemonData();
	}

	useEffect(async() => {
		await getCarouselPokemon();		
	}, [idPokemonOnClick]);

	useEffect(() => {
		getTypeEgg();
	}, [arrayDetails]);

	async function getCarouselPokemon() {
		
		const pokemonLeft = idPokemonOnClick === 1 
			? await getPokemonApi(700)
			: await getPokemonApi(idPokemonOnClick - 1);
		const pokemonCenter = await getPokemonApi(idPokemonOnClick);
		const pokemonRight = idPokemonOnClick === 700
			? await getPokemonApi(1)
			: await getPokemonApi(idPokemonOnClick + 1);
		setArrayDetails([pokemonLeft.data, pokemonCenter.data, pokemonRight.data]);
	}
	
	async function getTypeEgg() {
		if(arrayDetails[1]){
			const pokemonSpecie  = (arrayDetails[1] && arrayDetails[1].species.url.split('v2', 2)[1]);
			const { data } = await api.get(pokemonSpecie);
			setEggGroup(data.egg_groups[0].name);	
		}
	}

	const genderOnClick  = (arrayDetails[1] && gender
		.find((pokemon) => pokemon
			.pokemon_species.name === arrayDetails[1].name));

	const female = (arrayDetails[1] && (genderOnClick.rate / 8).toFixed(3) * 100);
	const male = (100 - female);
	
	return (
		<>
			<PokemonDetailsContainerStyle
				defaultValue={arrayDetails[1] && arrayDetails[1].types[0].type.name}
			>
				<ArrowStyle type="button" onClick={() => backToPokedex()} />
				<IdStyle defaultValue={arrayDetails[1] && arrayDetails[1].types[0].type.name}
				>#{arrayDetails[1] && ('000' + Number(arrayDetails[1].id)).slice(-3)}</IdStyle>
				<NameDatailsPokemonStyle>
					<NameStyle>{arrayDetails[1] && arrayDetails[1].name}</NameStyle>
					<TypesStyle>
						{arrayDetails[1] &&
			  arrayDetails[1].types.map(({ type }) => {
			  	     return (<TypeStyle 
			  	  key={`${arrayDetails[1].id}_${type.name}`} 
			          defaultValue={arrayDetails[1].types[0].type.name}>
			          {type.name}
			      </TypeStyle>
			      );
			  })}
					</TypesStyle>
				</NameDatailsPokemonStyle>
				<CarouselStyle>
					{arrayDetails.length > 0 &&
			arrayDetails.map(({ sprites, id }) => {
			    return (
			        <ButtonPokemonSelectStyle key={id} 
			            onClick={() => setIdPokemonOnClick(id)}>
			            <img
			                src={sprites.other.home.front_default}
			                alt="front-pokemon"
			            />
			        </ButtonPokemonSelectStyle>
			    );
			})}
				</CarouselStyle>
				<ImgBackGroundCardStyle
					src={
						arrayDetails[1] &&
			schemaPokeballColor[arrayDetails[1].types[0].type.name]
					}
					alt="background-pokebal"
				/>
				<PokemonDetailsStyle>
					<DetailsStyle>
						<div>
							<DetailTitle>Height</DetailTitle>
							<DetailTitle>Weight</DetailTitle>
							<DetailTitle>Abilities</DetailTitle>
						</div>

						<div>
							<DetailStyle>
								{Number(
									arrayDetails[1] && (arrayDetails[1].height * 10) / 2.54).toFixed(2)}pol 
                ({Number(
									arrayDetails[1] && (arrayDetails[1].height * 10).toFixed(2))}cm)
							</DetailStyle>
							<DetailStyle>
								{Number(
									arrayDetails[1] && (arrayDetails[1].weight / 10) * 2.20462).toFixed(1)}{' '}
				lbs ({Number(arrayDetails[1] && arrayDetails[1].weight / 10)}Kg)
							</DetailStyle>

							<AbilitiesDetailsStyle>
								{arrayDetails[1] &&
				  arrayDetails[1].abilities.map(({ ability }, index) => {
				  	return index === 0 &&
					 
            arrayDetails[1].abilities.length === 2 ? (
				  			<DetailStyle key={index} className="pokemon-type-text">
				  				{ability.name},
				  			</DetailStyle>
				  		) : (
				  			<DetailStyle key={index} className="pokemon-type-text">
				  				{ability.name}
				  			</DetailStyle>
				  		);
				  })}
							</AbilitiesDetailsStyle>
						</div>
						<ContainerBreedingStyle>
							<TitleBreegingStyle>Breeding</TitleBreegingStyle>
				  			<BreedingStyle>
							  <DetailTitle>Gender</DetailTitle>
							  <DetailTitle>Egg Group</DetailTitle>
						      				  
							  </BreedingStyle>
							<BreedingStyle>
								<GenderStyle>
									<img src={iconMale} alt="" />							
									<DetailStyle>{ male }%</DetailStyle>
									<img src={ iconFemale} alt="" />
									<DetailStyle>{ female }%</DetailStyle>
								</GenderStyle>
								<EggStyle>
									<DetailStyle>{eggGroup}</DetailStyle>
								</EggStyle>			
							</BreedingStyle>
						</ContainerBreedingStyle>
					</DetailsStyle>
				</PokemonDetailsStyle>
			</PokemonDetailsContainerStyle>
		</>
	);
}

export default PokemonDetails;
