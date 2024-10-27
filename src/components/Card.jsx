import locationIcon from '../assets/location.svg';
import gaugeIcon from '../assets/gauge.svg'
import lockIcon from '../assets/lock.svg'

const Card = ({ title, description, price, isSelected, onClick }) => {
  return (
    <div className={`card ${isSelected ? "selected" : ""}`} onClick={onClick}>
      <h2 style={{fontWeight:'lighter', color:'#11687f'}}>{title}</h2>
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
              {icon && <img src={icon} style={{ width: 16, height:16, color:'#1ca6b0', margin: 3 }} />}
              <span>{item}</span>
            </li>
          );
        })}
      </ul>
      <p style={{ color: "#11687d", fontWeight: "bolder" }}>
        {price !== "Free" ? (
          <>
            {price} <span style={{ fontWeight: "normal" }}>/month</span>
          </>
        ) : (
          price
        )}
      </p>
    </div>
  );
}

export default Card;
