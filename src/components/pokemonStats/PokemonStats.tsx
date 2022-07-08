import React from 'react';

import { Pokemon, PokemonStatus } from '@/types';

import Abilities from './abilities/Abilities';
import Attributes from './attributes/Attributes';
import SectionTitle from './sectionTitle/SectionTitle';
import StatsItem from './statsItem/StatsItem';
import TypeChip from './typeChip/TypeChip';

type Props = {
  pokemon: Pokemon;
};

const PokemonStats: React.FC<Props> = ({ pokemon }) => {
  return (
    <div className="stats">
      <p className="name">{pokemon.name}</p>

      <div className="stats-items-container">
        <StatsItem label="HP" value={`${pokemon.hp}/${pokemon.hp}`} />
        <StatsItem label="Altura" value={pokemon.heightFormatted} />
        <StatsItem label="Peso" value={pokemon.weightFormatted} />
      </div>

      <SectionTitle title="tipo" />

      <div className="types-container">
        {pokemon.types.map((type) => (
          <TypeChip type={type} key={type} />
        ))}
      </div>

      <SectionTitle title="Habilidades" />

      <Abilities abilities={pokemon.abilities} />
      {pokemon.isCaptured && (
        <>
          <SectionTitle title="estatística" />

          <Attributes pokemon={pokemon} />
        </>
      )}
    </div>
  );
};

export default PokemonStats;
