import React, { useState } from 'react';

import { Player, PokemonModal, SideBar } from '@/components';
import { PokemonService } from '@/services';
import { useAppSelector } from '@/store/storeHooks';
import { Pokemon } from '@/types';

const Map: React.FC = () => {
  const capturedPokemons = useAppSelector((state) => state.pokemon.captured);

  const [pokemonToCapture, setPokemonToCapture] = useState<Pokemon | null>();

  const onPlayerClickHandler = async (): Promise<void> => {
    if (capturedPokemons.length >= 6) {
      return alert('Atingiu o numero maximo de pokemons!');
    }

    const pokemonService = new PokemonService();
    const pokemon = await pokemonService.getRandomPokemon();
    return setPokemonToCapture(pokemon);
  };

  const onCaptureModalCloseHandler = (): void => {
    setPokemonToCapture(null);
  };

  return (
    <div className="map">
      <Player onPlayerClick={onPlayerClickHandler} />
      {pokemonToCapture && (
        <PokemonModal
          onClose={onCaptureModalCloseHandler}
          pokemon={pokemonToCapture}
        />
      )}
      <SideBar />
    </div>
  );
};

export default Map;
