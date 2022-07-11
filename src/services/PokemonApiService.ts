import {
  MIN_POKEMON_ID_TO_CAPTURE,
  MAX_POKEMON_ID_TO_CAPTURE,
  URL_POKEMON_API,
} from '@/constants';
import { GetRandomPokemonError, GetTypesError } from '@/errors';
import { Pokemon } from '@/types';
import { getRandomNumber } from '@/utils';

export class PokemonApiService {
  private sleep(timeout: number): Promise<void> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, timeout);
    });
  }

  async getRandomPokemon(): Promise<Pokemon> {
    const randomPokemonId = getRandomNumber(
      MIN_POKEMON_ID_TO_CAPTURE,
      MAX_POKEMON_ID_TO_CAPTURE
    );
    const response = await fetch(
      `${URL_POKEMON_API}/pokemon/${randomPokemonId}`
    );
    if (!response.ok) {
      throw new GetRandomPokemonError();
    }
    const responseJson = await response.json();
    const pokemon = new Pokemon();
    pokemon.setValuesFromPokemonApi(responseJson);
    // Só coloquei para fins de ver o efeito do personagem andando
    await this.sleep(4000);
    return pokemon;
  }

  async getTypes(): Promise<string[]> {
    const response = await fetch(`${URL_POKEMON_API}/type`);
    if (!response.ok) {
      throw new GetTypesError();
    }
    const responseJson = await response.json();
    const { results } = responseJson;
    return results.map((result) => result.name);
  }
}
