import Header from './Layout/Header';
import Footer from './Layout/Footer';
import Login from './Login';
import Home from './Home';
import Events from './Events';
import EventForm from './EventForm';
import Services from './Services';
import ServiceForm from './ServiceForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, Navigate } from "react-router-dom";
import {authContext} from './providers/AuthProvider';
import { useContext, useEffect } from "react";
import {EventsContext} from './hooks/EventsProvider';
import './App.scss';

function App() {
  const { searchActive } = useContext(EventsContext)
  
  useEffect(() => {
      console.log('searchActive', searchActive)
  }, [searchActive])
  return (
    <div className="App">    

      <Header />
      {searchActive ?           
      <Events showAll={false}/>  : 
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events showAll={true} />} />     

        <Route
          path="/events/new"
           element={
              <RequireAuth redirectTo="/login">
                <EventForm />
              </RequireAuth>
            }
          />
        {/* <Route path="/create-event" element={<EventForm />} />         */}
        <Route path="/services" element={<Services />} />

          <Route
            path="/services/new"
            element={         
              <RequireAuth redirectTo="/login">
                <ServiceForm />
              </RequireAuth>
            }
          />
      
      </Routes>      
      }
      <Footer />
          
      
    </div> 
  );
}
function RequireAuth({ children, redirectTo }) {
  const { auth } = useContext(authContext);
  
  
  return auth ? children : <Navigate to={redirectTo} />;
}
export default App;
