import React, { useState, useEffect, Fragment } from "react";
import { data, extractAllNames, filterDataByYear } from "./data";
import Names from "./names";
import Card from "./card";

const DataMassaging = () => {
  const [persons, setPersons] = useState([]);

  useEffect(() => {
    setPersons(data);
  }, []);
  console.log(persons);
  filterDataByYear(persons, 1990);
  return (
    <Fragment>
      <div className="names">
        <h1>Names</h1>
        <Names names={extractAllNames(persons)} />
      </div>
      <div className="cards">
        <h1>Born Before 1990</h1>

        {filterDataByYear(persons, 1990).map((person) => (
          <Card person={person} key={person.id} />
        ))}
      </div>
    </Fragment>
  );
};

export default DataMassaging;
