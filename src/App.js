import React from 'react';
import Api from './components/Api';
import Main from './components/Main';
import * as S from './style/Styled'
export default function App() {
  return (
    <div>
      <S.GlobalStyle/>
      {/* <Api /> */}
      <Main/>
    </div>
  );
}
