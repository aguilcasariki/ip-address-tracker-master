import PropTypes from "prop-types";

const IpInput = ({ handleChange, handleSubmit }) => {
  return (
    <div className="input_background md:bg-hero-pattern bg-hero-pattern-mobile bg-no-repeat bg-cover h-56">
      <h1 className="iunput_title">IP Address Tracker</h1>
      <form onSubmit={handleSubmit}>
        <div className="input_container">
          <input
            type="text"
            placeholder="Search for any IP address or domain"
            className="input_ip"
            onChange={handleChange}
            name="ip_address"
            pattern="^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$|^(?:(?:(?:[0-9A-Fa-f]{1,4}):){6}|(?=(?:[0-9A-Fa-f]{0,4}:){0,6}(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.?(?!$))([0-9A-Fa-f]{0,4}:[0-9A-Fa-f]{0,4}|:))((([0-9A-Fa-f]{0,4}:){0,5}|:)(:[0-9A-Fa-f]{0,4}){1,5}|:))%?[0-9a-zA-Z]{0,}$"
            required
          />
          <div className="input_search_container">
            <button type="submit" className="search_btn bg-very-dark-gray">
              <svg xmlns="http://www.w3.org/2000/svg" width="11" height="14">
                <path
                  fill="none"
                  stroke="#FFF"
                  strokeWidth="3"
                  d="M2 1l6 6-6 6"
                />
              </svg>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default IpInput;

IpInput.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};
