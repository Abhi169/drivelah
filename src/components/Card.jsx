import locationIcon from '../assets/location.svg';
import gaugeIcon from '../assets/gauge.svg'
import lockIcon from '../assets/lock.svg'
import './Card.css';

const Card = ({ title, description, price, isSelected, onClick }) => {
  return (
    <div className={`card ${isSelected ? "selected" : ""}`} onClick={onClick}>
      <h2 className="card-title">{title}</h2>
      <ul>
        {description.map((item, index) => {
          let icon;
          switch (index) {
            case 0:
              icon = locationIcon;
              break;
            case 1:
              icon = gaugeIcon;
              break;
            case 2:
              icon = lockIcon;
              break;
            default:
              icon = null;
          }
          return (
            <li key={index}>
              {icon && <img src={icon} />}
              <span className="card-content">{item}</span>
            </li>
          );
        })}
      </ul>
      <p>
        <span className="subscription-price">{price}</span>
        {price !== "Free" ? (
          <>
            <span className="subscription-duration"style={{ fontWeight: "normal" }}>/month</span>
          </>
        ) : ('')}
      </p>
    </div>
  );
}

export default Card;
