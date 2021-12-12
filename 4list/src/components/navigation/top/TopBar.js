import Logo from "./components/logo/Logo";
import Login from "./components/login/Login";
import PostButton from "./components/post/PostButton";

import { AiOutlineMenu } from "react-icons/ai";
import { GoSearch } from "react-icons/go";

export default function TopBar() {
  return (
    <div className="d-flex flex-column flex-lg-row w-100 gap-3">
      
      {/* home button and menu */}
      <div className="d-flex flex-row flex-grow-1">
        <Logo />
        <button
          className="btn navbar-toggler ms-auto"
          style={{ border: "none", boxShadow: "none", color: "inherit" }}
          data-bs-toggle="collapse"
          data-bs-target="#navSearchBar"
        >
          <GoSearch className="display-4" />
        </button>
        <button
          className="btn navbar-toggler"
          style={{ border: "none", boxShadow: "none", color: "inherit" }}
          data-bs-toggle="collapse"
          data-bs-target="#navMenu"
        >
          <AiOutlineMenu className="display-4" />
        </button>
      </div>

      {/* menu for login and posting */}
      <div className="ms-lg-auto d-flex flex-column flex-lg-row">
        <div
          className="navbar-collapse collapse align-items-start"
          id="navMenu"
         
        >
          <Login />
          <PostButton />
        </div>
      </div>
    </div>
  );
}
