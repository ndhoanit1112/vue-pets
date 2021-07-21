import { PetModel } from './../typings/Pet.model';
import cats from '../data/cats';
import dogs from '../data/dogs';

export interface PetsState{
  cats: PetModel[],
  dogs: PetModel[],
  pets: PetModel[],
}

export default {
  cats,
  dogs,
  pets: [...dogs, ...cats],
} as PetsState;
