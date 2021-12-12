export default function Time(props) {
  let time = [];
  for (let i = 0; i <= 23; i += 1) {
    if (i >= 12) {
      time[i] = <option value={i + ":00"}>{i}:00 pm</option>;
    } else {
      time[i] = <option value={i + ":00"}>{i}:00 am</option>;
    }
  }

  return (
    <div className="d-flex flex-column gap-3 fs-5">
      <div className="fw-bold">Active time of event</div>
      <select
        className="form-select bg-secondary bg-opacity-25 p-3 ps-2 fs-5"
        style={{
          border: "none",
          transition: "none",
          width: "150px",
          maxWidth: "100%",
        }}
        onChange={(event) => {
          props.setStates({ ...props.states, time: event.target.value });
        }}
        value={props.states["time"]}
      >
        <option value="">Choose</option>
        {time}
      </select>
    </div>
  );
}
