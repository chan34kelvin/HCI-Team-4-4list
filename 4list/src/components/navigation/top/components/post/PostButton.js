import { Link } from "react-router-dom";

export default function PostButton(){

    const postLink = "/post"

    return(
        <Link className= "text-decoration-none btn d-flex align-items-center" to={postLink} style={{maxHeight: "75px"}}>
            <div className= "py-2 px-sm-4 fs-4 text-light w-100" style={{background: "#ff8c00", borderRadius: "10px"}}>
                Post an Ad
            </div>
        </Link>
    )
}