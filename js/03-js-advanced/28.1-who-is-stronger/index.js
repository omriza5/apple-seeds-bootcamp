/**
 * 1. What is wrong with the code? explain in your own words
 * 2. Fix the code so that invoking the whoIsStronger function
 * will print "I am stronger".
 * note: you cannot change the 'hero' or the whoIsStronger function.
 */
const hero = {
  health: 5,
  power: 68,
  getStrength: function () {
    if (this.health <= 5) {
      return this.power - 10;
    } else return this.power;
  },
};
function whoIsStronger(getStrength) {
  const myStrength = 82;

  if (getStrength() < myStrength) {
    return "I am stronger";
  } else return "You are stronger";
}

const getStrength = hero.getStrength.bind(hero);
console.log(whoIsStronger(getStrength));

/** the problem was that we are calling the  getStrength function as a stand alone function
 *  without binding it first (this will not point to hero object)
 *  the solution is to bind the function to point to hero object:
 *  const getStrength = hero.getStrength.bind(hero);
 */
