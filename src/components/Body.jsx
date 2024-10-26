import { useState, useEffect } from "react";
import SubscriptionPage from "../pages/SubscriptionPage";
import DevicePage from "../pages/DevicePage";
import Footer from "./Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

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
              onClick={ index >= 8 &&
                index < sections.length - 2
                  ? () => setCurrentSectionIndex(index)
                  : null
              }
            >
              {section}
              {index < currentSectionIndex && (
                <span>
                  <FontAwesomeIcon icon={faCircleCheck} style={{ margin: 2 }} />
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
