import styled, { createGlobalStyle } from "styled-components";
import Hp from '../fonts/HARRYP__.TTF';

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Harry P';
    src: url(${Hp});
  }
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
  }
`;

export const Characters = styled.img`
  width: 200px;
`

export const Names = styled.li`
font-size: 40px;
  font-family: 'Harry P';
`


export const NamesS = styled.span`
  font-size: 40px;
  font-family: 'Harry P';
`;