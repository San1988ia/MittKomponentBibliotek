import React from "react";
import "./Card.scss";

interface CardProps {
  title: string;
  content: string;
  imageUrl?: string;
}

const Card: React.FC<CardProps> = ({ title, content, imageUrl }) => (
  <div className="card">
    {imageUrl && <img src={imageUrl} alt={title} className="card-img" />}
    <div className="card-body">
      <h3 className="card-title">{title}</h3>
      <p className="card-content">{content}</p>
    </div>
  </div>
);

export default Card;
