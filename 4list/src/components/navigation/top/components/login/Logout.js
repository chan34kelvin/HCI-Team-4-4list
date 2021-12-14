export default function Logout(props){
    
    function logout(event){
        event.preventDefault()
        props.setLogin(Math.random())
        sessionStorage.setItem("cookie", false)
    }

    return(
        <div role="button" className= "text-decoration-none d-flex align-items-center my-3 mx-2" onClick={logout} style={{maxHeight: "75px"}}>
            <div className= "py-2 px-lg-4 fs-4 text-dark text-start text-lg-center" style={{background: "transparent", borderRadius: "10px"}}>
                Sign out
            </div>
        </div>
    )
}