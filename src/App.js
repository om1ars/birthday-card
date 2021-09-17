import data  from './data'
import React, {useState} from 'react';
import List from './List'

function App() {
  const [people, setPeople] = useState(data)
  console.log(people);

  return (
  <main>
    <section className='container'>
      <h3>{people.length} - ni tugilgan kuni</h3>
      <List people={people}/>
      <button onClick={() => setPeople([])}>Hammsini Yop</button>
    </section>
  </main>
  )
}

export default App;
