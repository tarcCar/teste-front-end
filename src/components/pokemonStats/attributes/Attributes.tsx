import React from 'react';

import defenseIcon from '@/assets/images/shield.png';
import speedIcon from '@/assets/images/speed.png';
import attackIcon from '@/assets/images/sword.png';
import { Pokemon } from '@/types';

import AttributeItem from './attributeItem/AttributeItem';

type Props = {
  pokemon: Pokemon;
};

const Attributes: React.FC<Props> = ({ pokemon }) => {
  return (
    <div className="attributes-container">
      <AttributeItem icon={attackIcon} label="Ataque" value={pokemon.attack} />

      <AttributeItem
        icon={defenseIcon}
        label="Defesa"
        value={pokemon.defense}
      />

      <AttributeItem
        icon={defenseIcon}
        label="Defesa especial"
        value={pokemon.specialDefense}
      />

      <AttributeItem
        icon={attackIcon}
        label="ataque especial"
        value={pokemon.attack}
      />

      <AttributeItem
        icon={speedIcon}
        label="velocidade"
        value={pokemon.speed}
      />
    </div>
  );
};

export default Attributes;
