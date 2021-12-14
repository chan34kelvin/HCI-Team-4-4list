import React from "react";
import { Row,Card } from "react-bootstrap";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
// import { useParams } from "react-router-dom";
import { useParams, Redirect, useLocation } from "react-router-dom";
import { homeListingsData, personalListingsData, jobsListingsData, communityListingsData,
    forSalesListingsData } from "./homeListingsData";
import SimpleImageSlider from "react-simple-image-slider";

const Listing = (data) => {
    const { id } = useParams();
    const listingTypes = {'/listings/housing':homeListingsData,'/listings/personal':personalListingsData,
    '/listings/jobs':jobsListingsData,'/listings/community':communityListingsData,
    '/listings/forsale': forSalesListingsData};
    // let data = useLocation();
    console.log(data.location.state.details);
    // console.log(data.location.state.id);
    if(data.location.state === undefined && data.location){
        <Redirect to='/' />
    }

    const containerStyle = {
        width: '300px',
        height: '300px'
      };
      
      const center = {
        lat: 37.7749,
        lng: -122.4194
      }; 

      const loopDetails = () => {
        Object.entries(data.location.state.details).forEach((entry) => {
            const [key, value] = entry;
            // console.log(`${key}: ${value}`);
            return (
               <div>{`${key} : ${value}`}</div>
            )
          });
      }

      const images = [
        { url: `/images/${data.location.state.image}` },
      ];
      

    return (    
        <div className='container-xxl d-flex flex-column gap-4'>
            {/* {data.location.state === undefined ? <Redirect to='/'/> : null} */}
            {/* {data.filter((list) => list.id ===)} */}
            
            <Row xs={1} md={3}>
            <div>
                <div className="display-6 me-auto mb-4">{data.location.state.title}</div>
                {/* <img src={`/images/${data.location.state.image}`} style={{width:'25.5rem',height:'20rem'}}/>
                <Row xs={1} md={3}>
                    {Array.from({length: 3}).map((_,idx) => (
                        <Card style={{width: '8.9rem',height:'6rem',justifyContent:'space-around',
                        alignSelf:'flex-start'}}>   
                            <Card.Img src='/images/Logo.png'/>
                        </Card>
                    ))}
                 </Row> */}

                 <SimpleImageSlider
                    width={'25rem'}
                    height={'20rem'}
                    images={images}
                    // showBullets={true}
                    showNavs={true}
                 />
            </div>
            
            <div>
                <div className="display-6 fw-bold me-auto mb-4">Details</div>
                <div className="border border-dark" style={{width:'22rem',height:'29rem',
                    backgroundColor:'#F0F0F0'}}>
                    {/* Loop through details array */}
                    <div className="fw-bold" style={{fontSize:'25px'}}>{data.location.state.built}</div>
                    <div className="fw-bold" style={{fontSize:'25px'}}>
                        </div>
                </div>
            </div>

            <div >
                <div className="d-flex flex-wrap gap-2 text-secondary fs-3 mb-4">${data.location.state.price}</div>
                <button style={{backgroundColor: '#EA840D', color: 'white',
                                 borderRadius: '10px', fontSize: '18px',
                                 margin:'2px 5px', padding: '5px', border:'15px',width:'20rem',height:'3rem'}}
                                 className="mb-3">
                            Contact Seller
                </button>
                <button style={{backgroundColor: '#5297E8', color: 'white',
                                 borderRadius: '10px', fontSize: '18px',
                                 margin:'2px 5px', padding: '5px', border:'15px',width:'20rem',height:'3rem'}}
                                 className="mb-4">
                    Save For Later
                </button>

                <div className="fw-bold">Location</div>
                
                <LoadScript googleMapsApiKey="AIzaSyD83drqxn_tmCcwf8NB1_vNwed9BRkU1VE">
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    zoom={18}
                    center={center}
                >
                    <Marker  position={center} />
                </GoogleMap>
                </LoadScript>
            </div>
            </Row>

            <Row xs={1} md={2}>
                <div>
                    <div className="fw-bold">Description</div>
                    <Card style={{width:'50rem',height:'10rem'}} >
                        <Card.Title style={{backgroundColor: '#F0F0F0',height:'2rem'}}>
                            {`${data.location.state.username} - Date Posted: `}
                            {`${data.location.state.datePosted}`}
                        </Card.Title>
                        <Card.Body style={{backgroundColor: '#C4C4C4'}}>
                        <Card.Text >{data.location.state.description}</Card.Text>
                        </Card.Body>
                    </Card>
                </div>

                <div className="mb-4">
                    {/* <div className="fw-bold" style={{postion:'absolute',left:'220px'}}>Contact Information</div> */}
                    <Card  className="position-relative" style={{width:'19rem',height:'10rem',
                position:'absolute',left:'220px',marginTop:'22px'}} >
                        <Card.Body style={{backgroundColor: '#F0F0F0'}}>
                        <Card.Title>Contact Information</Card.Title>
                        <Card.Text >
                            <div>{data.location.state.seller}</div>
                            <div>{data.location.state.email}</div>
                            <div>{data.location.state.phone}</div>
                        </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </Row>

        </div>
    );
}

export default Listing;