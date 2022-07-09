import React from 'react';

import editIcon from '@/assets/images/editIcon.png';
import { Pokemon } from '@/types';

import TextInput from '../textInput/TextInput';
import Abilities from './abilities/Abilities';
import Attributes from './attributes/Attributes';
import SectionTitle from './sectionTitle/SectionTitle';
import StatsItem from './statsItem/StatsItem';
import TypeChip from './typeChip/TypeChip';

type Props = {
  pokemon: Pokemon;
  onEditPokemon: () => void;
  edit?: boolean;
};

const PokemonStats: React.FC<Props> = ({ pokemon, onEditPokemon, edit }) => {
  return (
    <div className="stats">
      <div className="field-container">
        {edit ? (
          <div
            style={{
              display: 'flex',
            }}
          >
            <TextInput
              style={{
                marginBottom: '16px',
              }}
              label=""
              name="name"
              placeholder="digite o nome"
            />
          </div>
        ) : (
          <>
            <p className="name">{pokemon.name}</p>
            <img src={editIcon} alt="editar" onClick={onEditPokemon} />
          </>
        )}
      </div>

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
