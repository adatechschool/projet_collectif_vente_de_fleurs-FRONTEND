import React from 'react';

const ItemLink = ({ Links, title }) => {
  return (
    <ul>
      <h1 className="mb-2 font-extrabold">{title}</h1>

      {Links.map((link) => (
        <li key={link.name}>
          <a
            className="text-white hover:text-teal-600 duration-300
          text-m cursor-pointer leading-6"
            href={link.link}
          >
            {link.name}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default ItemLink;
