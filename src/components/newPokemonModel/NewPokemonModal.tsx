import React from 'react';

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
          <form className="pokemon-form">
            <TextInput label="Nome" placeholder="Nome" name="nome" />
            <NumberInput label="Hp" placeholder="HP" name="hp" />
            <NumberInput
              label="Peso"
              placeholder="Peso"
              name="peso"
              suffix="Kg"
            />
            <NumberInput
              label="Altura"
              placeholder="Altura"
              name="altura"
              suffix="Cm"
            />
            <SectionTitle title="Tipo" />
            <TypesSelect onTypesSelected={onTypesSelectedHandler} />
            <SectionTitle title="Habilidades" />
            <TextInput
              label="Habilidade 1"
              placeholder="Habilidade 1"
              name="habilidade1"
            />
            <TextInput
              label="Habilidade 2"
              placeholder="Habilidade 2"
              name="habilidade2"
            />
            <TextInput
              label="Habilidade 3"
              placeholder="Habilidade 3"
              name="habilidade3"
            />
            <TextInput
              label="Habilidade 4"
              placeholder="Habilidade 4"
              name="habilidade4"
            />
            <SectionTitle title="estatística" />
            <NumberInput label="Defesa" placeholder="Defesa" name="defesa" />
            <NumberInput label="Ataque" placeholder="Ataque" name="ataque" />
            <NumberInput
              label="Defesa Especial"
              placeholder="Defesa Especial"
              name="defesa-especial"
            />
            <NumberInput
              label="Ataque Especial"
              placeholder="Ataque Especial"
              name="ataque-especial"
            />
            <NumberInput
              label="Velocidade"
              placeholder="Velocidade"
              name="velocidade"
            />
          </form>
        </div>

        <div className="action-button">
          <Button onClick={addNewPokemonClickHandler} text="Criar Pokemon" />
        </div>
      </div>
    </Modal>
  );
};

export default NewPokemonModel;
