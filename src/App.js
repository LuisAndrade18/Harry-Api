import React from 'react';
import Header from './components/Header'
import Main from './components/Main';
import * as S from './style/Styled'
export default function App() {
  return (
    <div>
      <S.GlobalStyle />
      <Header />
      <Main/>
    </div>
  );
}
