import React, { useState } from "react";
import styled from "styled-components";
import "./CustomDropdown.css";

const DropDownContainer = styled.div`
    width: ${props => props.width ? props.width: "57.2%"};
`;
export default function CustomDropdown({options,width,handleInput}) {
  const [isActive, setIsActive] = useState(false);
  const [selected, setIsSelected] = useState("choose role");
  const [dropdownValid, setDropdownValid] = useState({
    dropdownName: "",
    dropdownNameError: "",
    dropdownOption: "",
    dropdownOptionError: "",
  });
  const onOptionClicked = (value) => () => {
    setIsSelected(value);
    setIsActive(false);
    handleInput && handleInput(value);
  };
//  console.log(options)
  return (  
    <div className="App">
      <DropDownContainer
        width={width}
       className="dropdown-custom-organization">
        <div
          onClick={(e) => {
            setIsActive(!isActive);
          }}
          className="dropdown-btn-custom"
        >
          {selected}
          {
        isActive ? <img src="../uparrow-icon.png"alt="up arrow"/ > : <img src="../uparrow-hover-icon.png" alt="down arrow"/>
          }
          
        </div>
        <div
          className="dropdown-content-custom"
          style={{ display: isActive ? "block" : "none" }}
        >
        {options.map((row) => {
            return (
          <div
            // onClick={(e) => {
            //   setIsSelected(e.target.textContent);
            //   setIsActive(!isActive);
            // }}
            onClick={onOptionClicked(row)} key={Math.random()}
            className="item-custom"
          >
            {row}
          </div>
            )
        })}
        </div>
      </DropDownContainer>
    </div>
  );
}