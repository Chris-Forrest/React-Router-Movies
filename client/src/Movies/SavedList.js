import React from 'react';
import {Route, Link} from 'react-router-dom'

const SavedList = props => (
  <div className="saved-list">
    <h3>Saved Movies:</h3>
    {props.list.map(movie => (
      <span className="saved-movie">{movie.title}</span>
    ))}
    <Route path='/movies/:id'>
      <Link to='/'>
    <div className="home-button">Home</div>
      </Link>
    </Route>
  </div>
);

export default SavedList;
