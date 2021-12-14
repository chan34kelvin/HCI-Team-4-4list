import EventList from "./EventList"
import { useParams } from "react-router-dom"

export default function EventSearch() {
    const searchParam= useParams()["key"]
    console.log(searchParam)
    return <EventList searchParam={searchParam}/>
}