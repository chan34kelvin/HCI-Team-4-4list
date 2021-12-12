export default function Reset(props){

    function ResetAction(event){

        let newObj= {}
        for(let key in props.states){
            newObj[key] = ""
        }
        props.setStates(newObj)
        event.preventDefault()
    }

    return(
        <div className="btn btn-primary mt-5 p-3 fs-5 fw-bold" onClick={ResetAction}>
            Reset
        </div>
    )
}