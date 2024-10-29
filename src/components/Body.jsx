import { useState } from "react";
import SubscriptionPage from "../pages/SubscriptionPage";
import DevicePage from "../pages/DevicePage";
import checkIcon from "../assets/check.svg";
import './Body.css';

const Body = ({ currentSectionIndex, setCurrentSectionIndex }) => {
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

  const [showDropdown, setShowDropdown] = useState(false);

  const handleDropdownClick = () => {
    setShowDropdown(!showDropdown);
  };

  const handleSectionClick = (index) => {
    setCurrentSectionIndex(index);
    setShowDropdown(false); // Close dropdown after selection
  };

  const renderPage = () => {
    switch (currentSectionIndex) {
      case 8:
        return <SubscriptionPage />;
      case 9:
        return <DevicePage />;
      default:
        return <SubscriptionPage />;
    }
  };

  return (
    <div className="body">
      <div className="container">
        <div className="dropdown-menu">
          <button onClick={handleDropdownClick} className="dropdown-toggle">
            {sections[currentSectionIndex]}
            {/* SVG Icon for the dropdown arrow */}
            <span className={`dropdown-arrow ${showDropdown ? "open" : ""}`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-chevron-down"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                />
              </svg>
            </span>
          </button>
          {showDropdown && (
            <ul className="dropdown-list">
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
                  onClick={() => handleSectionClick(index)}
                >
                  {section}
                </li>
              ))}
            </ul>
          )}
        </div>

        <ul className="desktop-list">
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
                  <img src={checkIcon} alt="Completed" />
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>
      {renderPage()}
    </div>
  );
};

export default Body;
