import { GetRandomPokemonError } from '@/errors';
import { Pokemon } from '@/types';
import { getRandomNumber } from '@/utils';

import { PokemonApiToPokemon } from './PokemonApiToPokemon';

// TODO: colocar no arquivos env
const URL_POKEMON_API = 'https://pokeapi.co/api/v2/pokemon';
const MIN_POKEMON_ID_TO_CAPTURE = 1;
const MAX_POKEMON_ID_TO_CAPTURE = 871;

export class PokemonService {
  async getRandomPokemon(): Promise<Pokemon> {
    const randomPokemonId = getRandomNumber(
      MIN_POKEMON_ID_TO_CAPTURE,
      MAX_POKEMON_ID_TO_CAPTURE
    );
    const response = await fetch(`${URL_POKEMON_API}/${randomPokemonId}`);
    if (!response.ok) {
      throw new GetRandomPokemonError();
    }
    const responseJson = await response.json();
    const { pokemon } = new PokemonApiToPokemon(responseJson);
    return pokemon;
  }
}
