import Nav from "./components/Nav";
import Hero from "./components/Hero";
import TechnologiesTitle from "./components/TechnologiesTitle";
import TechGrid from "./components/TechGrid";
import Footer from "./components/Footer";
import type { Tech } from "./type/type";
import { useEffect, useState } from "react";

const fetchTechData = async (): Promise<Tech[]> => {
  const response = await fetch("/data.json");
  if (!response.ok) {
    throw new Error("Failed to fetch tech data");
  }
  return response.json();
};

const App = () => {
  const [techData, setTechData] = useState<Tech[]>([]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchTechData();
        setTechData(data);
      } catch (error) {
        console.error("Error fetching tech data:", error);
      }
    };

    loadData();
  }, []);

  return (
    <div>
      <Nav />
      <Hero />
      <TechnologiesTitle />
      <TechGrid techData={techData} />
      <Footer />
    </div>
  );
};

export default App;
