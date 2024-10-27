import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faGaugeHigh,
  faLock,
} from "@fortawesome/free-solid-svg-icons";

const Card = ({ title, description, price, isSelected, onClick }) => {
  return (
    <div className={`card ${isSelected ? "selected" : ""}`} onClick={onClick}>
      <h2>{title}</h2>
      <ul>
        {description.map((item, index) => {
          let icon;
          console.log(index);
          switch (index) {
            case 0:
              icon = faLocationDot;
              break;
            case 1:
              icon = faGaugeHigh;
              break;
            case 2:
              icon = faLock;
              break;
            default:
              icon = null;
          }
          return (
            <li key={index}>
              {icon && <FontAwesomeIcon icon={icon} style={{margin:3}}/>}
              <span>{item}</span>
            </li>
          );
        })}
      </ul>
      <p>{price}</p>
    </div>
  );
}

export default Card;
