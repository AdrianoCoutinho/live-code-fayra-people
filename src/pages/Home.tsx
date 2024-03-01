import React, { useEffect, useState } from 'react';
import DefaultLayout from '../config/layout/DefaultLayout';
import { getAllPeople } from '../api';

const Home: React.FC = () => {
  const [people, setPeople] = useState<any[]>([]);


  const getPageAllPeople = async () => {
    const result = await getAllPeople()
    setPeople(result)
    console.log(result);
  }

  useEffect(() => {
    getPageAllPeople()
  },[])


  return (
    <DefaultLayout>
      <h1>Home</h1>
      <div>
      {people && people.map((peopleOne, index) => {
        return (
          <div key={index}>
            <p>{peopleOne.name} {peopleOne.last_name}</p>
            <img alt={peopleOne.name} src={peopleOne.avatar}/>
            <p>{peopleOne.phone}</p>
            <br/>
          </div>
        )
      })}
      </div>

    </DefaultLayout>
  );
};

export default Home;
