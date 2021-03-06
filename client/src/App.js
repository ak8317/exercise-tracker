import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import ExercisesList from './components/exercises-list';
import EditExercise from './components/edit-exercises';
import CreateExercise from './components/create-exercises';
import CreateUser from './components/create-user';

function App() {
  return (
    <Router>
      <div className='container'>
        <Navbar />
        <br />
        <Route path='/' exact component={ExercisesList} />
        <Route path='/edit/:id' exact component={EditExercise} />
        <Route path='/create' exact component={CreateExercise} />
        <Route path='/user' exact component={CreateUser} />
      </div>
    </Router>
  );
}

export default App;
