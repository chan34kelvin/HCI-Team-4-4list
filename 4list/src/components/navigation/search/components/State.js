export default function State(props) {
  const states = props.states;
  const setStates = props.setStates;

  return (
    <div
      className="d-flex flex-row w-100 align-items-center gap-3"
      style={{
        borderBottom: "1px solid",
        minWidth: "15%",
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
          setStates({ ...states, ["State"]: event.target.value });
        }}
      >
        <option value="">State</option>
      </select>
    </div>
  );
}
