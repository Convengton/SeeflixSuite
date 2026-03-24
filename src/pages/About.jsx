import React from "react";

export default function About() {
  return (
    <main className="container about-page">
      <section className="about-hero">
        <h1>À propos de Seeflix</h1>
        <p>
          Seeflix est une plateforme de streaming fictive créée pour mettre en valeur le meilleur du cinéma et des séries.
          Notre objectif est de faire découvrir des univers passionnants à chaque utilisateur.
        </p>
      </section>

      <section className="about-mission">
        <h2>Notre mission</h2>
        <p>
          Offrir une expérience fluide et personnalisée, en mettant l’accent sur la qualité du contenu, la diversité des genres et la
          simplicité d'accès. Seeflix veut connecter chaque utilisateur à ses coups de cœur, qu'il s'agisse de blockbusters,
          de classiques ou de nouvelles séries prometteuses.
        </p>
      </section>

      <section className="about-values">
        <h2>Nos valeurs</h2>
        <ul>
          <li>Passion pour le storytelling</li>
          <li>Inclusivité et diversité</li>
          <li>Innovation et accessibilité</li>
        </ul>
      </section>
    </main>
  );
}
