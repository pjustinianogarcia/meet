// src/App.js

import NumberOfEvents from "./components/NumberOfEvents";
import CitySearch from './components/CitySearch';
import EventList from './components/EventList';
import mockData from './mock-data'; 
import { useState } from "react";
import './App.css';


const App = () => {
  const [numberOfEvents, setNumberOfEvents] = useState(32);

 return (
   <div className="App">
    <CitySearch />
    <NumberOfEvents setNumberOfEvents={setNumberOfEvents} />
    <EventList events={mockData.slice(0, numberOfEvents)} />
   </div>
 );
}

export default App;