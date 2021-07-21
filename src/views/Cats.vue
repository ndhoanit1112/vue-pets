<template>
  <PetTable species="cats" :pets="cats"/>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { mapState } from 'vuex';
import PetTable from '../components/PetTable.vue';

@Component({
  components: {
    PetTable
  },
  computed: {
    ...mapState([
      'cats'
    ])
  }
})
export default class Cats extends Vue {

}
</script>

<style scoped>

</style>
