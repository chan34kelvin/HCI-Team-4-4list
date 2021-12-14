import EventList from "./EventList"
import {useEffect} from "react"
import { useParams } from "react-router-dom"

export default function EventSearch(props) {
    const searchParam= useParams()["key"]
    return <EventList searchParam={searchParam} area={props.area}/>
}