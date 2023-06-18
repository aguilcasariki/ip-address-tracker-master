import PropTypes from "prop-types";

const IpInput = ({ handleSubmit, handleChange }) => {
  return (
    <div className="input_background w-full md:bg-hero-pattern bg-hero-pattern-mobile bg-no-repeat bg-cover h-96 flex flex-col items-center pb-20 ">
      <h1 className="iunput_title text-white mt-6 text-xl">
        IP Address Tracker
      </h1>
      <form onSubmit={handleSubmit} className="mt-6">
        <div className="form_wrapper flex items-center">
          <input
            onChange={handleChange}
            type="text"
            placeholder="Search for any IP address or domain"
            className="input_ip rounded-lg py-2 px-3 rounded-e-none shadow"
            name="ip_address"
            pattern="^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$|^(?:(?:(?:[0-9A-Fa-f]{1,4}):){6}|(?=(?:[0-9A-Fa-f]{0,4}:){0,6}(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.?(?!$))([0-9A-Fa-f]{0,4}:[0-9A-Fa-f]{0,4}|:))((([0-9A-Fa-f]{0,4}:){0,5}|:)(:[0-9A-Fa-f]{0,4}){1,5}|:))%?[0-9a-zA-Z]{0,}$"
            required
          />

          <button
            type="submit"
            className="search_btn bg-very-dark-gray p-3.5 rounded-lg rounded-s-none"
          >
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
      </form>
    </div>
  );
};

export default IpInput;

IpInput.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
};
