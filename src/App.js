import About from "./Components/About/About";
import Doctors from "./Components/Doctors/Doctors";
import Footer from "./Components/Footer/Footer";
import GetInTouch from "./Components/GetTouch/GetInTouch";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Price from "./Components/Price/Price";
import Servics from "./Components/Service/Servics";
import Testiomnials from "./Components/Testimonials/Testiomnials";
import TimeTable from "./Components/TimeTable/TimeTable";
import './Scss/Main.scss';


function App() {
  return (
    <div>
      <Header />
      <Home />
      <TimeTable />
      <About />
      <Servics />
      <Doctors />
      <Price />
      <Testiomnials />
      <GetInTouch />
      <Footer />
    </div>
  );
}

export default App;
