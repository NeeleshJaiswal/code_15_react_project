import './App.css';
import { List } from './List';
import data from './data';
import { useState } from 'react';

function App() {
  const [people, setPeople] =  useState(data)
  return <main>
    <section className='container'>
      <h3>{people.length} birthday today</h3>
      <List people={people}></List>
      <button onClick={() => setPeople([])}
      ><h4>Clear All</h4></button>
    </section>
  </main>
}

export default App;
