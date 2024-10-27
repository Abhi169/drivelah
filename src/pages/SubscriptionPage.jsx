import { useState } from "react";
import { cardData } from "../utils/mockData";
import Card from "../components/Card";

const SubscriptionPage = () => {
  const [selectedCardIndex, setSelectedCardIndex] = useState(null);

  const renderDynamicContent = () => {
    if (selectedCardIndex === null) {
      return null;
    }

    const selectedCard = cardData[selectedCardIndex];

    switch (selectedCard.title) {
      case "Just mates":
        return (
          <div className="subscription-add-ons">
            <p>Select add-ons for your subscription</p>
            <p>BYO secondary GPS - $5/month</p>
            <input type="radio" name="addon" value="BYO secondary GPS" />
            <p>Add card details</p>
            <input
              type="text"
              name="card"
              placeholder="1234 5678 7234 5678  MM/YY CVC"
            />
            <h4>
              You will not be charged right now. Subscription will only start
              once your listing is published and live.
            </h4>
          </div>
        );

      case "Good mates":
        return (
          <div className="subscription-add-ons">
            <p>Select add-ons for your subscription</p>
            <p>BYO secondary GPS - $5/month</p>
            <input type="radio" name="addon" value="BYO secondary GPS" />
            <p>BYO lockbox - $10/month</p>
            <input type="radio" name="addon" value="BYO lockbox" />
            <p>Add card details</p>
            <input
              type="text"
              name="card"
              placeholder="1234 5678 7234 5678  MM/YY CVC"
            />
            <h4>
              You will not be charged right now. Subscription will only start
              once your listing is published and live.
            </h4>
          </div>
        );

      case "Best mates":
        return (
          <div className="subscription-add-ons">
            <p>Select add-ons for your subscription</p>
            <p>BYO secondary GPS - $5/month</p>
            <input type="radio" name="addon" value="BYO secondary GPS" />
            <p>Between trip insurance (coming soon)</p>
            <input type="radio" name="addon" value="Between trip insurance" />
            <p>Add card details</p>
            <input
              type="text"
              name="card"
              placeholder="1234 5678 7234 5678  MM/YY CVC"
            />
            <h4>
              You will not be charged right now. Subscription will only start
              once your listing is published and live.
            </h4>
          </div>
        );

      default:
        return null;
    }
  }

  return (
    <div>
      <div className="main">
        <h1>Subscription plan</h1>
        <p>Select the ideal subscription plan for your listing.</p>
        <div>
          <p>Select your plan</p>
          <div className="plans">
            {cardData.map((card, index) => (
              <Card
                key={index}
                title={card.title}
                description={card.description}
                price={card.price}
                isSelected={selectedCardIndex === index}
                onClick={() => setSelectedCardIndex(index)}
              />
            ))}
          </div>
        </div>
        <div className="dynamic-content">
          {renderDynamicContent()}
        </div>
        <div className="last-content">
          <p>
            Learn more about the plans here - What is the right plan for me?
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
