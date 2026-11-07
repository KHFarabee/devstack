import "./App.css";
import Hero from "./assets/components/Hero";
import Navbar from "./assets/components/Navbar";

function App() {
  return (
    <div>
      <div className="border-b-[0.5px] py-4 px-2 border-[#F1F5F9]">
        <Navbar />
      </div>
      <div>
        <Hero />
      </div>
    </div>
  );
}

export default App;
