<template>
  <div>
    <h1>{{ species | upperCase }} for adoption</h1>
    <b-table striped hover :fields="fields" :items="pets">
      <template #cell(name)="data">
        <router-link :to="`pets/${species}/${data.index}`">{{ data.value }}</router-link>
      </template>
    </b-table>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  props: {
    species: String,
    pets: Array,
  },
  filters: {
    upperCase (value: string) {
      return value.toUpperCase();
    }
  }
})
export default class PetTable extends Vue {
  fields = ['name', 'breed', 'gender', 'age', 'color', 'weight', 'location', 'notes'];
}
</script>
