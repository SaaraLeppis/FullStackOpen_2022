import { useState } from 'react'

const App = () => {

  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]);
  const [newName, setNewName] = useState('');

  const ifNotInList = (name) => {
    for (let i = 0; i < persons.length; i++) {
      if (persons[i].name === name) {
        return false
      }
      else {
        return true
      }
    };
  }

  const handleAddName = (event) => {
    event.preventDefault();
    // check if name in list already
    if (ifNotInList(newName)) {
      setPersons([...persons, { name: newName }]);
      alert(`${newName} was added`);
    }
    else {
      alert(`${newName} is already in list`)
    }
    setNewName('')
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  }

  return (
    <div className='phonebook-wrapper'>
      <h2>Phonebook</h2>

      <form onSubmit={handleAddName}>
        <div>
          name:
          <input
            type="text"
            value={newName}
            onChange={handleNameChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>

      <h2>Numbers</h2>
      <ul className='numbers'>
        {persons.map(person => <li key={person.name}>{person.name}</li>)}
      </ul>
    </div>
  )
}

export default App