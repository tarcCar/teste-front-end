import { v4 as uuid } from 'uuid';

import { NewPokemonFormTypeHelper, PokemonApiHelper } from '@/helpers';

import { NewPokemonFormType } from './NewPokemonFormType';
import { PokemonHelper } from './PokemonHelper';
import { PokemonStatus } from './PokemonStatus';

export class Pokemon {
  private _status: PokemonStatus = PokemonStatus.WILD;

  private _id: string = uuid();

  private _icon!: string;

  private _name!: string;

  private _abilities!: string[];

  private _height!: number;

  private _hp!: number;

  private _weight!: number;

  private _speed!: number;

  private _attack!: number;

  private _defense!: number;

  private _specialDefense!: number;

  private _specialAttack!: number;

  private _types!: string[];

  private _isCustom = false;

  private setValuesFromHelper(helper: PokemonHelper) {
    this._icon = helper.icon;
    this._abilities = helper.abilities;
    this._attack = helper.attack;
    this._defense = helper.defense;
    this._height = helper.height;
    this._hp = helper.hp;
    this._name = helper.name;
    this._specialAttack = helper.specialAttack;
    this._specialDefense = helper.specialDefense;
    this._speed = helper.speed;
    this._types = helper.types;
    this._weight = helper.weight;
    this._isCustom = helper.isCustom;
  }

  setValuesFromPokemonApi(pokemonApi: any) {
    const pokemonApiHelper = new PokemonApiHelper(pokemonApi);
    this.setValuesFromHelper(pokemonApiHelper);
  }

  setValuesFromNewPokemonFormType(newPokemon: NewPokemonFormType) {
    const newPokemonFormTypeHelper = new NewPokemonFormTypeHelper(newPokemon);
    this.setValuesFromHelper(newPokemonFormTypeHelper);
  }

  get id(): string {
    return this._id;
  }

  get name(): string {
    return this._name;
  }

  set name(name: string) {
    this._name = name;
  }

  get abilities(): string[] {
    return this._abilities;
  }

  get height(): number {
    return this._height;
  }

  get heightFormatted(): string {
    return `${this.height.toFixed(2)} m`;
  }

  get hp(): number {
    return this._hp;
  }

  get attack(): number {
    return this._attack;
  }

  get specialAttack(): number {
    return this._specialAttack;
  }

  get defense(): number {
    return this._defense;
  }

  get specialDefense(): number {
    return this._specialDefense;
  }

  get speed(): number {
    return this._speed;
  }

  get types(): string[] {
    return this._types;
  }

  get weight(): number {
    return this._weight;
  }

  get weightFormatted(): string {
    return `${this.weight.toFixed(2)} kg`;
  }

  get icon(): string {
    return this._icon;
  }

  get status(): PokemonStatus {
    return this._status;
  }

  capture() {
    this._status = PokemonStatus.CAPTURED;
  }

  get isWild(): boolean {
    return this.status === PokemonStatus.WILD;
  }

  get isCaptured(): boolean {
    return this.status === PokemonStatus.CAPTURED;
  }

  get isCustom(): boolean {
    return this._isCustom;
  }
}
