export class Pokemon {
  constructor(private readonly pokemonApi: any) {}

  get name(): string {
    return this.pokemonApi.name;
  }

  get abilities(): string[] {
    return this.pokemonApi.abilities.map(({ ability }) => ability.name);
  }

  get height(): number {
    return Number(this.pokemonApi.height);
  }

  get heightFormatted(): string {
    const heightInMeters = this.height / 100;
    return `${heightInMeters.toFixed(2)} m`;
  }

  get stats(): any[] {
    return this.pokemonApi.stats;
  }

  private findStatsByName(statsName: string): any {
    return this.stats.find(({ stat }) => stat.name === statsName);
  }

  get hp(): number {
    const hpStats = this.findStatsByName('hp');
    return hpStats ? Number(hpStats.base_stat) : 0;
  }

  get attack(): number {
    const hpStats = this.findStatsByName('attack');
    return hpStats ? Number(hpStats.base_stat) : 0;
  }

  get defense(): number {
    const hpStats = this.findStatsByName('defense');
    return hpStats ? Number(hpStats.base_stat) : 0;
  }

  get specialDefense(): number {
    const hpStats = this.findStatsByName('special-defense');
    return hpStats ? Number(hpStats.base_stat) : 0;
  }

  get speed(): number {
    const hpStats = this.findStatsByName('speed');
    return hpStats ? Number(hpStats.base_stat) : 0;
  }

  get types(): string[] {
    return this.pokemonApi.types.map(({ type }) => type.name);
  }

  get weight(): number {
    const { weight } = this.pokemonApi;
    return Number(weight);
  }

  get weightFormatted(): string {
    const weightInKilos = this.weight / 10;
    return `${weightInKilos.toFixed(2)} kg`;
  }

  get icon(): string {
    return this.pokemonApi.sprites.front_default;
  }
}
