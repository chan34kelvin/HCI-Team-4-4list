import EventDetail from "./page-components/EventDetail";
import EventImage from "./page-components/EventImage";

import EventButton from "./page-components/EventButton";
import EventLocation from "./page-components/EventLocation";
import EventUser from "./page-components/EventUser";

export default function EventPage(props) {
  return (
    <div className="container-xxl d-flex flex-column gap-4">
      <div className="row g-4">
        <div className="col-md-8">
          <div className="fs-1 fw-bold">{props.title}</div>
        </div>
        <div className="col-md-4">
          <div className="d-flex justify-content-md-end">
            <EventButton />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <EventDetail detail={props.details} />
        </div>
      </div>
      <hr />
      <div className="row g-5 mb-4" id="description">
        <div className="col-md-5">
          <EventImage image={props.image} />
        </div>
        <div className="col-md-7">
          <div className="row">
            <div className="col-12 fs-4 lh-lg">{props.description}</div>
          </div>
        </div>
      </div>
      <div className="row g-5 mb-5" id="location">
        <div className="col-12">
          <EventLocation
            address={props.address}
            locDetails={props.locDetails}
            center={props.center}
            detail={props.details}
          />
        </div>
      </div>
      <div className="row g-5 mb-5" id="user">
        <div className="col-12 fs-3">
          <EventUser user={props.user} />
        </div>
      </div>
    </div>
  );
}

{
  /* <a
        className="btn btn-primary"
        data-bs-toggle="offcanvas"
        href="#offcanvasExample"
        role="button"
        aria-controls="offcanvasExample"
      >
        Link with href
      </a>
      <button
        className="btn btn-primary"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasExample"
        aria-controls="offcanvasExample"
      >
        Button with data-bs-target
      </button>

      <div
        className="offcanvas offcanvas-start"
        tabindex="-1"
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasExampleLabel">
            Offcanvas
          </h5>
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <div>
            Some text as placeholder. In real life you can have the elements you
            have chosen. Like, text, images, lists, etc.
          </div>
          <div className="dropdown mt-3">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-bs-toggle="dropdown"
            >
              Dropdown button
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <li>
                <a className="dropdown-item" href="#">
                  Action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div> */
}
