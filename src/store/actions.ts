export default {
  addPet: ({ commit }: any, payload: any) => {
    commit('addPet', payload);
  },
  adoptPet: ({ commit }: any, payload: any) => {
    commit('adoptPet', payload);
  }
};
