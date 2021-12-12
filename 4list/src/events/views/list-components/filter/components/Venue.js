export default function Venue(props) {
  return (
    <div className="d-flex flex-column gap-3 fs-5">
      <div className="fw-bold">Venue</div>
      <select
        className="form-select bg-secondary bg-opacity-25 p-3 ps-2 fs-5"
        style={{
          border: "none",
          transition: "none",
        }}
        onChange= {(event) => { props.setStates({...props.states, "venue": event.target.value })}}
        value={props.states["venue"]}
      >
        <option value="">Choose</option>
        {props.venues.map((venue => (
            <option value= {venue}>{venue}</option>
        )))}
      </select>
    </div>
  );
}
