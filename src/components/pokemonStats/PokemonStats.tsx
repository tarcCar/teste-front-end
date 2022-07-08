import React from 'react';

import pokeball from '@/assets/images/pokeball.png';
import { Pokemon } from '@/types';

import Abilities from './abilities/Abilities';
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
        <StatsItem label="Altura" value={`${pokemon.height}`} />
        <StatsItem label="Peso" value={`${pokemon.weight}`} />
      </div>

      <SectionTitle title="tipo" />

      <div className="types-container">
        {pokemon.type.map((type) => (
          <TypeChip type={type} key={type} />
        ))}
      </div>

      <SectionTitle title="Habilidades" />

      <Abilities abilities={pokemon.abilities} />
      <div
        style={{
          position: 'fixed',
          bottom: '3rem',
          display: 'flex',
          justifyContent: 'center',
          width: '100%',
        }}
      >
        <img
          src={pokeball}
          style={{
            width: '100%',
            maxWidth: '96px',
            height: 'auto',
            cursor: 'pointer',
          }}
          alt="capture"
        />
      </div>
    </div>
  );
};

export default PokemonStats;
