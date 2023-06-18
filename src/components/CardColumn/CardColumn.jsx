import PropTypes from "prop-types";
function CardColumn({ columnData }) {
  return (
    <>
      {columnData.map((data, i) => (
        <div key={i}>
          <h2 className="card_column_title">{data.title}</h2>
          <p className="card_column_info">{data.info}</p>
        </div>
      ))}
    </>
  );
}

CardColumn.propTypes = {
  columnData: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      info: PropTypes.string.isRequired,
    })
  ).isRequired,
};
export default CardColumn;
