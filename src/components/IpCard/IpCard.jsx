import CardColumn from "../CardColumn/CardColumn";
import PropTypes from "prop-types";

const IpCard = ({ cardData }) => {
  return (
    <div className="ip_card_wrapper">
      <div className="grid  grid-rows-4 md:grid-rows-none md:grid-cols-4">
        <CardColumn columnData={cardData} />
      </div>
    </div>
  );
};

IpCard.propTypes = {
  cardData: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      info: PropTypes.string.isRequired,
    })
  ).isRequired,
};
export default IpCard;
