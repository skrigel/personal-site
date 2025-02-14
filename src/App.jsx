// import logo from "./logo.svg";
// import { Nav } from "react-bootstrap";
import "./App.css";
import { MyNavBar } from "./components/MyNavBar";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Banner } from "./components/Banner";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <MyNavBar />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
