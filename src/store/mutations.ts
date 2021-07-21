import { SPECIES } from '@/utils/constants';
import { PetsState } from './state';

export default {
  addPet: (state: PetsState, { species, pet }: any) => {
    if (species === SPECIES.dogs) {
      state.dogs.push(pet);
    } else {
      state.cats.push(pet);
    }
  },
  adoptPet: (state: PetsState, { species, index }: any) => {
    if (species === SPECIES.dogs) {
      state.dogs.splice(index, 1);
    } else {
      state.cats.splice(index, 1);
    }
  }
};
