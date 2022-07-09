export class GetTypesError extends Error {
  super(): void {
    this.name = 'GetTypesError';
    this.message =
      'Ocorreu um erro ao buscar os tipo de pokemons, por favor tente novamente!';
  }
}
