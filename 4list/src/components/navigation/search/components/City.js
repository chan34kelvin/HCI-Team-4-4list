export default function City(props) {
  const states = props.states;
  const setStates = props.setStates;

  return (
    <div
      className="d-flex flex-row w-100 align-items-center gap-3"
      style={{
        borderBottom: "1px solid",
        minWidth: "30%",
      }}
    >
      <select
        className="form-select text-lg-center p-2 ps-0 fs-5"
        style={{
          border: "none",
          transition: "none",
          borderRadius: "0",
        }}
        onChange={(event) => {
          setStates({ ...states, ["City"]: event.target.value });
        }}
      >
        <option value="">City</option>
        <option value="San Francisco">San Francisco</option>
      </select>
    </div>
  );
}
