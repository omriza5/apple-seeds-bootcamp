function Pokemon(pokemonName, pokemonType, pokemonAttackList) {
  this.name = pokemonName;
  this.type = pokemonType;
  this.attackList = pokemonAttackList;

  this.callPokemon = function () {
    return `I choose you ${this.name}`;
  };

  this.attack = function (attackNumber) {
    return `${this.name} uses ${this.attackList[attackNumber]}`;
  };
}

const poke1 = new Pokemon("Bulbasaur", "grass poisn", ["attack1", "attack2"]);
const poke2 = new Pokemon("Pikachu", "Electric", ["attack3", "attack4"]);
const poke3 = new Pokemon("Mew", "Psychic", ["attack5", "attack6"]);

console.log(poke1.callPokemon());
console.log(poke1.attack(1));
