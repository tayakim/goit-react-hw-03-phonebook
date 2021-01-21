import React, { Component } from "react";
import ContactForm from "../contactForm/ContactForm";
import Filter from "../filter/Filter";
import ContactList from "../contactList/ContactList";
import styles from "./phonebook.module.css";

import { v4 as uuidv4 } from "uuid";

export default class Phonebook extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
    name: "",
    number: "",
  };

  componentDidMount() {
    const persistedContacts = localStorage.getItem("contacts");

    if (persistedContacts !== null) {
      this.setState({
        contacts: JSON.parse(persistedContacts),
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
  }

  onDeleteContact = (contactId) => {
    this.setState((prevState) => {
      return {
        contacts: prevState.contacts.filter(({ id }) => id !== contactId),
      };
    });
  };

  onChangeFilter = (e) => {
    this.setState({ filter: e.target.value });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;

    return contacts.filter((contacts) =>
      contacts.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
    );
  };
  onNameChange = (e) => {
    this.setState({ name: e.target.value });
  };
  onNumberChange = (e) => {
    this.setState({ number: e.target.value });
  };

  onAddContact = () => {
    const addContact = {
      id: uuidv4(),
      name: this.state.name,
      number: this.state.number,
    };

    const isUnique = !this.state.contacts
      .map((contact) => contact.name)
      .includes(addContact.name);

    console.log(isUnique);

    if (isUnique) {
      this.setState((prevState) => {
        return {
          contacts: [...prevState.contacts, addContact],
        };
      });
    } else {
      alert(addContact.name + " is already in contacts!");
    }
  };

  render() {
    const { filter } = this.state;
    const VisibleContacts = this.getVisibleContacts();

    return (
      <div className={(styles.phonebook, styles.text)}>
        <h1>Phonebook</h1>
        <ContactForm
          onHandleClick={this.onAddContact}
          onNameChange={this.onNameChange}
          onNumberChange={this.onNumberChange}
        />

        <h2>Contacts</h2>
        <Filter value={filter} onChangeFilter={this.onChangeFilter} />
        <ContactList
          contacts={VisibleContacts}
          onDeleteContact={this.onDeleteContact}
        />
      </div>
    );
  }
}
