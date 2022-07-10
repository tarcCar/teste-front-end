import React, { useEffect, useRef, useState } from 'react';

import { Formik } from 'formik';

import { capture, updatePokemon } from '@/store/slices/PokemonSlice';
import { useAppDispatch } from '@/store/storeHooks';
import { NewPokemonFormType, Pokemon } from '@/types';

import Button from '../button/Button';
import ImageInput from '../imageInput/ImageInput';
import Modal from '../modal/Modal';
import NumberInput from '../numberInput/NumberInput';
import SectionTitle from '../pokemonStats/sectionTitle/SectionTitle';
import TextInput from '../textInput/TextInput';
import TypesSelect from '../typesSelect/TypesSelect';

type Props = {
  onClose: () => void;
  pokemonToUpdate?: Pokemon;
};

const INIT_VALUES_DEFAULT: NewPokemonFormType = {
  icon: '',
  name: '',
  hp: '',
  weight: '',
  height: '',
  types: [],
  abilities1: '',
  abilities2: '',
  abilities3: '',
  abilities4: '',
  attack: '',
  defense: '',
  specialDefense: '',
  specialAttack: '',
  speed: '',
};

const NewPokemonModel: React.FC<Props> = ({ onClose, pokemonToUpdate }) => {
  const dispatch = useAppDispatch();

  const formikRef = useRef<any>();

  const [imageUrl, setImageUrl] = useState<string | undefined>('');
  const [initValues, setInitValue] = useState<NewPokemonFormType>();

  const onNewImageHandler = (newImageUrl: string | undefined) => {
    setImageUrl(newImageUrl);
  };

  useEffect(() => {
    if (!pokemonToUpdate) {
      setInitValue(INIT_VALUES_DEFAULT);
      return;
    }

    const [abilities1, abilities2, abilities3, abilities4] =
      pokemonToUpdate.abilities;
    const init: NewPokemonFormType = {
      attack: pokemonToUpdate.attack.toString(),
      defense: pokemonToUpdate.defense.toString(),
      height: pokemonToUpdate.height.toString(),
      hp: pokemonToUpdate.hp.toString(),
      icon: pokemonToUpdate.icon,
      name: pokemonToUpdate.name,
      specialAttack: pokemonToUpdate.specialAttack.toString(),
      specialDefense: pokemonToUpdate.specialDefense.toString(),
      speed: pokemonToUpdate.speed.toString(),
      types: pokemonToUpdate.types,
      weight: pokemonToUpdate.weight.toString(),
      abilities1,
      abilities2,
      abilities3,
      abilities4,
    };

    setInitValue(init);
  }, [pokemonToUpdate]);

  useEffect(() => {
    if (!formikRef.current) {
      return;
    }

    const formik = formikRef.current;
    formik.setFieldValue('icon', imageUrl, true);
  }, [imageUrl, formikRef]);

  const submitNewPokemonHandler = (values: NewPokemonFormType) => {
    const pokemon = new Pokemon();
    pokemon.setValuesFromNewPokemonFormType(values);
    pokemon.capture();
    dispatch(capture(pokemon));
    onClose();
  };

  const submitUpdatePokemonHandler = (values: NewPokemonFormType) => {
    const pokemon = new Pokemon();
    pokemon.setValuesFromNewPokemonFormType(values);
    pokemon.capture();
    dispatch(updatePokemon({ pokemon, idToUpdate: pokemonToUpdate?.id }));
    onClose();
  };

  if (!initValues) {
    return null;
  }

  return (
    <Modal onClose={onClose}>
      <div className="modal-pokemon">
        <div className="infos-container">
          <Formik
            innerRef={formikRef}
            initialValues={initValues}
            validate={(values: NewPokemonFormType) => {
              const errors: any = {};
              if (!values.name) {
                errors.name = 'Nome é obrigatório';
              }

              if (
                !values.abilities1 &&
                !values.abilities2 &&
                !values.abilities3 &&
                !values.abilities4
              ) {
                errors.abilities1 = 'Deve informar pelo menos uma habilidade';
              }

              if (!values.hp) {
                errors.hp = 'Hp é obrigatório';
              } else if (Number(values.hp) <= 0) {
                errors.hp = 'Hp deve ser maior que zero';
              }

              if (!values.attack) {
                errors.attack = 'Ataque é obrigatório';
              } else if (Number(values.attack) <= 0) {
                errors.attack = 'Ataque deve ser maior que zero';
              }

              if (!values.defense) {
                errors.defense = 'Defesa é obrigatória';
              } else if (Number(values.defense) <= 0) {
                errors.defense = 'Defesa deve ser maior que zero';
              }

              if (!values.height) {
                errors.height = 'Altura é obrigatória';
              } else if (Number(values.height) <= 0) {
                errors.height = 'Altura deve ser maior que zero';
              }

              if (!values.specialAttack) {
                errors.specialAttack = 'Ataque especial é obrigatório';
              } else if (Number(values.specialAttack) <= 0) {
                errors.specialAttack =
                  'Ataque especial deve ser maior que zero';
              }

              if (!values.specialDefense) {
                errors.specialDefense = 'Defesa especial é obrigatória';
              } else if (Number(values.specialDefense) <= 0) {
                errors.specialDefense =
                  'Defesa especial deve ser maior que zero';
              }

              if (!values.speed) {
                errors.speed = 'Velocidade é obrigatória';
              } else if (Number(values.speed) <= 0) {
                errors.speed = 'Velocidade deve ser maior que zero';
              }

              if (!values.types || values.types.length <= 0) {
                errors.types = 'Informar pelo menos um tipo';
              }

              if (!values.weight) {
                errors.weight = 'Peso é obrigatório';
              } else if (Number(values.weight) <= 0) {
                errors.weight = 'Peso deve ser maior que zero';
              }

              return errors;
            }}
            onSubmit={(values: NewPokemonFormType, { setSubmitting }) => {
              if (pokemonToUpdate) {
                submitUpdatePokemonHandler(values);
              } else {
                submitNewPokemonHandler(values);
              }
              setSubmitting(false);
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
            }) => (
              <form onSubmit={handleSubmit} className="pokemon-form">
                <div className="avatar-container">
                  <ImageInput
                    name="icon"
                    onImageSelected={onNewImageHandler}
                    onBlur={handleBlur}
                    value={values.icon}
                    error={errors.icon && touched.icon && errors.icon}
                  />
                </div>

                <TextInput
                  label="Nome"
                  placeholder="Nome"
                  name="name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                  error={errors.name && touched.name && errors.name}
                />

                <NumberInput
                  label="Hp"
                  placeholder="HP"
                  name="hp"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.hp}
                  error={errors.hp && touched.hp && errors.hp}
                />
                <NumberInput
                  label="Peso"
                  placeholder="Peso"
                  name="weight"
                  suffix="Kg"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.weight}
                  error={errors.weight && touched.weight && errors.weight}
                />
                <NumberInput
                  label="Altura"
                  placeholder="Altura"
                  name="height"
                  suffix="Cm"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.height}
                  error={errors.height && touched.height && errors.height}
                />
                <SectionTitle title="Tipo" />
                <TypesSelect
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name="types"
                  error={errors.types && touched.types && errors.types}
                />
                <SectionTitle title="Habilidades" />
                <TextInput
                  label="Habilidade 1"
                  placeholder="Habilidade 1"
                  name="abilities1"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.abilities1}
                  error={
                    errors.abilities1 && touched.abilities1 && errors.abilities1
                  }
                />
                <TextInput
                  label="Habilidade 2"
                  placeholder="Habilidade 2"
                  name="abilities2"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.abilities2}
                  error={
                    errors.abilities2 && touched.abilities2 && errors.abilities2
                  }
                />
                <TextInput
                  label="Habilidade 3"
                  placeholder="Habilidade 3"
                  name="abilities3"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.abilities3}
                  error={
                    errors.abilities3 && touched.abilities3 && errors.abilities3
                  }
                />
                <TextInput
                  label="Habilidade 4"
                  placeholder="Habilidade 4"
                  name="abilities4"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.abilities4}
                  error={
                    errors.abilities4 && touched.abilities4 && errors.abilities4
                  }
                />
                <SectionTitle title="estatística" />
                <NumberInput
                  label="Defesa"
                  placeholder="Defesa"
                  name="defense"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.defense}
                  error={errors.defense && touched.defense && errors.defense}
                />

                <NumberInput
                  label="Ataque"
                  placeholder="Ataque"
                  name="attack"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.attack}
                  error={errors.attack && touched.attack && errors.attack}
                />
                <NumberInput
                  label="Defesa Especial"
                  placeholder="Defesa Especial"
                  name="specialDefense"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.specialDefense}
                  error={
                    errors.specialDefense &&
                    touched.specialDefense &&
                    errors.specialDefense
                  }
                />
                <NumberInput
                  label="Ataque Especial"
                  placeholder="Ataque Especial"
                  name="specialAttack"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.specialAttack}
                  error={
                    errors.specialAttack &&
                    touched.specialAttack &&
                    errors.specialAttack
                  }
                />
                <NumberInput
                  label="Velocidade"
                  placeholder="Velocidade"
                  name="speed"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.speed}
                  error={errors.speed && touched.speed && errors.speed}
                />

                <div className="action-button">
                  <Button
                    text={
                      pokemonToUpdate ? 'Atualizar Pokemon' : 'Criar Pokemon'
                    }
                    type="submit"
                  />
                </div>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </Modal>
  );
};

export default NewPokemonModel;
