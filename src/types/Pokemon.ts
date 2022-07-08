type PokemonStats = {
  defense: number;
  attack: number;
  specialDefense: number;
  speed: number;
};

export type Pokemon = {
  name: string;
  icon: string;
  hp: number;
  weight: number;
  height: number;
  type: string[];
  abilities: string[];
  stats: PokemonStats;
};
