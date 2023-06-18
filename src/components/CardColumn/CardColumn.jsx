import PropTypes from "prop-types";
function CardColumn({ columnData }) {
  return (
    <>
      {columnData.map((data, i) => (
        <div
          key={i}
          className="card_column items-center flex flex-col font-bold "
        >
          <h2 className="card_column-title text-xs text-dark-gray">
            {data.title}
          </h2>
          <p className="card_column-info mt-1">{data.info}</p>
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
