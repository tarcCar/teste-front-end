import React, { useState } from 'react';

import { Player, PokemonModal, SideBar } from '@/components';
import NewPokemonModel from '@/components/newPokemonModel/NewPokemonModal';
import { MAX_CAPTURED_POKEMON_QUANTITY } from '@/constants';
import { PokemonService } from '@/services';
import { selectPokemon } from '@/store/slices/PokemonSlice';
import { useAppDispatch, useAppSelector } from '@/store/storeHooks';

const Map: React.FC = () => {
  const dispatch = useAppDispatch();

  const capturedPokemons = useAppSelector((state) => state.pokemon.captured);
  const selectedPokemon = useAppSelector(
    (state) => state.pokemon.selectedPokemon
  );

  const [openNewPokemonModel, setOpenNewPokemonModel] =
    useState<boolean>(false);

  const onPlayerClickHandler = async (): Promise<void> => {
    if (capturedPokemons.length >= MAX_CAPTURED_POKEMON_QUANTITY) {
      alert('Atingiu o numero maximo de pokemons!');
      return;
    }

    const pokemonService = new PokemonService();
    const pokemon = await pokemonService.getRandomPokemon();
    dispatch(selectPokemon(pokemon));
  };

  const onCaptureModalCloseHandler = (): void => {
    dispatch(selectPokemon(null));
  };

  const onNewPokemonModalCloseHandler = (): void => {
    setOpenNewPokemonModel(false);
  };

  const onNewPokemonModalClickHandler = (): void => {
    setOpenNewPokemonModel(true);
  };

  return (
    <div className="map">
      <Player onPlayerClick={onPlayerClickHandler} />
      {selectedPokemon && (
        <PokemonModal
          onClose={onCaptureModalCloseHandler}
          pokemon={selectedPokemon}
        />
      )}
      {openNewPokemonModel && (
        <NewPokemonModel onClose={onNewPokemonModalCloseHandler} />
      )}
      <SideBar onAddNewPokemonClick={onNewPokemonModalClickHandler} />
    </div>
  );
};

export default Map;
