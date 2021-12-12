export default function EventDetail(props) {
  let results = [];
  let i = 0;

  for (let key in props.detail) {
    if (key === "daysOfWeek") {
      results[i++] = (
        <div className="d-flex flex-wrap text-dark gap-3 me-5 my-3">
          <div className="">
            <b>Active on:</b>
          </div>
          <div className="d-flex flex-wrap gap-3">
            {props.detail[key].map((day) => (
              <div className="">{day}</div>
            ))}
          </div>
        </div>
      );
    } else {
      results[i++] = (
        <div className="d-flex flex-wrap text-dark gap-3 me-5 my-3">
          <div className="">
            <b>{key.charAt(0).toUpperCase() + key.slice(1).toLowerCase()}:</b>
          </div>
          <div className="">{props.detail[key]}</div>
        </div>
      );
    }
  }

  return <div className="d-flex flex-wrap w-100 font-monospace fs-5">{results}</div>;
}
