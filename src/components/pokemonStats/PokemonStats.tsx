import React from 'react';

import pokeball from '@/assets/images/pokeball.png';
import { Pokemon } from '@/types';

import SectionTitle from './sectionTitle/SectionTitle';
import StatsItem from './statsItem/StatsItem';

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
      <div
        style={{
          display: 'flex',
          width: '100%',
          fontWeight: 'bold',
          fontSize: '3rem',
          lineHeight: 1.6,
          color: '#2e3a59',
          textAlign: 'center',
          justifyContent: 'space-around',
          padding: '4rem',
        }}
      >
        <span
          style={{
            color: 'white',
            backgroundColor: '#67AF32',
            padding: '1rem 3rem',
            borderRadius: '50px',
            textTransform: 'uppercase',
            fontSize: '2rem',
          }}
        >
          Planta
        </span>
        <span
          style={{
            color: 'white',
            backgroundColor: '#924990',
            padding: '1rem 3rem',
            borderRadius: '50px',
            textTransform: 'uppercase',
            fontSize: '2rem',
          }}
        >
          Veneno
        </span>
      </div>
      <SectionTitle title="Habilidades" />
      <div
        style={{
          display: 'flex',
          width: '100%',
          fontWeight: 'bold',
          fontSize: '2.5rem',
          lineHeight: 1.6,
          color: '#2e3a59',
          textAlign: 'center',
          justifyContent: 'space-around',
          padding: '4rem',
        }}
      >
        overgrow, clorofila
      </div>
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
