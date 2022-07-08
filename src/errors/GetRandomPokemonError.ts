export class GetRandomPokemonError extends Error {
  super(): void {
    this.name = 'GetRandomPokemonError';
    this.message =
      'Ocorreu um erro ao buscar o pokemon, por favor tente novamente!';
  }
}
