import axios from 'axios';
const itensPage = 16;

export const api = axios.create({
	baseURL: 'https://pokeapi.co/api/v2/',
});

export async function getListPokemonsApi(limit = itensPage, offset = 0) {
	try {
		const { data } = await api.get(`pokemon?limit=${limit}&offset=${offset}`);
		return data;
	} catch (error) {
		console.log('error: ', error);
	}
}

 

export async function getPokemonApi(namePokemon) {
	try {
		const pokemonData = api.get(`pokemon/${namePokemon}`);
		return pokemonData;
	} catch (error) {
		console.log('error: ', error);
	}
} 
  


export async function getGenderPokemonApi(id) {
	try {
		const { data } = await api.get(`gender/${id}`);
		return data;
	} catch (error) {
		console.log('error: ', error);
	}
}