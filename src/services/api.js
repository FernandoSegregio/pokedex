import axios from 'axios';
const itensPage = 16;

export const api = axios.create({
	baseURL: 'https://pokeapi.co/api/v2/pokemon',
});

export async function getListPokemonsApi(limit = itensPage, offset = 0) {
	try {
		const { data } = await api.get(`?limit=${limit}&offset=${offset}`);
		return data;
	} catch (error) {
		console.log('error: ', error);
	}
}


export function getPokemon(namePokemon) {
	try {
		const pokemonData = api.get(namePokemon);
		return pokemonData;
	} catch (error) {
		console.log('error: ', error);
	}
} 
  

