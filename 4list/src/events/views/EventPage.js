import EventDetail from "./page-components/EventDetail";
import EventImage from "./page-components/EventImage";

import EventButton from "./page-components/EventButton";
import EventLocation from "./page-components/EventLocation";
import EventUser from "./page-components/EventUser";
import EventTicket from "./page-components/EventTicket";

export default function EventPage(props) {

  //changes the title of the page
  if (document.getElementById("pageTitle")) {
    document.getElementById("pageTitle").innerHTML = "4List - " + props.title;
  }
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
      <div className="row g-5 mb-5" id="user">
        <div className="col-12 fs-3">
          Ticket Negotitation
        </div>
      </div>
      <EventTicket/>
    </div>
  );
}
