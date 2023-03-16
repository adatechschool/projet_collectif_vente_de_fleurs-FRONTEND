import React from 'react';

const ItemNoLink = ({ informations, title }) => {
  return (
    <div>
      <h1 className="mb-2 font-extrabold">{title}</h1>
      <ul>
        {informations.map((information) => (
          <li key={information.name}>{information.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ItemNoLink;
