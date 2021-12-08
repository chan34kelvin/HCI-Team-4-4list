import { Link } from "react-router-dom"


export default function Logo(){

    const logo = "/images/Logo.png"
    
    return(
        <div className= "" style = {{minWidth: "20%"}} >
            <Link className= "text-decoration-none" to="/">
                <div className= "ratio ratio-16x9" style={{minWidth: "75px"}}>
                    <img src= {logo} alt="logo"/>
                </div>
            </Link>
        </div>
    )
}