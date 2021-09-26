const people = ["Greg", "Mary", "Devon", "James"];

function displayPeople(people) {
  people.forEach((p) => console.log(p));
}

function removePerson(personName) {
  for (let i = 0; i < people.length; i++)
    if (people[i] === personName) people.splice(i, 1);
}

function AddPerson(personName) {
  people.push(personName);
}

function AddPersonToBegining(personName) {
  people.unshift(personName);
}

function exitAfterGivenName(personName) {
  for (let i = 0; i < people.length; i++) {
    console.log(people[i]);

    if (people[i] == personName) break;
  }
}

const peopleCopyWithoutMattAndMary = people
  .slice()
  .filter((p) => p !== "Matt" && p !== "Mary");

const indexOfMary = people.indexOf("Mary");
const indexOfFoo = people.indexOf("Foo");

/** Remove Devon , add Elizabeth and Artie */
people.splice(2, 1, "Elizabeth", "Artie");

const withBob = [...people, "Bob"];
