import { Pokemon } from '@/types';
import React from 'react';
import Button from '../button/Button';
import pokeball from '@/assets/images/pokeball.png'
import StatsItem from './statsItem/StatsItem';
type Props = {
  pokemon: Pokemon
}
const PokemonStats: React.FC<Props> = ({ pokemon }) => {
  return <div style={{
    paddingTop: '150px',
    width: '100%'
  }}>
    <p style={{
      textTransform: 'uppercase',
      marginBottom: '3rem',
      fontWeight: 'bold',
      fontSize: '3rem',
      lineHeight: 1.6,
      color: '#2e3a59',
      textAlign: 'center'
    }}>
      {pokemon.name}
    </p>
    <div className='stats-items-container' style={{
      display: 'flex',
      width: '100%',
      fontWeight: 'bold',
      fontSize: '3rem',
      lineHeight: 1.6,
      color: '#2e3a59',
      textAlign: 'center',
      justifyContent: 'space-between',
      padding: '0 8%'
    }}>

      <StatsItem
        label='HP'
        value={`${pokemon.hp}/${pokemon.hp}`}
      />
      <StatsItem
        label='Altura'
        value={`${pokemon.height}`}
      />

      <StatsItem
        label='Peso'
        value={`${pokemon.weight}`}
      />
    </div>
    <hr data-content="Tipo" className="hr-text" />
    <div style={{
      display: 'flex',
      width: '100%',
      fontWeight: 'bold',
      fontSize: '3rem',
      lineHeight: 1.6,
      color: '#2e3a59',
      textAlign: 'center',
      justifyContent: 'space-around',
      padding: '4rem'
    }}>
      <span
        style={{
          color: 'white',
          backgroundColor: '#67AF32',
          padding: '1rem 3rem',
          borderRadius: '50px',
          textTransform: 'uppercase',
          fontSize: '2rem'
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
         fontSize: '2rem'
       }}
      >
        Veneno
      </span>
    </div>
    <hr data-content="Habilidades" className="hr-text" />
    <div style={{
      display: 'flex',
      width: '100%',
      fontWeight: 'bold',
      fontSize: '2.5rem',
      lineHeight: 1.6,
      color: '#2e3a59',
      textAlign: 'center',
      justifyContent: 'space-around',
      padding: '4rem'
    }}>
      overgrow, clorofila
    </div>
    <div style={{
      position: 'fixed',
      bottom: '3rem',
      display: 'flex',
      justifyContent: 'center',
      width: '100%'
    }}>
      <img src={pokeball} style={{
        width: '100%',
        maxWidth: '96px',
        height: 'auto',
        cursor: 'pointer'
      }} alt="capture" />
    </div>
  </div>;
}

export default PokemonStats;
