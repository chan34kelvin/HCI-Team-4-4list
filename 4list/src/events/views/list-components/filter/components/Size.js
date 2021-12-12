export default function Size(props) {
    return (
      <div className="d-flex flex-column gap-3 fs-5">
        <div className="fw-bold">Size</div>
        <select
          className="form-select bg-secondary bg-opacity-25 p-3 ps-2 fs-5"
          style={{
            border: "none",
            transition: "none",
            width: "250px",
            maxWidth: "100%"
          }}
          onChange= {(event) => { props.setStates({...props.states, "size": event.target.value })}}
          value={props.states["size"]}
        >
          <option value="">Choose</option>
          <option value="less than 5 ppl">less than 5 ppl</option>
          <option value="5 to 9 ppl">5 to 9 ppl</option>
          <option value="10 ppl or more">10 ppl or more</option>
        </select>
      </div>
    );
  }