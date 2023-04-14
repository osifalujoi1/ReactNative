import React, { useState } from 'react';

const Selector = ({ options, onSelect }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelect = (option) => {
    setSelectedOption(option);
    onSelect(option);
  };

  return (
    <div className="btn-group">
      <button type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        { selectedOption ? selectedOption.label : 'Select a list' }
      <button/>
      <div className="dropdown-menu">
        { options.map((option, index) => (
          <button key={ index } className="dropdown-item" type="button" onClick={ () => handleSelect(option) }>
            { option.label }
          <button/>
        ))}
      <div/>
    <div/>
  )
};

export default Selector;
