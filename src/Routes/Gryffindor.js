import React, { useState, useEffect } from 'react';
import * as S from '../style/Styled';
import axios from 'axios';

function Gryffindor() {
  const [data, setData] = useState([]);

  const url = 'https://hp-api.herokuapp.com/api/characters';

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(`erro ${error}`);
      });
  }, []);

  const Houses = data.map((item) => item.house);

  const House = () => {
    Houses.forEach((i) => {
      if (i === 'Slytherin') {
      
        console.log(i)

        return (
          <div>
            <h1>olá</h1>
          </div>
        ) 

      }
    });
  };

  console.log(House)

  return (
    <div>

      {Houses.map((item) => (
        <div>
          <p>{item}</p>
  </div>
))}
    
      
    </div>
  );
}

export default Gryffindor;
