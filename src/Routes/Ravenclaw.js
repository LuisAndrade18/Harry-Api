import React, { useState, useEffect } from 'react';
import * as S from '../style/Styled';
import axios from 'axios';

function Gryffindor() {
  const [data, setData] = useState([]);

  const url = 'https://hp-api.herokuapp.com/api/characters/house/Ravenclaw';

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

  return (
    <div>
      <h1>Sou Grifinoria</h1>
      {data.map((item) => (
        <div>
          <h1>
            Meu nome é <S.NamesS>{item.name}</S.NamesS>
          </h1>
          <S.Characters src={item.image} alt="" />
        </div>
      ))}
    </div>
  );
}

export default Gryffindor;
