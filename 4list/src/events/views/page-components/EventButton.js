import { HiLocationMarker } from "react-icons/hi"
import { Link } from "react-router-dom"
import { MdPersonPin } from "react-icons/md"
import { MdDescription } from "react-icons/md"
import { IoArrowBackCircle } from "react-icons/io5"

export default function EventButton(props) {

  return (
    <div className="d-flex flex-wrap gap-4">
      {/* <Link to="/event" className="text-decoration-none d-flex flex-column fs-5">
        <div className="text-center">
          <IoArrowBackCircle />
        </div>
        <div className="">Events</div>
      </Link> */}
      <a href="#user" className="text-decoration-none d-flex flex-column fs-5">
        <div className="text-center">
          <MdPersonPin />
        </div>
        <div className="">Contacts</div>
      </a>
      <a href="#description" className="text-decoration-none d-flex flex-column fs-5">
        <div className="text-center">
          <MdDescription />
        </div>
        <div className="">Description</div>
      </a>
      <a href="#location" className="text-decoration-none d-flex flex-column fs-5">
        <div className="text-center">
          <HiLocationMarker />
        </div>
        <div className="">Location</div>
      </a>
    </div>
  );
}
