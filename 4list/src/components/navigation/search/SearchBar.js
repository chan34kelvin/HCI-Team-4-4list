import { useState } from "react";
import City from "./components/City";
import State from "./components/State";
import Keyword from "./components/Keyword";
import Category from "./components/Category";

export default function SearchBar(props) {
  const [states, setStates] = useState(() => ({
    Keyword: "",
    State: "",
    City: "",
    Category: "Event",
  }));

  return (
    <div className="d-flex flex-column flex-lg-row w-100 align-items-start align-items-lg-center gap-3">
      <div className="navbar-collapse collapse w-100" id="navSearchBar">
        <Keyword states={states} setStates={setStates} />
        <div
          className="fs-3 mt-3 m-1 text-md-center"
          style={{ minWidth: "10%" }}
        >
          in
        </div>
      </div>
      <div
        className="navbar-collapse collapse w-100"
        id="navSearchBar"
        style={{ minWidth: "60%" }}
      >
        <div className="d-flex flex-column flex-md-row w-100 gap-3">
          <Category states={states} setStates={setStates} />
          <State states={props.area} setStates={props.setArea} />
          <City states={props.area} setStates={props.setArea} />
        </div>
      </div>
    </div>
  );
}
