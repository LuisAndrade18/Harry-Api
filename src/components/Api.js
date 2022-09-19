import React, { useState, useEffect } from 'react';
import * as S from '../style/Styled'
import axios from 'axios';

function Api() {
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
  console.log(data)

  return (
    <div>
      {data.map((item, index) => (
        <div key={index}>
          <ul>
            <S.Names>{item.name}</S.Names>
          </ul>
          <S.Characters src={item.image} alt="" />
        </div>
      ))}
    </div>
  );
}

export default Api;
