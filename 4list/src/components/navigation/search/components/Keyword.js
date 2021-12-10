import { GoSearch } from "react-icons/go";

export default function Keyword(props) {
  const states = props.states;
  const setStates = props.setStates;

  function onSubmit(event) {
    event.preventDefault();
    console.log(states);
  }

  return (
    <form
      className="d-flex flex-row w-100 align-items-center gap-3"
      style={{
        borderBottom: "1px solid",
        minWidth: "90%",
      }}
      onSubmit={onSubmit}
    >
      <GoSearch type="submit" className="fs-3" onClick={onSubmit} />
      <input
        type="text"
        className="form-control text-lg-center p-2 fs-5"
        placeholder="Search"
        style={{
          border: "none",
          transition: "none",
          borderRadius: "0",
        }}
        onChange={(event) => {
          setStates({ ...states, "Keyword": event.target.value });
        }}
      ></input>
    </form>
  );
}
