import { useState, useEffect } from 'react'
import axios from 'axios';

import Persons from './components/Persons';
import PersonForm from './components/PersonForm';
import Filter from './components/Filter';
import Notification from './components/Notification';

import phonebookService from './services/numbers';

const App = () => {
  const url = 'http://localhost:3001/persons/';
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [nameFilter, setNameFilter] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);

  let existingNameId = 0;

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
        setPersons([...persons, data]);
        setErrorMessage(`Added ${newData.name}`);
      })
      .catch(err => {
        const addingError = err.response.data.error;
        setErrorMessage(addingError);
        // alert(err)
      })

    setTimeout(() => { setErrorMessage(null) }, 2000);
  }

  const updateContact = (updateData) => {
    if (window.confirm(`${updateData.name} is already added to phonebook, replace the old number with new one?`)) {
      phonebookService
        .update(updateData.id, updateData)
        .then(some => {
          setPersons(persons.map(person => person.id !== updateData.id ? person : updateData))
        })
        .catch(err => {
          alert(err)
        })
    }
    setErrorMessage(`Updated ${updateData.name}`);
    setTimeout(() => { setErrorMessage(null) }, 2500);
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

      setErrorMessage(`Deleted ${event.target.name}`);
      setTimeout(() => { setErrorMessage(null) }, 2000);

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
      <Notification message={errorMessage} />
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