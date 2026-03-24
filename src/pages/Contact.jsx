import React from "react";
import ContactForm from "../components/ContactForm";

export default function Contact() {
  return (
    <main className="container contact-page">
      <section className="contact-header">
        <h1>Contact</h1>
        <p>Besoin d’aide ? Écrivez-nous un message et nous reviendrons vers vous rapidement.</p>
      </section>
      <ContactForm />
    </main>
  );
}
