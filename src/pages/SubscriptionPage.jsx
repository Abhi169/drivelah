import { useState } from "react";
import { cardData } from "../utils/mockData";
import Card from "../components/Card";
import "./SubscriptionPage.css";
import cardIcon from "../assets/card.svg";

const SubscriptionPage = () => {
  const [selectedCardIndex, setSelectedCardIndex] = useState(null);
  const [cardDetails, setCardDetails] = useState("");

  const handleCardDetailsChange = (e) => {
    setCardDetails(e.target.value);
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
            <p className="subscription-p">Select add-ons for your subscription</p>
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
                placeholder="1234 5678 1234 5678 MM/YY CVC"
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
                placeholder="1234 5678 1234 5678 MM/YY CVC"
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
                <p>coming soon</p>
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
