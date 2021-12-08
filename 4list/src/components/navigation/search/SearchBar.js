import { useEffect, useState } from "react";
import City from "./components/City";
import State from "./components/State";
import Keyword from "./components/Keyword";
import ZipCode from "./components/ZipCode";

export default function SearchBar() {
  const [states, setStates] = useState(() => ({
    Keyword: "",
    State: "",
    City: "",
    Zip: "",
  }));

  return (
    <div className="navbar-collapse collapse" id="navSearchBar">
      <div className="d-flex flex-column flex-lg-row w-100 align-items-start align-items-lg-center gap-3">
        <Keyword states={states} setStates={setStates}/>
        <div className="fs-3 mx-1 text-center" style={{ minWidth: "2%" }}>
          in
        </div>
        <State states={states} setStates={setStates}/>
        <City states={states} setStates={setStates}/>
        <ZipCode states={states} setStates={setStates}/>
      </div>
    </div>
  );
}
