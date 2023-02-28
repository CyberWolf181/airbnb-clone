import star from "../images/Star.png";

function Card(props) {
  let badgeText;
  if (props.item.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.item.location === "Online") {
    badgeText = "ONLINE";
  }
  return (
    <div className="card">
      {badgeText && <div className="card-badge">{badgeText}</div>}
      <img
        src={process.env.PUBLIC_URL + "/images/" + props.item.coverImg}
        alt=""
        className="card-img"
      />
      <div className="card-stats">
        <img src={star} alt="star" className="card--star" />
        <span className="card-rating">{props.item.stats.rating}</span>
        <span className="gray">({props.item.stats.reviewCount})</span>
        <span className="gray">{props.item.location}</span>
      </div>
      <p className="card--title">{props.item.title}</p>
      <p className="card--price">
        <span className="bold">From ${props.item.price}</span> / person
      </p>
    </div>
  );
}

export default Card;
