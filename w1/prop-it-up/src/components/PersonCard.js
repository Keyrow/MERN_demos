import React, { useState } from "react";

const PersonCard = ({ firstName, lastName, age, hairColor, hobbies }) => {
  const [ageState, setAgeState] = useState(age);
  const [allAges, setAllAges] = useState([age]);

  const handleBirthdayClick = event => {
    const newAge = ageState + 1;

    setAgeState(newAge);
    console.log(ageState);
    setAllAges([...allAges, newAge]);
  };

  const renderAllAges = () => {
    return allAges.map((ageVal, idx) => <span key={idx}>{ageVal} </span>);
  };

  // create array of list items for each hobby
  // this is what you have to do if you don't use .map
  const getHobbyListItems = () => {
    const hobbyListItems = [];

    for (let i = 0; i < hobbies.length; ++i) {
      hobbyListItems.push(<li key={i}>{hobbies[i]}</li>);
    }

    return hobbyListItems;
  };

  return (
    <div className="person-card">
      <h2>
        {lastName}, {firstName}
      </h2>
      <p>Age: {ageState}</p>
      <p>Hair Color: {hairColor}</p>

      <button onClick={handleBirthdayClick}>
        Birthday Button For {firstName} {lastName}
      </button>

      <div>
        <p>All Ages:</p>
        {renderAllAges()}
      </div>
      <div>
        <p>Hobbies:</p>
        <ul>
          {hobbies.map((hobby, idx) => {
            return <li key={idx}>{hobby}</li>;
          })}
        </ul>
      </div>

      <div>
        <p>Hobbies Without Map:</p>
        <ul>{getHobbyListItems()}</ul>
      </div>
    </div>
  );
};

export default PersonCard;
