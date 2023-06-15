const IpInput = () => {
  return (
    <div className="input_background">
      <h1 className="iunput_title">IP Address Tracker</h1>
      <div className="input_container">
        <input
          type="text"
          placeholder="Search for any IP address or domain"
          className="input_ip"
        />
        <div className="input_search_container">
          <button type="button" className="search_btn bg-very-dark-gray">
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
    </div>
  );
};

export default IpInput;
