import { Link } from "react-router-dom";

export default function PostButton(){

    const postLink = "/post"

    return(
        <Link className= "text-decoration-none d-flex align-items-center my-3 mx-2" to={postLink} style={{maxHeight: "75px"}}>
            <div className= "py-2 px-lg-4 fs-4 text-light w-100 text-center" style={{background: "#ff8c00", borderRadius: "10px"}}>
                Post an Ad
            </div>
        </Link>
    )
}