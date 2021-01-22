import React, { useEffect, useState } from "react";

// import packages
import { Icon } from "leaflet";
import Select from "react-select";
import Skeleton from "react-loading-skeleton";
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";

// import from other components
import store from "../../redux/store";
import getLatestTotal from "../../Functions/getLatestTotal";
import getAllCountries from "../../Functions/getAllCountries";
import getCountry from "../../Functions/getCountry";
import Sidebar from "../../Components/Sidebar";
import Header from "../../Components/Header";
import "leaflet/dist/leaflet.css";

function ChangeView({ center, zoom }) {
  const map = useMap();
  map.setView(center, zoom);
  return null;
}

function Index(props) {
  const zoom = 5;
  const [total, setTotal] = useState({});
  const [countries, setCountries] = useState({});
  const [position, setPosition] = useState([-5.1740328, 119.4427]);


  let getHTML = document.getElementsByClassName("css-1wa3eu0-placeholder")[0];
  if (getHTML) {
    getHTML.innerHTML = "Search";
  }

  useEffect(() => {
    store.dispatch(getLatestTotal());

    setTimeout(() => {
      store.dispatch(getAllCountries());
    }, 3000);

    store.subscribe(() => {
      let countries = store
        .getState()
        .countriesReducer.allCountries.map((country) => ({
          value: country.alpha2code,
          label: country.name,
          location: { lat: country.latitude, lng: country.longitude },
        }));

      let new_countries = {
        ...store.getState().countriesReducer,
        allCountries: countries,
      };
      setCountries(new_countries);
      setTotal(store.getState().totalReducer);
    });

  }, []);

  const handleChange = (selected) => {
    setPosition(selected.location);
    store.dispatch(getCountry(selected.value));
  };

  const MapComponent = () => {
    return (
      <MapContainer
        center={position}
        zoom={zoom}
        style={{ height: "400px" }}
      >
        <ChangeView center={position} zoom={zoom} />
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
        />

        <Marker
          position={position}
          icon={new Icon({ iconUrl: markerIconPng })}
        />
      </MapContainer>
    );
  };

  let data = store.getState().countryReducer.country[0];
  
  return (
    <div>
      <Sidebar
        header={
          <Header
            data={total.latestTotal && total.latestTotal[0]}
            content={
              <div>
                <div className="row">
                  <div className="col-xl-12">
                    <div className="card p-4" style={{ height: "100vh" }}>
                      <div className="float-left col-xl-2">
                        {countries.allCountries !== undefined ? (
                          <Select
                            className="mt-3"
                            menuIsOpen={true}
                            onChange={handleChange}
                            options={countries.allCountries}
                          />
                        ) : (
                          <Skeleton width={150} height={500} />
                        )}
                      </div>
                      <div className="map-style float-right col-xl-10">
                        {MapComponent()}
                        <center>
                          <div className="row mt-2">
                            <div className="detail-box col-xl-3">
                              <h6>Confirmed</h6>
                              <h2>
                                {data !== undefined ? data.confirmed : "-"}
                              </h2>
                            </div>
                            <div className="detail-box col-xl-3">
                              <h6>Recovered</h6>
                              <h2>
                                {data !== undefined ? data.recovered : "-"}
                              </h2>
                            </div>
                            <div className="detail-box col-xl-3">
                              <h6>Critical</h6>
                              <h2>
                                {data !== undefined ? data.critical : "-"}
                              </h2>
                            </div>
                            <div className="detail-box col-xl-3">
                              <h6>Deaths</h6>
                              <h2>{data !== undefined ? data.deaths : "-"}</h2>
                            </div>
                          </div>
                        </center>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            }
          />
        }
      />
    </div>
  );
}

export default Index;
