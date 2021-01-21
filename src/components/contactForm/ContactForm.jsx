import React from "react";
import styles from "./contactForm.module.css";

const ContactForm = ({ onHandleClick, onNameChange, onNumberChange }) => {
  return (
    <>
      <p>Name</p>

      <input
        placeholder="Name"
        id="name"
        type="text"
        onChange={onNameChange}
      ></input>
      <p>Number</p>
      <input placeholder="Number" id="number" onChange={onNumberChange}></input>
      <br></br>
      <button type="button" onClick={onHandleClick} className={styles.button}>
        Add contacts
      </button>
    </>
  );
};

export default ContactForm;
