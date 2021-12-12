import { HiLocationMarker } from "react-icons/hi";
import { Link } from "react-router-dom";
import { GoSettings } from "react-icons/go";

export default function EventButton(props) {
  return (
    <div className="d-flex flex-wrap gap-4">
      {/* <Link to="/event" className="text-decoration-none d-flex flex-column fs-5">
        <div className="text-center">
          <IoArrowBackCircle />
        </div>
        <div className="">Events</div>
      </Link> */}
      <a
        data-bs-toggle="offcanvas"
        href="#eventFilter"
        role="button"
        className="text-decoration-none d-flex flex-column fs-4"
      >
        <div className="text-center">
          <GoSettings />
        </div>
        <div className="">Filter</div>
      </a>
      
    </div>
  );
}
