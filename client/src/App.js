import React, { useState } from 'react';

import SavedList from './Movies/SavedList';
// imports the use of Route in the file
import { Route } from 'react-router-dom';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
      <SavedList list={savedList} />
      {/* creates route that displays the movies list component
      in the file when on the home page*/}
      <Route exact path="/" component={MovieList} />
      <Route path="/movies/:id" component={Movie} />
    </div>
  );
};


export default App;
