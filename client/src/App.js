import React, { useState } from 'react';

import SavedList from './Movies/SavedList';
import { Router } from 'express';
import MovieList from './Movies/MovieList';

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
      <SavedList list={savedList} />
      <Router path="/" component={MovieList} />
    </div>
  );
};


export default App;
