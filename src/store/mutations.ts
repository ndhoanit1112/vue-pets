import { SPECIES } from '@/utils/constants';
import { PetsState } from './state';

export default {
  addPet: (state: PetsState, { species, pet }: any) => {
    if (species === SPECIES.dogs) {
      state.dogs.push(pet);
    } else {
      state.cats.push(pet);
    }
  }
};
