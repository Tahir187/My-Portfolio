import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_et649n9",
        "template_h5ejsqn",
        form.current,
        "fSlORuP4otVBeMk_u"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <div className="contact__container " id="contact">
        <h2 className="contact__heading">Contact US</h2>
        <div className="contact__sub-container">
          <form ref={form} onSubmit={sendEmail}>
            <div className="input__name-container">
              <input type="text" name="first_name" className="input__field" placeholder="First Name"/>
              <input type="text" name="last_name" className="input__field" placeholder="Last Name"/>
            </div>
            <input type="email" name="user_email" className="email__field" placeholder="Email" />
            <textarea name="message" className="message__field" placeholder="Message" rows="4"/>
            <div className="contact__button">
            <button type="submit" value="Send">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
