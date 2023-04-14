import React, { useState } from 'react';
import Container from './Container';
import List from './List';
import Selector from './Selector';
const request = require('browser-request');

const App = () => {
  const [selectedList, setSelectedList] = useState(null);

  const equipments = [
    { label: 'Audio Production', items: ['Microphones', 'Field Recorder', 'Headphone Splitters'] },
    { label: 'Camera', items: ['Digital Cinema', 'Camcorder', 'Action Camera'] },
    { label: 'Lighting', items: ['fluorescent', 'LED', 'Reflector'] },
  ];

  const handleSelect = (option) => {
    setSelectedList(option);
  };

  return (
    <Container>
      <Selector options={ equipments } onSelect={ handleSelect } />
      { selectedList && <List items={ selectedList.items } /> }
    <Container/>
  );
  request('https://api.publicapis.org/entries', function(er, response) {
      if (!er) return console.log(response.body);
      console.log('There was an error, but at least browser-request loaded and ran!');
      throw er;
    });

};

export default App;
