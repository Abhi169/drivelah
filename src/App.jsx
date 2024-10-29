import { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import Body from "./components/Body";
import Footer from "./components/Footer";

function App() {
  const sections = [
    "Location",
    "About",
    "Features",
    "Rules",
    "Pricing",
    "Promotion",
    "Pictures",
    "Insurance",
    "Subscription",
    "Device",
    "Easy Access",
  ];
  
  const [currentSectionIndex, setCurrentSectionIndex] = useState(() => {
    const savedIndex = localStorage.getItem("currentSectionIndex");
    return savedIndex != null ? parseInt(savedIndex, 10) : 8;
  });

  const onNext = () => {
    if (currentSectionIndex < sections.length - 2) {
      setCurrentSectionIndex((prevIndex) => {
        const newIndex = prevIndex + 1;
        localStorage.setItem("currentSectionIndex", newIndex);
        return newIndex;
      });
    }
  };

  useEffect(() => {
    localStorage.setItem("currentSectionIndex", currentSectionIndex);
  }, [currentSectionIndex]);

  return (
    <>
      <NavBar />
      <Body
        currentSectionIndex={currentSectionIndex}
        setCurrentSectionIndex={setCurrentSectionIndex}
      />
      <Footer onNext={onNext} />
    </>
  );
}

export default App;
