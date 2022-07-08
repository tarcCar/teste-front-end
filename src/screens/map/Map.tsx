import React, { useState } from 'react';

import { Player, PokemonCaptureModal } from '@/components';
import { PokemonService } from '@/services';
import { Pokemon } from '@/types';

const Map: React.FC = () => {
  const [pokemonToCapture, setPokemonToCapture] = useState<Pokemon | null>();

  const onPlayerClickHandler = async (): Promise<void> => {
    const pokemonService = new PokemonService();
    const pokemon = await pokemonService.getRandomPokemon();
    setPokemonToCapture(pokemon);
  };

  const onCaptureModalCloseHandler = (): void => {
    setPokemonToCapture(null);
  };

  return (
    <div className="map">
      <Player onPlayerClick={onPlayerClickHandler} />
      {pokemonToCapture && (
        <PokemonCaptureModal
          onClose={onCaptureModalCloseHandler}
          pokemonToCapture={pokemonToCapture}
        />
      )}
    </div>
  );
};

export default Map;
