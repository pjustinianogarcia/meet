// src/App.js

import NumberOfEvents from "./components/NumberOfEvents";
import CitySearch from './components/CitySearch';
import EventList from './components/EventList';
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
          <div className="alerts-container">
        {infoAlert.length ? <InfoAlert text={infoAlert}/> : null}
        {errorAlert.length ? <ErrorAlert text={errorAlert} /> : null}
        {errorAlert.length ? <WarningAlert text={warningAlert} /> : null}
      </div>
    <CitySearch allLocations={allLocations} setCurrentCity={setCurrentCity} setInfoAlert={setInfoAlert} />
    <NumberOfEvents setNumberOfEvents={setNumberOfEvents} setErrorAlert={setErrorAlert} />
    <EventList events={events} />
   </div>
 );
}

export default App;