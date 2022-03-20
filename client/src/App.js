import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import ServiceForm from "./components/ServiceForm";
import EventForm from "./components/EventForm";
import "./App.css";
function App() {
  return (
    <div className="App">
      <Header />
      {/* <ServiceForm /> */}
      <EventForm />
      <Footer />
    </div>
  );
}

export default App;
