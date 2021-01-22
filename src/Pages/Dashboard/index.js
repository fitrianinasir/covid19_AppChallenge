import React, { useEffect, useState } from "react";
import Select from "react-select";
import store from "../../redux/store";
import getLatestTotal from "../../Functions/getLatestTotal";
import getAllCountries from "../../Functions/getAllCountries";
import getCountry from '../../Functions/getCountry'
import Sidebar from "../../Components/Sidebar";
import Header from "../../Components/Header";

function Index(props) {
  const [total, setTotal] = useState({});
  const [countries, setCountries] = useState({});

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
        }));

      let new_countries = {
        ...store.getState().countriesReducer,
        allCountries: countries,
      };
      setCountries(new_countries);
      setTotal(store.getState().totalReducer);
    });
  }, []);

  const handleChange = selected => {  
    store.dispatch(getCountry(selected.value))
  }

  return (
    <div>
      <Sidebar
        header={
          <Header
            data={total.latestTotal && total.latestTotal[0]}
            content={
              <div class="row">
                <div class="col-xl-12">
                  <div class="card p-4" style={{height:'100vh'}}>
                    <Select
                      className="mt-3 col-xl-2"
                      menuIsOpen={true}
                      onChange={handleChange}
                      options={countries.allCountries && countries.allCountries}
                    />
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
