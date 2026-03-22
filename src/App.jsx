import { useState } from "react";
import "./App.css";
import QueueForm from "./components/QueueForm";

export default function App() {
  const [queue, setQueue] = useState([]);

  const addToQueue = (customer) => {
    //add data to queue
  };
  const updateStatus = (id, newStatus) => {
    //change data in queue
  };
  const removeFromQueue = (id) => {
    //remove data from the queue
  };


  return(
    <div className="app">
      <header>
        <h1>Queue Management Application</h1>
        <p>Manage your Customers Efficently</p>
      </header>
      <main>
        <QueueForm onAdd={addToQueue}/>
        <h1>QueueDisplay</h1>
      </main>
    </div>
  );
}