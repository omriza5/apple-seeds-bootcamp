let personId = 0;
export const data = [
  {
    name: "John",
    birthday: "1-1-1995",
    favoriteFoods: {
      meats: ["hamburgers", "sausages"],
      fish: ["salmon", "pike"],
    },
  },
  {
    name: "Mark",
    birthday: "10-5-1980",
    favoriteFoods: {
      meats: ["hamburgers", "steak", "lamb"],
      fish: ["tuna", "salmon", "barracuda"],
    },
  },
  {
    name: "Mary",
    birthday: "1-10-1977",
    favoriteFoods: {
      meats: ["ham", "chicken"],
      fish: ["pike"],
    },
  },
  {
    name: "Thomas",
    birthday: "1-10-1990",
    favoriteFoods: {
      meats: ["bird", "rooster"],
      fish: ["salmon"],
    },
  },
  {
    name: "Johnny",
    birthday: "1-10-1992",
    favoriteFoods: {
      meats: ["hamburgers", "lamb"],
      fish: ["anchovies", "tuna"],
    },
  },
];

export const extractAllNames = (data) => {
  return data.map((item) => ({ id: personId++, name: item.name }));
};

export const filterDataByYear = (data, year) => {
  return data.filter((item) => parseInt(item.birthday.split("-")[2]) < year);
};
