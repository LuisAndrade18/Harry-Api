import React from 'react';
import { BrowserRouter, Route, Routes, Link  } from 'react-router-dom';
import Gryffindor from '../Routes/Gryffindor';
import Slytherin from '../Routes/Slytherin';
import Hufflepuff from '../Routes/Hufflepuff';
import Ravenclaw from '../Routes/Ravenclaw';

const Header = () => {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to='home'>Hogwarts</Link>
          </li>
          <li>
            <Link to="grif">Grifinoria</Link>
          </li>
          <li>
            <Link to='sons'>Sonserina</Link>
          </li>
          <li>
            <Link to='lufa'>Lufa-Lufa</Link>
          </li>
          <li>
            <Link to='corv'>Corvinal</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="home" />
        <Route path="grif" element={<Gryffindor />} />
        <Route path="sons" element={<Slytherin />} />
        <Route path="lufa" element={<Hufflepuff />} />
        <Route path="corv" element={<Ravenclaw />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Header;
