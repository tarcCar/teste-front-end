import React, { useEffect, useState } from 'react';

import { useAppSelector } from '@/store/storeHooks';

const MAX_CAPTURED_POKEMON_QUANTITY = 6;

const EmptySlots: React.FC = () => {
  const capturedPokemons = useAppSelector((state) => state.pokemon.captured);
  const [emptySlots, setEmptySlots] = useState<any[]>([]);

  useEffect(() => {
    const emptyQuantity =
      MAX_CAPTURED_POKEMON_QUANTITY - capturedPokemons.length;

    setEmptySlots(Array.from(Array(emptyQuantity)));
  }, [capturedPokemons]);

  return (
    <>
      {emptySlots.map(() => (
        <div className="sidebar__item">?</div>
      ))}
    </>
  );
};

export default EmptySlots;
