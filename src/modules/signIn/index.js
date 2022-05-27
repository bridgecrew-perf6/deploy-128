import React from "react";
import BaseComponent from "../baseComponent";
import FormDialog from "./Dialogue"
import SignIn from "./signIn";
import Utils, {dispatchAction} from "../../utility";
import {UserService} from "../../services";
import {eventConstants} from "../../constants"
import { connect } from "react-redux";
import {actionTypeConstant, cookiesConstants, genericConstants, userRoles} from "../../constants/index";
import { history } from "../../managers/history";

class SignInComponent extends BaseComponent {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
      submitted: false,
      openPasswordPopup:false,
      chooseCategory: "",
      chooseCategoryError: "",
      name: "",
      nameError: "",
      email: "",
      emailError: "",
      password: "",
      passwordError: "",
      type:"",
      userRole: "",
    };
  }

  componentDidMount() {}

  onChangeEvent = (event) => {
    
    this.setState({[event.target.id]: event.target.value});
};

  togglePassword = (event) => {
    this.setState({isPasswordVisible: !this.state.isPasswordVisible});
  };

  togglePasswordPopup = () => {
    this.setState((prevState) => ({openPasswordPopup : !prevState.openPasswordPopup}));
  }

  handelSubmit = (event) => {
    this.setState({modalOpen: !this.state.modalOpen})
    // this.setState({submitted : {[event.target.id] : event.target.value}})
    console.log("jiteshhhhhhh")
  } 
  validateLoginForm = () => {
    this.setState({
        nameError: Utils.isEmpty(this.state.name) ? "Please enter name" : (Utils.validateName(this.state.name) ? "" : "Invalid name"),
        emailError: Utils.validateEmail(this.state.email) ? "" : "Invalid email address",
        passwordError: Utils.isPasswordValid(this.state.password) ? "" : "Password should contain 1 special character",
        // chooseCategoryError: Utils.isCategoryValidate(this.state.chooseCategory) ? "" : "Please choose a category"
    });
    return (
      Utils.validateEmail(this.state.email) &&
      Utils.isPasswordValid(this.state.password)
    );
};
// onLoginClicked = (event) => {
  
//   event.preventDefault();
//   if (!this.validateLoginForm()){
  
//   return console.log(this.state,"validate")
//   }
//   if(this.validateLoginForm()) {
//     // return this.handelSubmit
//     // return console.log("validate")
//     this.handelSubmit();
//   }

//       // Utils.basicAlert("Badhiyaaaa")
// };
onLoginClicked = async (event) =>{
  event.preventDefault();
  
  const req= {
      email : this.state.email,
      password:this.state.password,
      role:this.state.type
  }
  
  const[error , response] =await Utils.parseResponse(UserService.loginUser(req))

  if(!response || error){
 
  // console.log("signup")
  history.push("/home")
  return;
  }
   console.log("error");
 
};
options = ["Seller", "Professional", "Student", "Institute", "Educationist"];
handleType = (selectedData) => {
   this.setState({type: selectedData})
 };
  render() {
    return (
      
      <>
     
      <SignIn 
      state={this.state}
      onChangeEvent={this.onChangeEvent}
      togglePassword={this.togglePassword}
      onLoginClicked={this.onLoginClicked}
      handelSubmit={this.handelSubmit}
      options={this.options}
      handleType={this.handleType}
      />
      {/* {this.state.openPasswordPopup ? <FormDialog state={this.state}
      closePasswordPopup={this.togglePasswordPopup}/> : ""} */}
      </>
    );
  }
}

export default SignInComponent;