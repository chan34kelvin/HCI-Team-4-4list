import React, { useState } from "react";
import { useLocation, useParams, useHistory, withRouter } from "react-router-dom";
import ListingFilter from '../filters/listingFilter';
import { Card, Row, Col } from "react-bootstrap";
import { GoSettings } from "react-icons/go";
import { homeListingsData, personalListingsData, jobsListingsData, communityListingsData,
forSalesListingsData, 
carsListingsData} from "./homeListingsData";
// import Filter from "../../events/views/list-components/filter/Filter";
// import newFilter from "../filters/newFilter";
// import EventButton from "../filters/EventButton";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Listings = () => {
    const listingTypes = {'/listings/housing':homeListingsData,'/listings/personal':personalListingsData,
    '/listings/jobs':jobsListingsData,'/listings/community':communityListingsData,
    '/listings/forsale': forSalesListingsData,'/listings/cars':carsListingsData};
    const [filter,setFilter] = useState(false);
    const location = useLocation();
    // console.log(location);
    // const history = useHistory();
    let data = [];
    // const l = {'/listings/tag': homeListingsData};
    // const { id } = useParams();
     // const [listings,setListings] = useState();
    // console.log(location.pathname);

    // listingTypes.forEach(e => {
    //     return location.pathname === e ? e : data = e;
    // });
    for (const [key, value] of Object.entries(listingTypes)) {
        if(location.pathname === key)
            data = value;
        // console.log(`${key}: ${value}`);
      }

    const openCloseFilter = () => {
        if(!filter && data.length > 0)
            setFilter(true);
        else
            setFilter(false);
    }

    // const handleSubmit = (e) => {
    //     history.push({pathname:`housing/${e}`,state:data});
    // }

    return(
        <div className="container-xxl d-flex flex-column gap-4" >
            {/* <ListingFilter/> */}
            {/* <label><h2>Listings</h2></label> */}

        <div className="row">
            <div className="col-12 py-3">
            <div className="row d-flex align-items-center g-4">
                <div className="col d-flex flex-wrap align-items-center">
                <div className="display-5 fw-bold me-auto">Listings</div>

                {/* Shows results found */}
                <div className="col-md-7">
                <div className="d-flex flex-wrap gap-2 text-secondary fs-3">
                    <div className="">{data.length}</div>
                    <div className="">results found</div>
                </div>
                </div>
           
                {/* Filter button */}
                <a role='button' onClick={openCloseFilter} style={{color:'blue'}}>
                <div className="text-decoration-none d-flex flex-column fs-4">
                    <div className="text-center"> 
                            <GoSettings />
                    </div>
                    <div className="">Filter</div>
                </div>
                </a>

                </div>
            </div>
            </div>
        </div>


            <Row xs={2} md={3} style={{marginTop:'0px'}} className="g-4 mb-4">
                {filter && < ListingFilter/>}
                    {data.map((data,key) => {
                        return(
                            <div key={key}>
                                <Col>
                                <Card style={{width: '18rem',justifyContent:'space-around',
                                    alignSelf:'flex-start'}}>
                                    <Link to={{pathname:`${location.pathname}/${data.id}`,state:data}} >
                                        <Card.Img variant="top" src={`/images/${data.image}`} 
                                        style={{width:'18rem',height:'10rem'}} />
                                    </Link >
                                    <Card.Body style={{backgroundColor: '#F0F0F0'}}>
                                    <Card.Title>{data.title}</Card.Title>
                                    <Card.Text>${data.price}</Card.Text>
                                    </Card.Body>
                                </Card>
                                </Col>
                            </div>
                            );
                        })}
            </Row>

        </div>
    );
}

export default Listings;