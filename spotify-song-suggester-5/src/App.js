import React from 'react';
import { Route } from 'react-router-dom';

//import components
import './App.css';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <Route>
      <SearchBar />
    </Route>
  );
}

export default App;
