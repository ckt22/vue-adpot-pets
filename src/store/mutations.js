export default {
// payload in actions is destructured into { species, pet }
  appendPet: (state, { species, pet }) => {
    state[species].push(pet)
  }
}
