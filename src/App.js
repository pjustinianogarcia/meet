// src/App.js

import NumberOfEvents from "./components/NumberOfEvents";
import CitySearch from './components/CitySearch';
import EventList from './components/EventList';
import mockData from './mock-data'; 
import { useEffect, useState } from "react";
import { extractLocations, getEvents } from './api';
import './App.css';


const App = () => {
  const [events, setEvents] = useState([]);
  const [numberOfEvents, setNumberOfEvents] = useState(32);
  const [allLocations, setAllLocations] = useState([]);
  const [currentCity, setCurrentCity] = useState("See all cities");
  

  useEffect(() => {
    fetchData();
  }, [currentCity, numberOfEvents]);

  const fetchData = async () => {
    const allEvents = await getEvents();
    const filteredEvents = currentCity === "See all cities" ?
      allEvents :
      allEvents.filter(event => event.location === currentCity)
    setEvents(filteredEvents.slice(0, numberOfEvents));
    setAllLocations(extractLocations(allEvents));
  }

 return (
   <div className="App">
    <CitySearch allLocations={allLocations} setCurrentCity={setCurrentCity}/>
    <NumberOfEvents setNumberOfEvents={setNumberOfEvents} />
    <EventList events={events} />
   </div>
 );
}

export default App;