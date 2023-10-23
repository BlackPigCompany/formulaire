import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const FormTemplate = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_flhge9m",
        "template_d8ibw66",
        form.current,
        "iRwlAw5DQ5lTQrYfj"
      )
      .then(
        (result) => {
          console.log(result.text);
          window.location.href = "http://localhost:3000/";
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div>
      <h1>Contactez-moi</h1>
      <form ref={form} onSubmit={sendEmail} className="formulaire  box">
        <label>Name</label>
        <div className="input-div">
          <input
            type="text"
            name="name"
            placeholder="Qui es-tu ?"
            autoComplete="off"
            required
          />
        </div>
        <label>Email</label>
        <div className="input-div">
          <input
            type="email"
            name="email"
            placeholder="example@gmail.com"
            required
          />
        </div>
        <label>Message</label>
        <div className="input-div">
          <textarea
            name="message"
            placeholder=" Salut ! 👋 
      Dis-moi tout ! 🧐 "
            required
          />
        </div>
        <input id="btn-form" type="submit" value="Envoyer" />
      </form>
    </div>
  );
};
export default FormTemplate;
