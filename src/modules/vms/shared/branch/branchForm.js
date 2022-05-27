import React,{useState} from "react";
import GeoLocation from "./GeoLocation";


const BranchForm = (props) => {
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");


  return (
    <div>
      <form className="container-fluid mt-2 sm-container-fulid">
        <div className="col pl-0">
          <label for="inputEmail4" className="b-font">
            Branch Contact Person Name* </label>
        </div>
        <div className="form-row">
          <div class="form-group col-md-6">
            <input
              title="First Name"
              type="email"
              class="form-control b-field-height"
              id="inputEmail4"
              placeholder="First Name"
            />
          </div>
          <div className="form-group col-md-6 ">
            <input
              type="password"
              className="form-control b-field-height"
              id="inputPassword4"
              placeholder="Last Name"
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group col-md-6">
            <label for="inputEmail4" className="b-font">
              Email ID*
            </label>
            <input
              type="email"
              className="form-control b-field-height"
              id="inputEmail4"
              placeholder="fullname@gmail.com"
            />
          </div>

          <div className="col-md-6 mb-3">
            <label for="validationServerUsername" className="b-font">
              Contact Number*
            </label>
            <div className="input-group">
              <div className="input-group-prepend border border-dark ">
                <input
                  className="input-group-text b-region-field-phone"
                  placeholder="+91"
                />
              </div>
              <input
            
                className="form-control b-field-height"
                placeholder="99999 99999"
                
              />
            </div>
          </div>
        </div>

        <div className="form-group">
          <label for="inputAddress2" className="b-font">
            Branch Address*
          </label>
          <input
            type="text"
            className="form-control b-field-height"
            id="inputAddress2"
            placeholder="#Flat No, Block, Street, Area"
          />
        </div>

        <div className="form-row w-100">
          <div className="form-group col-md-3">
          <GeoLocation
                className={props.className}
                locationTitle="Country"
                isCountry
                onChange={setCountry}
                

              />
          </div>

          <div className="form-group col-md-3">
          <GeoLocation
                locationTitle="State"
                onChange={setState}
                geoId={country}
                
              
              />
          </div>

       
          <div className="form-group col-md-3">
          <GeoLocation
                locationTitle="City"
                onChange={setCity}
                geoId={state}
                
              />
            </div>


          <div className="form-group col-md-3 mt-3">
            <input
              type="text"
              className="form-control b-field-height "
              id="inputZip"
              placeholder="12345"
             
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default BranchForm;
