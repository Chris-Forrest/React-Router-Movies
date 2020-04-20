import React, { useState, useEffect } from 'react';
import { Route, Switch, Link } from 'react-router-dom'
import SavedList from './Movies/SavedList';
import axios from 'axios'


const App = () => {
  const [savedList, setSavedList] = useState([]);

  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };

  return (
    <div>
      <SavedList list={savedList} />
      <div>Replace this Div with your Routes</div>
    </div>
  );
};

export default App;
