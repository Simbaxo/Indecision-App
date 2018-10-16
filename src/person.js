// export const isAdult = (age) => {
//   if (age >= 18) {
//     return true
//   } else {
//     return false
//   }
// }

// export const canDrink = (age) => {
//   if (age >= 21) {
//     return true
//   } else {
//     return false
//   }
// }

export const isAdult = (age) => age >= 18
export const canDrink = (age) => age >= 21

const isSenior = (age) => age >= 65

export default isSenior