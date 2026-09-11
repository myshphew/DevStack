import Nav from "./components/Nav";
import Hero from "./components/Hero";
import TechnologiesTitle from "./components/TechnologiesTitle";
import TechGrid from "./components/TechGrid";
import Footer from "./components/Footer";
import type { Tech } from "./type/type";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";

const fetchTechData = async (): Promise<Tech[]> => {
  const response = await fetch("/data.json");

  if (!response.ok) {
    throw new Error("Failed to fetch tech data");
  }

  return response.json();
};

const App = () => {
  const [techData, setTechData] = useState<Tech[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchTechData();
        setTechData(data);
      } catch (error) {
        console.error("Error fetching tech data:", error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  return (
    <div>
      <Nav />

      <div className="container mx-auto flex-col px-11">
        <Hero />
        <TechnologiesTitle />

        {loading ? (
          <p className="py-10 text-center text-sm text-slate-400">Loading...</p>
        ) : (
          <TechGrid techData={techData} />
        )}
      </div>

      <Footer />

      <ToastContainer />
    </div>
  );
};

export default App;
