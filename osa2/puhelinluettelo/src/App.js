import { useState } from 'react'

const App = () => {

  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-1231244' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]);
  const [newName, setNewName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [filter, setFilter] = useState('');

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
    setNewName(event.target.value)
  };
  const handleNumberChange = (event) => {
    setPhoneNumber(event.target.value)
  };
  const handleFilter = (event) => {
    console.log(event.target.value);
    setFilter(event.target.value);
  };

  return (
    <div className='phonebook-wrapper'>
      <h2>Phonebook</h2>
      <div>
        filter shown with:
        <input
          name="filter"
          type="text"
          value={filter}
          onChange={handleFilter} />
      </div>

      <form onSubmit={handleAddName}>
        <div className='inputs-wrapper'>
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
        {
          persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()) || filter === '').map(person => <li key={person.name}>{person.name} {person.number}</li>)
        }
      </ul>
    </div>
  )
}

export default App