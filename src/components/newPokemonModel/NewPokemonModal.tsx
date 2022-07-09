import React from 'react';

import { Formik } from 'formik';

import Button from '../button/Button';
import ImageInput from '../imageInput/ImageInput';
import Modal from '../modal/Modal';
import NumberInput from '../numberInput/NumberInput';
import SectionTitle from '../pokemonStats/sectionTitle/SectionTitle';
import TextInput from '../textInput/TextInput';
import TypesSelect from '../typesSelect/TypesSelect';

type Props = {
  onClose: () => void;
};

const NewPokemonModel: React.FC<Props> = ({ onClose }) => {
  const addNewPokemonClickHandler = () => {
    console.log(`new`);
    onClose();
  };

  const onTypesSelectedHandler = (types: string[]) => {
    console.log(types);
  };

  return (
    <Modal onClose={onClose}>
      <div className="modal-pokemon">
        <div className="avatar-container">
          <ImageInput />
        </div>

        <div className="infos-container">
          <Formik
            initialValues={{
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
            }}
            validate={(values) => {
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
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }, 400);
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
              isValid,
            }) => (
              <form onSubmit={handleSubmit} className="pokemon-form">
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
                <TypesSelect onTypesSelected={onTypesSelectedHandler} />
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
              </form>
            )}
          </Formik>
        </div>

        <div className="action-button">
          <Button onClick={addNewPokemonClickHandler} text="Criar Pokemon" />
        </div>
      </div>
    </Modal>
  );
};

export default NewPokemonModel;
