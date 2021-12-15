
export default function EventImage(props){
    return(
        <div className="ratio ratio-1x1">
            <img src={props.image} alt="event" style={{objectFit: "contain"}}/>
        </div>
    )
}