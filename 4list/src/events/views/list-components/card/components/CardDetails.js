export default function CardDetails(props) {
  const whatToShow = ["category", "venue", "size"];
  let results = [];
  let i = 0;

  for (let key in props.details) {
    if (whatToShow.includes(key)) {
      results[i++] = (
        <div key={i} className="d-flex flex-wrap text-dark gap-3 me-5">
          <div className="">
            <b>{key.charAt(0).toUpperCase() + key.slice(1).toLowerCase()}:</b>
          </div>
          <div className="">{props.details[key]}</div>
        </div>
      );
    }
  }

  return (
    <div className="d-flex flex-column w-100 font-monospace gap-3 fs-6 mt-sm-3">
      <div className="d-flex flex-wrap gap-3">{results}</div>
      <div className="d-flex flex-wrap gap-3">
        <div className="d-flex flex-wrap text-dark gap-3 me-5">
          <div className="">
            <b>Start Time:</b>
          </div>
          <div className="">{props.details["startTime"]}</div>
        </div>
        <div className="d-flex flex-wrap text-dark gap-3 me-5">
          <div className="">
            <b>End Time:</b>
          </div>
          <div className="">{props.details["endTime"]}</div>
        </div>
      </div>
    </div>
  );
}
