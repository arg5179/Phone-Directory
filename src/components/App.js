import React, { useState, useEffect } from 'react';
import '../App.css';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';


function App() {
  const [contact, setContact] = useState(JSON.parse(localStorage.getItem("List")) ?? []);

  function addContact(contact){
    setContact((preValue) => {
      return [...preValue, contact];
    });
  }

  function deleteContact(id){
    setContact((preValue) => {
      return preValue.filter((contactItem, index) =>{
        return index!=id;
      })
    })
  }
  

  useEffect(() =>{
    localStorage.setItem("List", JSON.stringify(contact));
  }, [contact]);


  return (
    <div className="App ui container">
      <Header />

      <AddContact onAdd={addContact}/>
      
      {contact.map((contactItem, index) => {
        return (
          <ContactList 
            key={index}
            id={index}
            name={contactItem.name}
            email={contactItem.email}
            onDelete={deleteContact}
          />
        )
      })}
    </div>
  );
}

export default App;