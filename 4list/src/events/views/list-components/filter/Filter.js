import Category from "./components/Category";
import Date from "./components/Date";
import Reset from "./components/Reset";
import Size from "./components/Size";
import Time from "./components/Time";
import Venue from "./components/Venue";

export default function Filter(props) {

  const states = props.states;
  const setStates = props.setStates;

  return (
    <div className="offcanvas offcanvas-start" tabindex="-1" id="eventFilter">
      <div className="offcanvas-header">
        <div className="offcanvas-title fs-1">
          Filters
        </div>
        <button
          type="button"
          className="btn-close text-reset fs-4"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div className="offcanvas-body">
        <div className="d-flex flex-column gap-4">
          <Category categories={props.categories} states={states} setStates={setStates} />
          <Date states={states} setStates={setStates} />
          <Time states={states} setStates={setStates} />
          <Venue states={states} setStates={setStates} venues={props.venues} />
          <Size states={states} setStates={setStates} />
          <Reset states={states} setStates={setStates}/>
        </div>
      </div>
    </div>
  );
}
