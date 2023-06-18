import CardColumn from "../CardColumn/CardColumn";
import PropTypes from "prop-types";

const IpCard = ({ cardData }) => {
  return (
    <div className="ip_card_wrapper p-4 w-72 bg-white shadow z-50 -mt-32 rounded-lg">
      <div className="grid  grid-rows-4 md:grid-rows-none md:grid-cols-4 gap-y-3 ">
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
