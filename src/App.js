// src/App.js

import NumberOfEvents from "./components/NumberOfEvents";
import CitySearch from './components/CitySearch';
import EventList from './components/EventList';
import CityEventsChart from './components/CityEventsChart';
import EventGenresChart from './components/EventGenresChart';
import { useEffect, useState } from "react";
import { extractLocations, getEvents } from './api';
import { InfoAlert, ErrorAlert, WarningAlert } from './components/Alert';
import './App.css';


const App = () => {
  const [events, setEvents] = useState([]);
  const [numberOfEvents, setNumberOfEvents] = useState(32);
  const [allLocations, setAllLocations] = useState([]);
  const [currentCity, setCurrentCity] = useState("See all cities");
  const [infoAlert, setInfoAlert] = useState("");
  const [errorAlert, setErrorAlert] = useState("");
  const [warningAlert, setWarningAlert] = useState("");
  

  useEffect(() => {
    if (navigator.onLine) {
      setWarningAlert("")
   } else {
     setWarningAlert("You are offline. The displayed list has been loaded from the cache.")
   }
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
    <h1>Meet App</h1>
        <div className="alerts-container">
        {infoAlert.length ? <InfoAlert text={infoAlert}/> : null}
        {errorAlert.length ? <ErrorAlert text={errorAlert} /> : null}
        {warningAlert.length ? <WarningAlert text={warningAlert} /> : null}
      </div>
    <CitySearch allLocations={allLocations} setCurrentCity={setCurrentCity} setInfoAlert={setInfoAlert} />
    <NumberOfEvents setNumberOfEvents={setNumberOfEvents} setErrorAlert={setErrorAlert} />
    <div className="charts-container" >
      <EventGenresChart events={events} />
      <CityEventsChart allLocations={allLocations} events={events} />
    </div>
    <EventList events={events} />
   </div>
 );
}

export default App;