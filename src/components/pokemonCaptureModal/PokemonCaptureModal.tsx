import { Pokemon } from '@/types';
import React from 'react';
import Avatar from '../avatar/Avatar';
import Modal from '../modal/Modal';
import PokemonStats from '../pokemonStats/PokemonStats';
type Props = {
  onClose: () => void
  pokemonToCapture: Pokemon
}
const PokemonCaptureModal: React.FC<Props> = ({ onClose, pokemonToCapture }) => {
  return <Modal onClose={onClose}>
        <div className='modal-capture'>
          <div className='avatar-container'>
              <Avatar src={pokemonToCapture.icon} alt={pokemonToCapture.name} />
          </div>
          <div className='infos-container'>
             <PokemonStats pokemon={pokemonToCapture} />
          </div>
        </div>
  </Modal>
}

export default PokemonCaptureModal;
