export default function EventList(props) {
  return (
    <div className="container-xxl d-flex flex-column gap-4">
      <div className="row">
        <div className="col-12 py-3">
          <div className="row d-flex align-items-center g-4">
            <div className="col-md-4 fs-1 fw-bold">{"Events"}</div>
            <div className="col-md-8 fs-2 font-monospace align-self-end">{"198 results found"}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
