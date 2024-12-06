import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./views/Home";
import Events from "./views/Events";
import About from "./components/AboutPage/About";
import Aboutrechargepage from "./components/AboutPage/Aboutrechargepage";
import { useEffect, useState } from "react";
import EventDescription from "./views/EventDescription";
import EventList from "./views/EventList";
import Footer from "./components/Common/Footer";
import BuyTickets from "./views/BuyTickets";
import Merchandise from "./views/Merchandise";
import Companion from "./views/Companion";
import Ongoing from "./views/Ongoing";
import Upcoming from "./views/Upcoming";
import Carnival from "./views/Carnival";
import MaintenancePage from "./components/Home/MaintenancePage"; // Import the maintenance page

const App = () => {
  const [isLoading, setLoading] = useState(true);
  const [path, setPath] = useState("/");
  const [isMaintenance, setIsMaintenance] = useState(false); // State to manage maintenance mode
  const location = useLocation();

  useEffect(() => {
    setPath(location.pathname);
  }, [path, isLoading, location.pathname]);

  // You can control the maintenance mode here (can be based on an environment variable or state)
  useEffect(() => {
    // Example: If you want to activate maintenance mode based on an environment variable
    // setIsMaintenance(process.env.REACT_APP_MAINTENANCE === 'true');
    
    // Alternatively, you can toggle it manually here for testing:
    setIsMaintenance(false); // Set to true to display the maintenance page
  }, []);

  if (isMaintenance) {
    return <MaintenancePage />; // Display maintenance page when in maintenance mode
  }

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={<Home isLoading={isLoading} setLoading={setLoading} />}
        />
        <Route path="/events" element={<Events />} />
        <Route path="/events/eventslist" element={<EventList />} />
        <Route path="/eventdescription" element={<EventDescription />} />
        <Route path="/about-rec" element={<About />} />
        <Route path="/about-recharge" element={<Aboutrechargepage />} />
        <Route path="/carnival" element={<Carnival />} />
        <Route path="/buytickets" element={<BuyTickets />} />
        <Route path="/companion" element={<Companion />} />
        <Route path="/companion/ongoing" element={<Ongoing />} />
        <Route path="/companion/upcoming" element={<Upcoming />} />
      </Routes>
      {isLoading === true ? <div></div> : <Footer path={path} />}
    </div>
  );
};

export default App;
