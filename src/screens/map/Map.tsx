import { Modal, Player } from '@/components';
import { PokemonService } from '@/services';
import { Pokemon } from '@/types';
import React, { useState } from 'react';

const Map: React.FC = () => {
  const [pokemonToCapture, setPokemonToCapture] = useState<Pokemon | null>()

  const onPlayerClickHandler = async (): Promise<void> => {
    const pokemonService = new PokemonService()
    const pokemon = await pokemonService.getRandomPokemon()
    setPokemonToCapture(pokemon)
  }

  const onCaptureModalCloseHandler = (): void => {
    setPokemonToCapture(null)
  }

  return <div className="map">
    <Player onPlayerClick={onPlayerClickHandler} />
    {pokemonToCapture && <Modal onClose={onCaptureModalCloseHandler}>
    <div style={{ height: '30rem', width: '30rem' }} />
    </Modal>}
</div>;
}

export default Map;
