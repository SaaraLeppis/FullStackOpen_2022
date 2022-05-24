import { useState } from 'react'

const App = () => {

  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-1231244' }
  ]);
  const [newName, setNewName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('')

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
      setPersons([...persons, { name: newName, number: phoneNumber }]);
      alert(`${newName} was added`);
    }
    else {
      alert(`${newName} is already in list`)
    }
    setNewName('');
    setPhoneNumber('')
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  }
  const handleNumberChange = (event) => {
    setPhoneNumber(event.target.value);
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
          number:
          <input
            type='text'
            value={phoneNumber}
            onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>

      <h2>Numbers</h2>
      <ul className='numbers'>
        {persons.map(person => <li key={person.name}>{person.name} {person.number}</li>)}
      </ul>
    </div>
  )
}

export default App