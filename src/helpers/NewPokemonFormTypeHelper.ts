import { NewPokemonFormType, PokemonHelper } from '@/types';

export class NewPokemonFormTypeHelper implements PokemonHelper {
  constructor(private readonly newPokemon: NewPokemonFormType) {}

  get name(): string {
    return this.newPokemon.name;
  }

  get abilities(): string[] {
    const abilities: string[] = [];
    const { abilities1, abilities2, abilities3, abilities4 } = this.newPokemon;

    if (abilities1) {
      abilities.push(abilities1);
    }

    if (abilities2) {
      abilities.push(abilities2);
    }

    if (abilities3) {
      abilities.push(abilities3);
    }

    if (abilities4) {
      abilities.push(abilities4);
    }
    return abilities;
  }

  get height(): number {
    return Number(this.newPokemon.height);
  }

  get hp(): number {
    return Number(this.newPokemon.hp);
  }

  get attack(): number {
    return Number(this.newPokemon.attack);
  }

  get specialAttack(): number {
    return Number(this.newPokemon.specialAttack);
  }

  get defense(): number {
    return Number(this.newPokemon.defense);
  }

  get specialDefense(): number {
    return Number(this.newPokemon.specialDefense);
  }

  get speed(): number {
    return Number(this.newPokemon.speed);
  }

  get types(): string[] {
    return this.newPokemon.types;
  }

  get weight(): number {
    return Number(this.newPokemon.weight);
  }

  get icon(): string {
    return this.newPokemon.icon;
  }
}
