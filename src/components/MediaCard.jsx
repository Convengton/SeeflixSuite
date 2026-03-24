import React from "react";

export default function MediaCard({ title, cover, rating, type }) {
  return (
    <div className={`media-card media-card--${type}`}>
      <div className="media-card__cover">
        <img src={cover} alt={title} />
      </div>
      <div className="media-card__info">
        <h4 className="media-card__title">{title}</h4>
        <div className="media-card__meta">
          <span className="media-card__rating">⭐ {rating}</span>
          <span className="media-card__type">{type === "movie" ? "Film" : "Série"}</span>
        </div>
      </div>
    </div>
  );
}
