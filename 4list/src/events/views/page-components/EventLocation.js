import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

export default function EventLocation(props) {
  const mapStyles = {
    height: "100%",
    width: "100%",
  };

  let locDetails = [];
  let i = 0;
  for (let key in props.locDetails) {
    locDetails[i++]=(<div className="d-flex flex-wrap gap-4">
      <div className="fw-bold">{key.charAt(0).toUpperCase() + key.slice(1).toLowerCase()}:</div>
      <div className="">{props.locDetails[key]}</div>
    </div>)
  }

  return (
    <div className="row g-5 fs-4">
      <div className="col-md-5">
        <div className="ratio ratio-1x1">
          {props.center && (
            <LoadScript googleMapsApiKey={process.env.GOOGLE_MAPS_API_KEY}>
              <GoogleMap
                mapContainerStyle={mapStyles}
                zoom={18}
                center={props.center}
              >
                <Marker key={props.address} position={props.center} />
              </GoogleMap>
            </LoadScript>
          )}
        </div>
        {/* <!-- //this code is obtained from google api
//https://www.youtube.com/watch?v=29Dp2mSwS4w for learning how to use axios
//https://developers.google.com/maps/documentation/javascript/adding-a-google-map for the marker and init map
//https://developer.mapquest.com/documentation/open/geocoding-api/ how to use geocode here --> */}
      </div>
      <div className="col-md-7">
        <div className="d-flex flex-column gap-4">
          <div className="d-flex flex-wrap gap-4">
            <div className="fw-bold">Location:</div>
            <div className="">{props.address}</div>
          </div>
          {locDetails}
          {/* <EventDetail detail={props.detail} /> */}
        </div>
      </div>
    </div>
  );
}
