import React from "react";
import "../App.css";

const Filtrer = (props) => {
  const getsearch = (e) => {
    props.FilterTool(e.target.value);
  };
  return (
    <div>
      <input
        className="search-tool"
        onChange={getsearch}
        placeholder="search movie"
      ></input>
    </div>
  );
};
export default Filtrer;
