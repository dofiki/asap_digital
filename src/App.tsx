import Client from "./component/Client/Client";
import Footer from "./component/Footer/Footer";
import Hero from "./component/Hero/Hero";
import Navbar from "./component/Navbar/Navbar";
import Sevices from "./component/Services/Services";
import Work from "./component/Work/Work";

const App = () => {
  return (
    <div className="">
      <div className="flex justify-center">
        <Navbar />
      </div>
      <Hero />
      <Sevices />
      <Client />
      <Work />
      <Footer />
    </div>
  );
};

export default App;
