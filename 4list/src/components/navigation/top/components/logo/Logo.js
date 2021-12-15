import { Link } from "react-router-dom"


export default function Logo(){

    const logo = "/HCI-Team-4/images/Logo.png"
    
    return(
        <div className= "" style = {{minWidth: "18%"}} >
            <Link to="/" className= "text-decoration-none">
                <div className= "ratio ratio-16x9" style={{minWidth: "100px"}}>
                    <img src= {logo} alt="logo"/>
                </div>
            </Link>
        </div>
    )
}