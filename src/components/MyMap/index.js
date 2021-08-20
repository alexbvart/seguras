import GoogleMapReact from 'google-map-react';
const AnyReactComponent = ({ text }) => (
    <div className="d-flex flex-column align-items-center">
        <h6 children="fs-6 text text-mute font-monospace">{text}</h6>
        <img className="m-0" 
            src="/assets/gps_icon.png" 
            alt="gps icono" />
    </div>
)
const MyMap = () => {
    const props = {
        center: {
            lat: -7.2208812,
            lng: -79.3958724
        },
        zoom: 11
    };
    return (
        <div className="container vh-100 p-2">
            <GoogleMapReact
                bootstrapURLKeys={{ key: "AIzaSyCZVmdkTW59CHpL1EeO2w1XZwUeaM6V0hM" }}
                defaultCenter={props.center}
                yesIWantToUseGoogleMapApiInternals
                defaultZoom={props.zoom}
            >
                <AnyReactComponent
                    lat={-7.2208812}
                    lng={-79.3958724}
                    text="Ubicación"
                />
            </GoogleMapReact>
        </div>
    );
}

export default MyMap;