import { useState, useEffect } from 'react'
import Persons from './components/Persons';
import PersonForm from './components/PersonForm';
import Filter from './components/Filter';

import axios from 'axios';

const App = () => {

  const url = 'http://localhost:3001/persons';
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [nameFilter, setNameFilter] = useState('');


  useEffect(() => {
    axios
      .get(url).then(response => {
        setPersons(response.data)
      })
  }, []);

  const ifNotInList = (name) => {
    for (let i = 0; i < persons.length; i++) {
      if (persons[i].name === name) {
        return false
      }
    } return true
  };

  const handleAddName = (event) => {
    event.preventDefault();
    // check if name in list already
    if (ifNotInList(newName)) {
      console.log('not in list', newName)
      setPersons([...persons, { name: newName, number: phoneNumber }]);
      alert(`${newName} was added`);
    }
    else {
      alert(`${newName} is already in list`)
    }
    setNewName('')
    setPhoneNumber('')
  };

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  };
  const handleNumberChange = (event) => {
    setPhoneNumber(event.target.value)
  };
  const handleFilter = (event) => {
    setNameFilter(event.target.value)
  };

  return (
    <div className='phonebook-wrapper'>
      <h2>Phonebook</h2>
      <Filter
        filterChange={handleFilter}
        nameFilter={nameFilter}
      />
      <h2>Add a new</h2>
      <PersonForm
        submit={handleAddName}
        newName={newName}
        nameChange={handleNameChange}
        numberChange={handleNumberChange} phoneNumber={phoneNumber} />
      <h2>Numbers</h2>

      <Persons
        data={persons}
        filter={nameFilter} />
    </div >
  )
};

export default App