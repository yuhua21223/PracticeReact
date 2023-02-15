import React from 'react';

const Card = ({ title, description, children }) => (
  <div className="card">
    <h2>{title}</h2>
    <p>{description}</p>
    {children}
  </div>
);

export default Card;