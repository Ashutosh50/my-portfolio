import About from "./Components/About";
import Contact from "./Components/Contact";
import Experience from "./Components/Experience";
import Home from "./Components/Home";
import NavBar from "./Components/NavBar";
import Portfolio from "./Components/Protfolio";
import SocialLinks from './Components/SocialLinks';

const App = () => {
  return (
    <>
      <NavBar/>
      <Home/>
      <About/>
      <Portfolio/>
      <Experience/>
      <Contact/>
      <SocialLinks/>

    </>
  );
}

export default App;
