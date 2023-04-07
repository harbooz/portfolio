import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

function GetInTouch() {
  const formRef = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
  };

  //   emailjs
  //     .sendForm("gmail", "template_khz2tis", form.current, "HPp_TMIgmVZRy9rBbjEr")
  //     .then(
  //       () => {
  //         alert("Send");
  //         window.location.reload(false);
  //       },
  //       () => {
  //         alert("Failed");
  //       }
  //     );

  emailjs
    .send("template_khz2tis", "template_khz2tis", formRef, "tMHirzKUIfNOZwRuS")
    .then(
      (response) => {
        console.log("SUCCESS!", response.status, response.text);
      },
      (err) => {
        console.log("FAILED...", err);
        <p>Something went wrong</p>;
      }
    );

  return (
    <div className="">
      <form ref={formRef} onSubmit={sendEmail}>
        <input type="text" name="name" placeholder="Name" required />
        <br />
        <input type="email" name="email" placeholder="Email" required />
        <br />
        <input type="text" name="subject" placeholder="Subject" required />
        <br />
        <textarea name="message" placeholder="Message" required></textarea>
        <br />
        <input type="submit" name="submit" value="Submit" />
      </form>
    </div>
  );
}

export default GetInTouch;
