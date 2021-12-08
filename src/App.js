import React, { useState } from 'react'
import data from './data'
import List from './List'
function App() {
  const [people, setPeople] = useState(data)
 
  return (
    <main>
      <section className='container'>
        <h3>{people.length} Persons Profile</h3>
        <div className="sub-class">
          <List people={people}/>
          <button onClick={() => setPeople([])}>clear all</button>
        </div>
      </section>
    </main>
  )
}

export default App;
