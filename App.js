// src/App.js
import React from ´react´;
import EventForm from´ ./
components/EventForm´;
import Eventlist from´./
components/EventList´;

function App(){
  return (
    <div style={{padding:
    ´20px´}}>
<EventForm />
  <EventList />
  </div>
);
}

export default App;
