export default function Date(props) {

let months= []
for(let i=1; i<=12;i+=1){
    months[i-1]= (<option value={i-1}>{i}</option>)
}

let days= []
for(let i=1; i<=31;i+=1){
    days[i-1]= (<option value={i}>{i}</option>)
}

  return (
    <div className="d-flex flex-column gap-3 fs-5">
      <div className="fw-bold">Date (MM DD YY)</div>
      <div className="d-flex flex-wrap gap-3">
        <select
          className="form-select bg-secondary bg-opacity-25 p-3 ps-2 fs-5"
          style={{
            border: "none",
            transition: "none",
            width: "80px",
            maxWidth: "100%"
          }}
          onChange= {(event) => { props.setStates({...props.states, "month": event.target.value })}}
          value={props.states["month"]}
        >
          <option value="">MM</option>
          {months}
        </select>
        <select
          className="form-select bg-secondary bg-opacity-25 p-3 ps-2 fs-5"
          style={{
            border: "none",
            transition: "none",
            width: "80px",
            maxWidth: "100%"
          }}
          onChange= {(event) => { props.setStates({...props.states, "day": event.target.value })}}
          value={props.states["day"]}
        >
          <option value="">DD</option>
          {days}
        </select>
        <select
          className="form-select bg-secondary bg-opacity-25 p-3 ps-2 fs-5"
          style={{
            border: "none",
            transition: "none",
            width: "175px",
            maxWidth: "100%"
          }}
          onChange= {(event) => { props.setStates({...props.states, "year": event.target.value })}}
          value={props.states["year"]}
        >
          <option value="">YY</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
        </select>
      </div>
    </div>
  );
}
