import Advantages from "./components/Advantages";
import Articles from "./components/Articles";
import CTA from "./components/cta";
import Details from "./components/Details";
import Expand from "./components/Expand";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";

import "./index.css";

function App() {
  return (
    <>
      <Header />
      <Home />
      <Details />
      <Expand />
      <Advantages />
      {/* <Articles /> */}
      <CTA />
      <Footer />
    </>
  );
}

export default App;
