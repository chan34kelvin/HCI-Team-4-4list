import Card from "./list-components/card/Card";
import EventButton from "./list-components/EventButton";
import Filter from "./list-components/filter/Filter";

export default function EventList(props) {
  //changes the title of the page
  if (document.getElementById("pageTitle")) {
    document.getElementById("pageTitle").innerHTML = "4List - "+props.text;
  }
  const data = props.data;
  return (
    <div className="container-xxl d-flex flex-column gap-4">
      {/* title, filter button */}
      <div className="row">
        <div className="col-12 py-3">
          <div className="row d-flex align-items-center g-4">
            <div className="col d-flex flex-wrap align-items-center">
              <div className="display-5 fw-bold me-auto">{props.text}</div>
              <EventButton />
            </div>
          </div>
        </div>
      </div>

      {props.error && (
        <div className="row">
          <div className="col-12 py-3 fs-1">
            No Results found, <a href="/HCI-Team-4/event">Click here to refresh events</a>
          </div>
        </div>
      )}
      {/* individual dates */}
      {!props.error &&
        data.map((info) => (
          <div key={info["date"]} className="row g-4 pb-5">
            {/* showing date and then how many was found */}
            <div className="col-12">
              <div className="row g-3">
                <div className="col-md-5 fs-3">
                  <div className="d-flex flex-row gap-4">
                    <div className="">{info["date"]}</div>
                    <div className="">{info["weekDay"]}</div>
                  </div>
                </div>
                <div className="col-md-7">
                  <div className="d-flex flex-wrap gap-2 text-secondary fs-3">
                    <div className="">{info["length"]}</div>
                    <div className="">results found</div>
                  </div>
                </div>
              </div>
              <hr />
            </div>

            {/* now show the list of cards */}
            {info["data"] && (
              <div className="col-12">
                <div className="row gy-5">
                  {info["data"].map((card) => (
                    <Card
                      key={card["id"]}
                      id={card["id"]}
                      title={card["title"]}
                      details={card["details"]}
                      image={card["image"]}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}

      {/* filters */}
      <Filter
        venues={props.venues}
        categories={props.categories}
        states={props.states}
        setStates={props.setStates}
      />
    </div>
  );
}
