import React from 'react';

import { MAX_CAPTURED_POKEMON_QUANTITY } from '@/constants';
import { capture } from '@/store/slices/PokemonSlice';
import { useAppDispatch, useAppSelector } from '@/store/storeHooks';
import { Pokemon, PokemonStatus } from '@/types';

import Avatar from '../avatar/Avatar';
import Modal from '../modal/Modal';
import PokemonStats from '../pokemonStats/PokemonStats';
import CaptureButton from './captureButton/CaptureButton';

type Props = {
  onClose: () => void;
  pokemon: Pokemon;
};

const PokemonModal: React.FC<Props> = ({ onClose, pokemon }) => {
  const dispatch = useAppDispatch();

  const capturedPokemons = useAppSelector((state) => state.pokemon.captured);

  const onCaptureClickHandler = () => {
    if (capturedPokemons.length >= MAX_CAPTURED_POKEMON_QUANTITY) {
      return alert('Atingiu o numero maximo de pokemons!');
    }
    pokemon.capture();
    dispatch(capture(pokemon));
    return onClose();
  };

  return (
    <Modal onClose={onClose}>
      <div className="modal-pokemon">
        <div className="avatar-container">
          <Avatar src={pokemon.icon} alt={pokemon.name} />
        </div>

        <div className="infos-container">
          <PokemonStats pokemon={pokemon} />
        </div>

        {pokemon.status === PokemonStatus.WILD && (
          <CaptureButton onClick={onCaptureClickHandler} />
        )}
      </div>
    </Modal>
  );
};

export default PokemonModal;
