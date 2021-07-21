import { PetModel } from './../typings/Pet.model';
import { SPECIES } from './../utils/constants';
import { PetsState } from './state';

export default {
  getPetByIndex: (state: PetsState) => (species: string, index: number): PetModel => {
    if (species === SPECIES.dogs) {
      return state.dogs[index];
    } else {
      return state.cats[index];
    }
  },
  petsCount: (_state: PetsState, getters: any): number => {
    return getters.catsCount + getters.dogsCount;
  },
  catsCount: (state: PetsState): number => {
    return state.cats.length;
  },
  dogsCount: (state: PetsState): number => {
    return state.dogs.length;
  }
};
