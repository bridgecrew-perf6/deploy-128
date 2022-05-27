import React, { useEffect, useState, useRef } from "react";

import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import { makeStyles } from "@material-ui/core/styles";

import Geonames from "geonames.js";
import PropTypes from "prop-types";
import Styled from "styled-components";

const geonames = new Geonames({
  username: "thalesandrade",
  lan: "en",
  encoding: "JSON"
});

const Selected =  Styled(Select)`
width: ${props => props.width ? props.width : "304px"};
height: 55px;
text-align:center;

background: #FFFFFF;
border: 1px solid rgba(31, 31, 31, 0.5);
border-radius: 5px;

`;

const MenuItemed = Styled(MenuItem)
`
width:260px !important;
background:#fff !important;

width: auto;
height: auto;
overflow: hidden;
min-height: 1.1875em;
white-space: nowrap;
text-overflow: ellipsis;
text-align: justify;
padding: 0 10px !important;
`;
// const useStyles = makeStyles((theme) => ({
//   formControl: {
//     minWidth: "100%"
//   },
//   selectEmpty: {
//     marginTop: theme.spacing(2)
//   }
// }));

const InputLabeled =Styled(InputLabel )`
margin: auto 0;

`;
export default function GeoLocation(props) {
//   const classes = useStyles();
  const { locationTitle, geoId, onChange, isCountry , width} = props;
  const [options, setOptions] = useState([]);
  const [currentItem, setCurrentItem] = useState("");
  const [labelWidth, setLabelWidth] = useState(0);

  useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  useEffect(() => {
    try {
      const data = async () => {
        (await isCountry)
          ? geonames.countryInfo({}).then((res) => {
              console.log(res);
              setOptions(res.geonames);
            })
          : geonames.children({ geonameId: geoId }).then((res) => {
              if (res.totalResultsCount) setOptions(res.geonames);
            });
      };
      data();
    } catch (err) {
      console.error(err);
    }
  }, [geoId, isCountry]);

  const inputLabel = useRef(null);

  const handleChange = (e) => {
    setCurrentItem(e.target.value);
    onChange(e.target.value);
  };

  return (
    <FormControl variant="outlined" >  {/*className={classes.formControl}*/}
      <InputLabeled 
     
      ref={inputLabel} id="demo-simple-select-outlined-label">
        {locationTitle}
      </InputLabeled>

      <Selected
        labelId="demo-simple-select-outlined-label"
        id="demo-simple-select-outlined"
        value={currentItem}
        onChange={handleChange}
        labelWidth={labelWidth}
        width={width}
      >
        <MenuItemed value=""  width={width}>
          <em>Select</em>
        </MenuItemed>
        {options.map((v, index) => (
          <MenuItemed key={index} value={v.geonameId}  width={width}>
            {isCountry ? v.countryName : v.name}
          </MenuItemed>
        ))}
      </Selected>
    </FormControl>
  );
}

GeoLocation.propTypes = {
  locationTitle: PropTypes.string,
  geoId: PropTypes.node,
  isCountry: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  width:PropTypes.string
};

GeoLocation.defaultProps = {
  onChange: undefined
};
