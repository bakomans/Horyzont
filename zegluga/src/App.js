import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from '../src/components/menu';
import Horyzont from '../src/components/horyzont';
import Czartery from '../src/components/czartery';
import Terminy from '../src/components/terminy';
import Cennik from '../src/components/cennik';
import Jachty from '../src/components/jachty';
import Galeria from '../src/components/galeria';
import Regulamin from '../src/components/regulamin';
import NapiszDoNas from '../src/components/contact';
import Footer from '../src/components/footer'; 

function App() {
  return (
    <Router>
      <div>
        <Menu />
        <Routes>
          <Route path="/horyzont" element={<Horyzont />} />
          <Route path="/czartery" element={<Czartery />} />
          <Route path="/terminy" element={<Terminy />} />
          <Route path="/cennik" element={<Cennik />} />
          <Route path="/jachty" element={<Jachty />} />
          <Route path="/galeria" element={<Galeria />} />
          <Route path="/regulamin" element={<Regulamin />} />
          <Route path="/contact" element={<NapiszDoNas />} />
        </Routes>
        <Footer /> {}
      </div>
    </Router>
  );
}

export default App;
