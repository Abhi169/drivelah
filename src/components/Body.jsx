import { useState, useEffect } from "react";
import SubscriptionPage from "../pages/SubscriptionPage";
import DevicePage from "../pages/DevicePage";
import Footer from "./Footer";
import checkIcon from "../assets/check.svg";
import './Body.css';

const Body = () => {
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

  const goToNextSection = () => {
    if (currentSectionIndex < sections.length - 2) {
      setCurrentSectionIndex(prevIndex => {
        const newIndex = prevIndex + 1;
        localStorage.setItem("currentSectionIndex", newIndex);
        return newIndex;
      });
    }
  };

  useEffect(() => {
    localStorage.setItem("currentSectionIndex", currentSectionIndex);
  }, [currentSectionIndex]);

  const renderPage = () => {
    switch(currentSectionIndex) {
      case 8:
        return <SubscriptionPage />;
      case 9:
        return <DevicePage />;
      default:
        return <SubscriptionPage />;
    }
  }

  return (
    <div className="body">
      <div className="container">
        <ul>
          {sections.map((section, index) => (
            <li
              key={index}
              className={`section ${
                index < currentSectionIndex
                  ? "completed"
                  : index === currentSectionIndex
                  ? "current"
                  : "upcoming"
              }`}
              onClick={
                index >= 8 && index < sections.length - 2
                  ? () => setCurrentSectionIndex(index)
                  : null
              }
            >
              <span className="container-index">{section}</span>
              {index < currentSectionIndex && (
                <span>
                  <img src={checkIcon} />
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>
      {renderPage()}
      <Footer onNext={goToNextSection} />
    </div>
  );
};

export default Body;
