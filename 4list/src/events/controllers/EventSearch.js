import EventList from "./EventList"
import { useParams } from "react-router-dom"

export default function EventSearch() {
    const searchParam= useParams()["key"]
    return <EventList searchParam={searchParam}/>
}