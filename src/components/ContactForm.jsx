import React from "react";

export default function ContactForm() {
  return (
    <section className="contact-form-section">
      <h2>Contactez-nous</h2>
      <p>Envoyez-nous un message et nous vous répondrons au plus vite.</p>
      <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
        <label>
          Nom
          <input type="text" name="name" placeholder="Votre nom" required />
        </label>

        <label>
          Email
          <input type="email" name="email" placeholder="Votre email" required />
        </label>

        <label>
          Message
          <textarea name="message" rows="5" placeholder="Votre message" required />
        </label>

        <button type="submit">Envoyer</button>
      </form>
    </section>
  );
}
