import { Suspense, useState } from "react";
import "./App.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Technologies from "./components/technologies/Technologies";
import type { ITechnology } from "./types/itechnology";

const fetchTechnologies = async (): Promise<ITechnology[]> => {
  const response = await fetch("/data.json");
  const data = await response.json();
  return data;
};

function App() {
  const [technologiesPromise] = useState(() => fetchTechnologies());
  return (
    <div>
      <div className="border-b-[0.5px] py-4 px-2 border-[#F1F5F9]">
        <Navbar />
      </div>
      <div>
        <Hero />
      </div>
      <div>
        <Suspense fallback={<p>Loading...</p>}>
          <Technologies technologiesPromise={technologiesPromise} />
        </Suspense>
      </div>
    </div>
  );
}

export default App;
