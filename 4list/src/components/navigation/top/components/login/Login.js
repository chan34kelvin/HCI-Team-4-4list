import { Link } from "react-router-dom";

export default function Login(){
    
    const login = "/Login"

    return(
        <Link className= "text-decoration-none d-flex align-items-center my-3 mx-2" to={login} style={{maxHeight: "75px"}}>
            <div className= "py-2 px-lg-4 fs-4 text-dark text-start text-lg-center" style={{background: "transparent", borderRadius: "10px"}}>
                Sign In
            </div>
        </Link>
    )
}