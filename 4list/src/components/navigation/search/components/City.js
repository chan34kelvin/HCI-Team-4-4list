export default function City(props) {
  const states = props.states;
  const setStates = props.setStates;

  return (
    <div
      className="d-flex flex-row w-100 align-items-center gap-3"
      style={{
        borderBottom: "1px solid",
        minWidth: "25%",
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
          setStates({ ...states, "City": event.target.value });
        }}
      >
        <option value="">All Cities</option>
        <option value="San Francisco">San Francisco</option>
        <option value="Pacifica">Pacifica</option>
        <option value="Berkeley">Berkeley</option>
        <option value="Alameda">Alameda</option>
        <option value="Walnut Creek">Walnut Creek</option>
      </select>
    </div>
  );
}
