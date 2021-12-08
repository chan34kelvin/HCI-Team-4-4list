
export default function ZipCode(props) {

    const states = props.states
    const setStates = props.setStates

    return (
      <div
        className="d-flex flex-row w-100 align-items-center gap-4"
        style={{
          borderBottom: "1px solid",
          minWidth: "15%",
          maxWidth: "200px",
        }}
      >
        <input
          type="text"
          className="form-control text-md-center p-2 ps-1 fs-5"
          placeholder= "Zip Code"
          maxLength= "5"
          style={{
            border: "none",
            transition: "none",
            borderRadius: "0",
          }}
          onChange= {(event) => { setStates({...states, ["Zip"]: event.target.value })}}
        ></input>
      </div>
    );
  }