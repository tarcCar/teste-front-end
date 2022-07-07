import { GetRandomPokemonError } from '@/errors';
import { Pokemon } from '@/types';
import { PokemonApiToPokemon } from './PokemonApiToPokemon';

const URL_POKEMON_API = 'https://pokeapi.co/api/v2/pokemon/1';

export class PokemonService {
  async getRandomPokemon (): Promise<Pokemon> {
    const response = await fetch(URL_POKEMON_API)
    if (!response.ok) {
      throw new GetRandomPokemonError();
    }
    const responseJson = await response.json();
    const pokemon = new PokemonApiToPokemon(responseJson).pokemon
    return pokemon;
  }
}
