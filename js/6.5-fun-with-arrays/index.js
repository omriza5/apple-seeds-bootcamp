const person = {
  firstName: "Omri",
  lastName: "Zaher",
};

/** populate the array with "5" identical objects */
const personsArray = new Array(5).fill(person);
// console.log(personsArray);
/************************************************************************************************************** */

/**fill the array from 1 to 100  */
const numsRang = Array.from({ length: 100 }, (_, i) => i + 1);
// console.log(numsRang);

/************************************************************************************************************** */

/** map object values to an array { firstName: "Omri",lastName: "Zaher",} ==> ['Omri', 'Zaher'] */
function mapObjectValuesToArray(obj) {
  let values = [];
  for (let key in obj) {
    values.push(obj[key]);
  }

  return values;
}
// console.log(mapObjectValuesToArray(person));

/************************************************************************************************************** */

function convertArrayToObj(arr) {
  return Object.assign({}, arr);
}

// console.log(convertArrayToObj([1, 2]));
/************************************************************************************************************** */

function isArray(arr) {
  return Array.isArray(arr);
}

// console.log(isArray([]));
// console.log(isArray(12));

/************************************************************************************************************** */

const arr1 = [1, 2, 3];

function copyArrayWithoutEffectOriginal(arr) {
  return [...arr];
}

function copyArrayWithEffectOriginal(arr) {
  return arr;
}

// const newArr = copyArrayWithoutEffectOriginal(arr1);
// const newArr1 = copyArrayWithEffectOriginal(arr1);
