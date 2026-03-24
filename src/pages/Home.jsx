import React from "react";
import Header from "../components/Header";
import MediaList from "../components/MediaList";
import { trending_movies } from "../data/trending_movies";
import { top_shows } from "../data/top_shows";

export default function Home() {
  return (
    <div>
      <Header />

      <main className="container">
        <MediaList title="Trending Movies" items={trending_movies} />
        <MediaList title="Top TV Shows" items={top_shows} />
      </main>
    </div>
  );
}
