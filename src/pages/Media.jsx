import React from "react";
import MediaList from "../components/MediaList";
import { trending_movies } from "../data/trending_movies";
import { top_shows } from "../data/top_shows";

export default function Media() {
  const allMedia = [...trending_movies, ...top_shows];

  return (
    <div className="media-page">
      <main className="container">
        <section className="page-header">
          <h1>Catalogue complet</h1>
          <p>Explorez tous les films et séries disponibles sur Seeflix.</p>
        </section>
        <MediaList title="Tous les contenus" items={allMedia} />
      </main>
    </div>
  );
}
