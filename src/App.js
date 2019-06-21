import React from 'react';
import { Header } from './components/Header';
import { AppBody } from './components/AppBody/Index';
import { NavBar } from './components/NavBar';

function App() {
  return (
    <div>
      <Header/>
      <NavBar/>
      <AppBody/>
    </div>
  );
}

export default App;
