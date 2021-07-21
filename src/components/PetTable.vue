<template>
  <div>
    <h1>{{ species | upperCase }} for adoption</h1>
    <b-table striped hover :fields="fields" :items="pets">
      <template #cell(name)="data">
        <router-link :to="`pets/${species}/${data.index}`">{{ data.value }}</router-link>
      </template>
      <template #cell(adopt)="data">
        <b-button pill variant="outline-success" @click.prevent="adoptPet(data.index)">
          Adopt
        </b-button>
      </template>
    </b-table>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

// Define the props to use them in PetTable class component
const PetTableProps = Vue.extend({
  props: {
    species: String,
    pets: Array,
  }
});

@Component({
  filters: {
    upperCase (value: string) {
      return value.toUpperCase();
    }
  }
})
export default class PetTable extends PetTableProps {
  fields = ['name', 'breed', 'gender', 'age', 'color', 'weight', 'location', 'notes', 'adopt'];

  adoptPet(index: number) {
    this.$store.dispatch('adoptPet', { species: this.species, index });
  }
}
</script>
