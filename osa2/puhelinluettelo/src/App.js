import { useState, useEffect } from 'react'
import axios from 'axios';

import Persons from './components/Persons';
import PersonForm from './components/PersonForm';
import Filter from './components/Filter';

import phonebookService from './services/numbers';

const App = () => {
  const url = 'http://localhost:3001/persons';
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [nameFilter, setNameFilter] = useState('');

  let existingNameId = 0;

  // const updateList = () => {
  //   numbersService
  //     .getAll()
  //     .then(phoneBookContent => {
  //       console.log(phoneBookContent, 'pbc');
  //       setPersons(phoneBookContent)
  //     })
  //     .catch((error) => {
  //       console.log(error)
  //     })
  // }

  //on load get numbers from db 
  useEffect(() => {
    phonebookService
      .getAll()
      .then(phoneBookContent => {
        setPersons(phoneBookContent)
      })
      .catch((error) => {
        console.log(error)
      })
  }, []);


  const ifNotInList = (name) => {
    for (let i = 0; i < persons.length; i++) {
      if (persons[i].name === name) {
        existingNameId = persons[i].id;
        return false
      }
    } return true
  };
  const addNewContact = (newData) => {
    phonebookService
      .create(newData)
      .then(data => {
        console.log(data, 'data')
        setPersons([...persons, data]);
      })
      .catch(err => {
        alert(err)
      })
    alert(`${newName} was added`);
  }

  const updateContact = (updateData) => {
    if (window.confirm(`${updateData.name} is already added to phonebook, replace the old number with new one?`)) {
      phonebookService
        .update(updateData.id, updateData)
        .then(some => {
          console.log(some, 'in create')
          setPersons(persons.map(person => person.id !== updateData.id ? person : updateData))
        })
    }
  }

  const handleAddName = (event) => {
    event.preventDefault();
    if (ifNotInList(newName)) {
      const newData = {
        name: newName,
        number: phoneNumber
      }
      addNewContact(newData)
    }
    else {
      const newObject = {
        name: newName,
        number: phoneNumber,
        id: existingNameId
      }
      updateContact(newObject);
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

  const handleRemove = (event) => {
    event.preventDefault();
    if (
      window.confirm(`Delete ${event.target.name}`)) {
      phonebookService
        .remove(event.target.value);

      setPersons(
        persons.filter((person) => {
          return person.name !== event.target.name;
        })
      )
    }
  }

  return (
    <div className='phonebook-wrapper'>
      <h2>Phonebook</h2>
      <Filter
        filterChange={handleFilter}
        nameFilter={nameFilter} />
      <h2>Add a new</h2>
      <PersonForm
        submit={handleAddName}
        newName={newName}
        nameChange={handleNameChange}
        numberChange={handleNumberChange}
        phoneNumber={phoneNumber} />
      <h2>Numbers</h2>
      <Persons
        data={persons}
        nameFilter={nameFilter}
        handleRemove={handleRemove} />
    </div >
  )
};

export default App;