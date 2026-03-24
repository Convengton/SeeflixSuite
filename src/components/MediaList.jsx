import React from "react";
import MediaCard from "./MediaCard";

export default function MediaList({ title, items = [] }) {
  return (
    <section className="media-list">
      <div className="media-list__header">
        <h3>{title}</h3>
      </div>
      <div className="media-list__grid">
        {items.map((item) => (
          <MediaCard key={item.id} title={item.title} cover={item.cover} rating={item.rating} type={item.type} />
        ))}
      </div>
    </section>
  );
}
