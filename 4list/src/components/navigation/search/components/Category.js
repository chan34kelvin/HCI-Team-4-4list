export default function Category(props) {
  const states = props.states
  const setStates = props.setStates

  return (
    <div
      className="d-flex flex-row w-100 align-items-center gap-3"
      style={{
        borderBottom: '1px solid',
        minWidth: '20%',
        maxWidth: '250px',
      }}
    >
      <select
        className="form-select text-lg-center p-2 ps-0 fs-5"
        style={{
          border: 'none',
          transition: 'none',
          borderRadius: '0',
        }}
        onChange={(event) => {
          setStates({ ...states, Category: event.target.value })
        }}
        value={states.Category}
      >
        <option value="event">Event</option>
        <option value="forum">Discussion forum</option>
        <option value="listings/housing">Housings</option>
        <option value="listings/jobs">Jobs</option>
        <option value="listings/cars">For sale</option>
        {/* <option value="listings/personal">Personal</option>
        <option value="listings/jobs">Jobs</option> */}
      </select>
    </div>
  )
}
