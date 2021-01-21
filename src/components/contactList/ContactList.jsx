import React from "react";
import styles from "./contactsList.module.css";

const ContactList = ({ contacts, onDeleteContact }) => (
  <ul className={styles.list}>
    {contacts.map(({ name, number, id }) => (
      <>
        <li key={id} className={styles.item}>
          {name}: {number}
          <button
            type="button"
            onClick={() => onDeleteContact(id)}
            className={styles.button}
          >
            Delete
          </button>
        </li>
      </>
    ))}
  </ul>
);

export default ContactList;
