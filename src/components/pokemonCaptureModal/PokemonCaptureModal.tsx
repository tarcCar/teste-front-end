import React from 'react';

import { capture } from '@/store/slices/PokemonSlice';
import { useAppDispatch, useAppSelector } from '@/store/storeHooks';
import { Pokemon } from '@/types';

import Avatar from '../avatar/Avatar';
import Modal from '../modal/Modal';
import PokemonStats from '../pokemonStats/PokemonStats';
import CaptureButton from './captureButton/CaptureButton';

type Props = {
  onClose: () => void;
  pokemonToCapture: Pokemon;
};

const PokemonCaptureModal: React.FC<Props> = ({
  onClose,
  pokemonToCapture,
}) => {
  const dispatch = useAppDispatch();

  const capturedPokemons = useAppSelector((state) => state.pokemon.captured);

  const onCaptureClickHandler = () => {
    if (capturedPokemons.length >= 6) {
      return alert('Atingiu o numero maximo de pokemons!');
    }
    dispatch(capture(pokemonToCapture));
    return onClose();
  };

  return (
    <Modal onClose={onClose}>
      <div className="modal-capture">
        <div className="avatar-container">
          <Avatar src={pokemonToCapture.icon} alt={pokemonToCapture.name} />
        </div>
        <div className="infos-container">
          <PokemonStats pokemon={pokemonToCapture} />
        </div>
        <CaptureButton onClick={onCaptureClickHandler} />
      </div>
    </Modal>
  );
};

export default PokemonCaptureModal;
