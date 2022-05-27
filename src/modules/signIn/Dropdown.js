import React, { useState } from "react";
import "./style.css";

export default function CustomDropdown(props) {
  // let { state, onChangeEvent, onLoginClicked, togglePassword } = props;
  const [isActive, setIsActive] = useState(false);
  const [phoneValid, setPhoneValid] = useState({
    phone: "",
    isValid: false,
    message: ""
  })
  const [selected, setIsSelected] = useState("Choose one");
  const UserCateg= ["Seller", "Professional", "Student", "Institute", "Educationist"];
 
  const onHandleChange = (event) => {
    // setPhoneValid({event.target.value})
  }
  return (  
    <div className="App">
      <div className="dropdown-custom">
        <div
          onClick={(e) => {
            setIsActive(!isActive);
          }}
          
          

          className="dropdown-btn-custom"
        >
          {selected}
          {
        isActive ? <img src="../icons/dropdown-down-arrow.svg"alt="up arrow"/ > : <img src="../icons/dropdown-up-arrow.svg" alt="down arrow"/>
          }
          
        </div>
        <div
          className="dropdown-content-custom"
          style={{ display: isActive ? "block" : "none" }}
          
        >
        {UserCateg.map((row) => {
            return (
          <div
            onClick={(e) => {
              setIsSelected(e.target.textContent);
              setIsActive(!isActive);
            }}
            
            className="item-custom"
          >
            {row}
          </div>
            )
        })}
        </div>
      </div>
    </div>
  );
}












