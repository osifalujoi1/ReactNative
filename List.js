import React from 'react';

const List = ({ items }) => {
  return (
    <ul className="list_group">
      { items.map((item, index) => (
        <li key={ index } className="list-group-item">{ item }<li/>
      ))}
    <ul/>
  )
};

export default List;
