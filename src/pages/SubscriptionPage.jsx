import { useState } from "react";
import { cardData } from "../utils/mockData";
import Card from "../components/Card";
import "./SubscriptionPage.css";
import cardIcon from "../assets/card.svg";

const SubscriptionPage = () => {
  const [selectedCardIndex, setSelectedCardIndex] = useState(null);
  const [cardDetails, setCardDetails] = useState("");

  const handleCardDetailsChange = (e) => {
    // Remove all non-digit characters from the input
    let value = e.target.value.replace(/\D/g, "");

    // Limit the total number of digits to 23 (16 for card, 4 for MMYY, 3 for CVC)
    value = value.slice(0, 23);

    // Extract parts of the input
    const cardNumber = value.slice(0, 16);
    const month = value.slice(16, 18);
    const year = value.slice(18, 20);
    const cvc = value.slice(20, 23);

    // Format the card number into groups of 4 separated by spaces
    let formattedValue = "";
    if (cardNumber.length > 0) {
      formattedValue += cardNumber.replace(/(\d{4})(?=\d)/g, "$1 ").trim();
    }

    // Add a space before the expiration date if card number is complete or partially entered
    if (month.length > 0) {
      formattedValue += " " + month;
      // Add '/' between month and year if year is present
      if (year.length > 0) {
        formattedValue += "/" + year;
      }
    }

    // Add a space before the CVC if both card number and expiration date are present
    if (cvc.length > 0) {
      formattedValue += " " + cvc;
    }

    // Ensure the formatted value does not exceed 29 characters
    if (formattedValue.length > 29) {
      formattedValue = formattedValue.slice(0, 29);
    }

    // Update the state with the formatted value
    setCardDetails(formattedValue);
  };

  const renderDynamicContent = () => {
    if (selectedCardIndex === null) {
      return null;
    }

    const selectedCard = cardData[selectedCardIndex];

    switch (selectedCard.title) {
      case "Just mates":
        return (
          <div className="subscription-add-ons">
            <hr className="styled-hr" />
            <p className="subscription-p">
              Select add-ons for your subscription
            </p>
            <div className="add-ons">
              <div className="option">
                <label>
                  BYO secondary GPS - $5/month
                  <input type="radio" name="addon" value="BYO secondary GPS" />
                  <span className="custom-radio"></span>
                </label>
              </div>
            </div>

            <hr className="styled-hr" />
            <p>Add card details</p>
            <div className="card-container">
              <img src={cardIcon} alt="Card Icon" />
              <input
                type="text"
                name="card"
                value={cardDetails}
                onChange={handleCardDetailsChange}
                placeholder="1234 5678 1234 5678&nbsp;&nbsp;&nbsp;&nbsp;MM/YY&nbsp;&nbsp;&nbsp;&nbsp;CVC"
              />
            </div>
            <p className="note">
              You will not be charged right now. Subscription will only start
              once your listing is published and live.
            </p>
          </div>
        );

      case "Good mates":
        return (
          <div className="subscription-add-ons">
            <hr className="styled-hr" />
            <p className="subscription-p">
              Select add-ons for your subscription
            </p>
            <div className="add-ons">
              <div className="option">
                <label>
                  BYO secondary GPS - $5/month
                  <input type="radio" name="addon" value="BYO secondary GPS" />
                  <span className="custom-radio"></span>
                </label>
              </div>
              <div className="option">
                <label>
                  BYO lockbox - $10/month
                  <input type="radio" name="addon" value="BYO lockbox" />
                  <span className="custom-radio"></span>
                </label>
              </div>
            </div>

            <hr className="styled-hr" />

            <p>Add card details</p>
            <div className="card-container">
              <img src={cardIcon} alt="Card Icon" />
              <input
                type="text"
                name="card"
                value={cardDetails}
                onChange={handleCardDetailsChange}
                placeholder="1234 5678 1234 5678&nbsp;&nbsp;&nbsp;&nbsp;MM/YY&nbsp;&nbsp;&nbsp;&nbsp;CVC"
              />
            </div>
            <p className="note">
              You will not be charged right now. Subscription will only start
              once your listing is published and live.
            </p>
          </div>
        );

      case "Best mates":
        return (
          <div className="subscription-add-ons">
            <hr className="styled-hr" />
            <p className="subscription-p">
              Select add-ons for your subscription
            </p>

            <div className="add-ons">
              <div className="option">
                <label>
                  BYO secondary GPS - $5/month
                  <input type="radio" name="addon" value="BYO secondary GPS" />
                  <span className="custom-radio"></span>
                </label>
              </div>
              <div className="option">
                <span className="coming-soon-label">coming soon</span>
                <label>
                  Between trip insurance
                  <input
                    type="radio"
                    name="addon"
                    value="Between trip insurance"
                  />
                  <span className="custom-radio"></span>
                </label>
              </div>
            </div>

            <hr className="styled-hr" />

            <p>Add card details</p>
            <div className="card-container">
              <img src={cardIcon} alt="Card Icon" />
              <input
                type="text"
                name="card"
                value={cardDetails}
                onChange={handleCardDetailsChange}
                placeholder="1234 5678 1234 5678&nbsp;&nbsp;&nbsp;&nbsp;MM/YY&nbsp;&nbsp;&nbsp;&nbsp;CVC"
              />
            </div>
            <p className="note">
              You will not be charged right now. Subscription will only start
              once your listing is published and live.
            </p>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="subscription-container">
      <div className="main">
        <h1 className="subscription-title">Subscription plan</h1>
        <p className="subscription-description">Select the ideal subscription plan for your listing.</p>
        <hr className="styled-hr" />
        <div>
          <p className="subscription-p">Select your plan</p>
          <div className="plans">
            {cardData.map((card, index) => (
              <Card
                key={index}
                title={card.title}
                description={card.description}
                price={card.price}
                isSelected={selectedCardIndex === index}
                onClick={() => setSelectedCardIndex(index)}
                className={
                  selectedCardIndex === index ? "card selected" : "card"
                }
              />
            ))}
          </div>
        </div>
        <div className="dynamic-content">{renderDynamicContent()}</div>
        <hr className="styled-hr" />
        <div className="last-content">
          <p>
            Learn more about the plans here - &nbsp; 
            <span>What is the right plan for me?</span>
          </p>
          <p>
            You will be able to switch between plans easily later as well. Speak
            to our host success team if you need any clarifications.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionPage;
