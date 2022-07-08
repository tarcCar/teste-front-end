import {
  MIN_POKEMON_ID_TO_CAPTURE,
  MAX_POKEMON_ID_TO_CAPTURE,
  URL_POKEMON_API,
} from '@/constants';
import { GetRandomPokemonError } from '@/errors';
import { Pokemon } from '@/types';
import { getRandomNumber } from '@/utils';

// TODO: colocar no arquivos env

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
    const pokemon = new Pokemon(responseJson);
    return pokemon;
  }
}
