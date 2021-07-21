<template>
  <PetTable species="dogs" :pets="dogs"/>
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
      'dogs'
    ])
  }
})
export default class Dogs extends Vue {

}
</script>

<style scoped>

</style>
