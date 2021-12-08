import { Link } from "react-router-dom";

export default function Login(){
    
    const login = "/Login"

    return(
        <Link className= "text-decoration-none btn d-flex align-items-center" to={login} style={{maxHeight: "75px"}}>
            <div className= "py-2 fs-4 text-dark w-100 text-start text-lg-center" style={{background: "transparent", borderRadius: "10px"}}>
                My Account
            </div>
        </Link>
    )
}