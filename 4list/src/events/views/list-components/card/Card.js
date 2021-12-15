import { Link } from "react-router-dom";
import CardDetails from "./components/CardDetails";
import "./Card.css";

export default function Card(props) {
  const id = props.id;
  const title = props.title;
  const details = props.details;
  const image = props.image;

  return (
    <div className="col-12">
      <div className="">
        <div className="row mx-auto">
          <Link
            to={"/event/" + id}
            className="col-12 col-sm-4 col-lg-3 col-xxl-2 px-0"
            style={{ maxWidth: "100%", maxHeight: "100%" }}
          >
            <div className="ratio ratio-4x3 ">
              <img src={"/images/" + image} width="100%" height="100%" style={{objectFit: "scale-down"}}/>
            </div>
          </Link>
          <Link
            to={"/event/" + id}
            className="text-decoration-none col-12 col-sm-8 col-lg-9 p-0 ps-1 ps-sm-5"
          >
            <div className="d-flex flex-column gap-3">
              <div className="" style={{ fontSize: "150%" }}>
                {title}
              </div>
              <CardDetails details={details} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
