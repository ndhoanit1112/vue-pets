<template>
  <b-row align-h="center">
    <b-col cols="12" sm="8" md="5">
      <h1>Pet Details</h1>
      <b-card
        v-if="pet"
        no-body
        style="max-width: 30rem;"
        :img-src="pet.imageUrl || `https://thumbs.dreamstime.com/b/dog-cat-paw-print-symbol-black-white-silhouette-icon-logo-design-element-isolated-vector-clip-art-illustration-166771365.jpg`"
        img-alt="Image"
        img-top
      >
        <b-card-body>
          <b-card-title>{{ pet.name }}</b-card-title>
          <b-card-sub-title class="mb-2">{{ $route.params.species }}</b-card-sub-title>
          <b-card-text>
            {{ pet.notes }}
          </b-card-text>
        </b-card-body>

        <b-list-group flush>
          <b-list-group-item>Breed: {{ pet.breed }}</b-list-group-item>
          <b-list-group-item class="d-flex justify-content-between">
            <span>Age: {{ pet.age }}</span>
            <span>Gender: {{ pet.gender }}</span>
          </b-list-group-item>
          <b-list-group-item class="d-flex justify-content-between">
            <span>Weight: {{ pet.weight }}</span>
            <span>Color: {{ pet.color }}</span>
          </b-list-group-item>
          <b-list-group-item>Location: {{ pet.location }}</b-list-group-item>
        </b-list-group>
      </b-card>
    </b-col>
  </b-row>
</template>

<script lang="ts">
import { PetModel } from '@/typings/Pet.model';
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Pet extends Vue {
  pet: PetModel | null = null;

  mounted() {
    this.pet = this.$store.getters.getPetByIndex(this.$route.params.species, this.$route.params.id);
  }
}
</script>

<style scoped>

</style>
