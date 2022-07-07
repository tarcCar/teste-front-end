import { Pokemon } from '@/types';

export class PokemonApiToPokemon {
  constructor (private readonly pokemonApi: any) {}

  get name (): string {
    return this.pokemonApi.forms.name;
  }

  get abilities (): string[] {
    return this.pokemonApi.abilities.map(({ ability }) => ability.name);
  }

  get height (): number {
    return Number(this.pokemonApi.height)
  }

  get stats (): any[] {
    return this.pokemonApi.stats;
  }

  private findStatsByName (statsName: string): any {
    return this.stats.find(({ stat }) => stat.name === statsName)
  }

  get hp (): number {
    const hpStats = this.findStatsByName('hp')
    return hpStats ? Number(hpStats.base_stat) : 0
  }

  get attack (): number {
    const hpStats = this.findStatsByName('attack')
    return hpStats ? Number(hpStats.base_stat) : 0
  }

  get defense (): number {
    const hpStats = this.findStatsByName('defense')
    return hpStats ? Number(hpStats.base_stat) : 0
  }

  get specialDefense (): number {
    const hpStats = this.findStatsByName('special-defense')
    return hpStats ? Number(hpStats.base_stat) : 0
  }

  get speed (): number {
    const hpStats = this.findStatsByName('speed')
    return hpStats ? Number(hpStats.base_stat) : 0
  }

  get types (): string[] {
    return this.pokemonApi.types.map(({ type }) => type.name)
  }

  get weight (): number {
    const weight = this.pokemonApi.weight
    return Number(weight)
  }

  get pokemon (): Pokemon {
    return {
      name: this.name,
      abilities: this.abilities,
      height: this.height,
      hp: this.hp,
      stats: {
        attack: this.attack,
        defense: this.defense,
        specialDefense: this.specialDefense,
        speed: this.speed
      },
      type: this.types,
      weight: this.weight
    }
  }
}
