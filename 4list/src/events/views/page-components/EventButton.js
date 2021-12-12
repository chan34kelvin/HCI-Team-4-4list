import { HiLocationMarker } from "react-icons/hi"
import { MdPersonPin } from "react-icons/md"
import { MdDescription } from "react-icons/md"

export default function EventButton() {
  return (
    <div className="d-flex flex-wrap gap-4">
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
