import React, { useEffect, useState } from 'react';

import { MAX_TYPES_PER_POKEMON } from '@/constants';
import { PokemonApiService } from '@/services';
import { setTypes } from '@/store/slices/TypeSlice';
import { useAppDispatch, useAppSelector } from '@/store/storeHooks';

import Dropdown from '../dropdown/Dropdown';

type Props = {
  onTypesSelected?: (types: string[]) => void;
  onChange?: (e: React.ChangeEvent<any>) => void;
  onBlur?: (e: React.FocusEvent<any, Element>) => void;
  name: string;
  error?: any;
  values: string[];
};

const TypesSelect: React.FC<Props> = ({
  onTypesSelected,
  onChange,
  onBlur,
  name,
  error,
  values,
}) => {
  const dispatch = useAppDispatch();
  const types = useAppSelector((state) => state.types.types);
  const [typesOptions, setTypesOptions] = useState<any>([]);

  const loadTypes = async () => {
    const pokemonApiService = new PokemonApiService();
    const types = await pokemonApiService.getTypes();
    dispatch(setTypes(types));
  };

  const onLimitReachHandler = () => {
    alert(`É permitido somente ${MAX_TYPES_PER_POKEMON} tipos por pokemon!`);
  };

  useEffect(() => {
    if (types && types.length) {
      return;
    }
    loadTypes();
  }, [types]);

  useEffect(() => {
    if (!types || !types.length) {
      return;
    }

    const options = types.map((type) => ({
      text: type,
      value: type,
    }));

    setTypesOptions(options);
  }, [types]);

  return (
    <Dropdown
      placeholder="Selecione o(s) tipo(s)"
      options={typesOptions}
      multiple
      onSelectedOption={onTypesSelected}
      onChange={onChange}
      onBlur={onBlur}
      limit={MAX_TYPES_PER_POKEMON}
      onLimitReach={onLimitReachHandler}
      name={name}
      error={error}
      selectedValues={values}
    />
  );
};

export default TypesSelect;
