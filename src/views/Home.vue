<template>
  <div class="home-view-container">
    <h1>Adopt a new best friend.</h1>
    <h5>Total no. of Pets ready for Adoption: {{ petsCount }}</h5>
    <h3>
      <font-awesome-icon icon="cat"/>
      {{ catsCount }} +
      <font-awesome-icon icon="dog"/>
      {{ dogsCount }}
    </h3>

    <b-row align-h="center" class="mt-5">
      <b-col cols="12" md="8">
        <h2>Add new Pet</h2>
        <b-form @submit.prevent="handleSubmit">
          <b-form-group id="name" label="Pet's Name:" label-for="name">
            <b-form-input
              id="name"
              type="text"
              v-model="formData.name"
              required
              placeholder="Enter name" />
          </b-form-group>

          <b-form-group id="exampleInputGroup3" label="Species:" label-for="species">
            <b-form-select id="species" :options="speciesList" v-model="formData.species" required />
          </b-form-group>

          <b-form-group id="exampleInputGroup3" label="Gender:" label-for="gender">
            <b-form-select id="gender" :options="genderList" v-model="formData.gender" required />
          </b-form-group>

          <b-form-group id="age" label="Pet's Age:" label-for="age">
            <b-form-input
              id="age"
              type="number"
              v-model="formData.age"
              required
              placeholder="Enter age" />
          </b-form-group>

          <div class="text-center">
            <b-button type="submit" variant="primary">Submit</b-button>
            <b-button type="reset" variant="danger" class="ml-2">Reset</b-button>
          </div>
        </b-form>
      </b-col>
    </b-row>
  </div>
</template>

<script lang="ts">
import { SPECIES } from '@/utils/constants';
import { Component, Vue } from 'vue-property-decorator';
import { mapGetters } from 'vuex';

@Component({
  computed: {
    ...mapGetters([
      'petsCount',
      'dogsCount',
      'catsCount',
    ])
  }
})
export default class Home extends Vue {
  speciesList = [SPECIES.dogs, SPECIES.cats];

  genderList = ['male', 'female'];

  formData = {
    name: '',
    species: null,
    gender: null,
    age: null,
  }

  handleSubmit() {
    const payload = {
      species: this.formData.species,
      pet: {
        name: this.formData.name,
        gender: this.formData.gender,
        age: this.formData.age,
      }
    };

    this.$store.dispatch('addPet', payload);

    this.formData = {
      name: '',
      species: null,
      gender: null,
      age: null,
    };
  }
}
</script>
