import EventDetail from "./page-components/EventDetail";
import EventImage from "./page-components/EventImage";

import EventButton from "./page-components/EventButton";
import EventLocation from "./page-components/EventLocation";
import EventUser from "./page-components/EventUser";

export default function EventPage(props) {
  return (
    <div className="container-xxl d-flex flex-column gap-4">
      <div className="row">
        <div className="col-12 py-3">
          <div className="d-flex flex-wrap align-items-center gap-4">
            <div className="fs-1 fw-bold me-auto">{props.title}</div>
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
      <div className="row g-5 mb-4">
        <div className="col-md-5">
          <EventImage image={props.image} />
        </div>
        <div className="col-md-7">
          <div className="row">
            <div className="col-12 fs-4 lh-lg">{props.description}</div>
          </div>
        </div>
      </div>
      <div className="row g-5 mb-5">
        <div className="col-12">
            <EventLocation address={props.address} locDetails={props.locDetails} center={props.center} detail={props.details}/>
        </div>
      </div>
      <div className="row g-5 mb-5">
        <div className="col-12 fs-3">
            <EventUser user={props.user}/>
        </div>
      </div>
    </div>
  );
}
