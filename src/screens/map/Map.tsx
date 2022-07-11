import React, { useState } from 'react';

import { Player, PokemonModal, SideBar } from '@/components';
import NewPokemonModel from '@/components/newPokemonModel/NewPokemonModal';
import { MAX_CAPTURED_POKEMON_QUANTITY } from '@/constants';
import { PokemonApiService } from '@/services';
import { setStatus } from '@/store/slices/PlayerSlice';
import { selectPokemon, setPokemonToEdit } from '@/store/slices/PokemonSlice';
import { useAppDispatch, useAppSelector } from '@/store/storeHooks';

const Map: React.FC = () => {
  const dispatch = useAppDispatch();

  const capturedPokemons = useAppSelector((state) => state.pokemon.captured);
  const selectedPokemon = useAppSelector(
    (state) => state.pokemon.selectedPokemon
  );
  const pokemonToEdit = useAppSelector((state) => state.pokemon.pokemonToEdit);

  const [openNewPokemonModel, setOpenNewPokemonModel] =
    useState<boolean>(false);

  const onPlayerClickHandler = async (): Promise<void> => {
    try {
      if (capturedPokemons.length >= MAX_CAPTURED_POKEMON_QUANTITY) {
        dispatch(setStatus('error'));
        return;
      }
      dispatch(setStatus('search'));
      const pokemonService = new PokemonApiService();
      const pokemon = await pokemonService.getRandomPokemon();
      dispatch(selectPokemon(pokemon));
      dispatch(setStatus('wait'));
    } catch (error) {
      dispatch(setStatus('error'));
      alert('Erro ao buscar o pokemon, por favor tente novamente');
    }
  };

  const onCaptureModalCloseHandler = (): void => {
    dispatch(selectPokemon(null));
  };

  const onNewPokemonModalCloseHandler = (): void => {
    setOpenNewPokemonModel(false);
    dispatch(setPokemonToEdit(null));
  };

  const onNewPokemonModalClickHandler = (): void => {
    setOpenNewPokemonModel(true);
    dispatch(selectPokemon(null));
  };

  return (
    <div className="map">
      <Player onPlayerClick={onPlayerClickHandler} />
      {selectedPokemon && (
        <PokemonModal
          onClose={onCaptureModalCloseHandler}
          onEditPokemon={onNewPokemonModalClickHandler}
          pokemon={selectedPokemon}
        />
      )}
      {openNewPokemonModel && (
        <NewPokemonModel
          onClose={onNewPokemonModalCloseHandler}
          pokemonToUpdate={pokemonToEdit}
        />
      )}
      <SideBar onAddNewPokemonClick={onNewPokemonModalClickHandler} />
    </div>
  );
};

export default Map;
