import React from "react";
import BaseComponent from '../baseComponent'
import SignUpComponent from './signUpComponent'
import Utils, {dispatchAction} from "../../utility";
import {UserService} from "../../services";
import {eventConstants} from "../../constants"
import { connect } from "react-redux";
import {actionTypeConstant, cookiesConstants, genericConstants, userRoles} from "../../constants/index";
import { history } from "../../managers/history";


class Register extends BaseComponent {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            nameError: "",
            email: "",
            emailError: "",
            password: "",
            passwordError: "",
            confirmPassword: "",
            confirmPasswordError: "",
            userRole: "",
            userRoleError: "",
            phone: "",
            phoneError: "",
            otpModalOpen: false,
            // phone: "",
            type:""
           
        }
    }

    handlePhoneChange = (phone) => {
        console.log({phone})
        if(phone) {
            this.setState({phone:phone})
        }
    }
    componentDidMount () {
        
    }

    onChangeEvent = (event) => {
       
        this.setState({[event.target.id]: event.target.value});
 
    };

    // onChangePassword = (event) => {
    //     this.setState
    // }

    togglePassword = (event) => {
        this.setState({isPasswordVisible: !this.state.isPasswordVisible});
    };


    handleModalChange = () => {
        this.setState({otpModalOpen: !this.state.otpModalOpen})
    }
    validateSignupForm = () => {
        this.setState({

            emailError: Utils.validateEmail(this.state.email) ? "" : "Invalid Input",
            passwordError: Utils.isPasswordValid(this.state.password) ? "" : "Password should contain 1 special character",
            confirmPasswordError: Utils.isPasswordValid(this.state.confirmPassword) ?
                (this.state.password === this.state.confirmPassword ? "" : "Passwords do not match") : "Password should contain 1 special character",
            // userRoleError: Utils.isEmpty(this.state.userRole) ? "Please select a user role" : "",
            phoneError: (this.state.phone==="") ? "Phone number is required" : "",
            

        });
        return Utils.validateEmail(this.state.email) && Utils.isPasswordValid(this.state.password)&& (this.state.phone) 
            && Utils.isPasswordValid(this.state.confirmPassword) && this.state.password === this.state.confirmPassword
            ;
    };

    onSignupClicked = async (event) =>{
        event.preventDefault();
        
        const req= {
            email : this.state.email,
            mobile:this.state.phone,
            password:this.state.password,
            cpassword: this.state.confirmPassword,
            role:this.state.type
        }
        
        const[error , response] =await Utils.parseResponse(UserService.addUser(req))
    
        if(!response || error){
       
        // console.log("signup")
        history.push("/signIn")
        return;
        }
         console.log("error")
        
    }

    // onSignupClicked = (event) => {
    //     event.preventDefault();
    //     // if (!this.state.phone){
    //     //     console.log("jitsh")
    //     //   }
    //     if (!this.validateSignupForm()){
    //         return console.log("validate")
    //     }
    //     if(this.validateSignupForm()){
    //         this.handleModalChange();
    //         // console.log("kdl")
    //     }
    //         // Utils.basicAlert("Badhiyaaaa")
    // };
     options = ["Seller", "Professional", "Student", "Institute", "Educationist"];
     handleType = (selectedData) => {
        this.setState({type: selectedData})
      };

    render() {
        return (
            <SignUpComponent state={this.state}
               
                handleModalChange={this.handleModalChange}
                             onChangeEvent={this.onChangeEvent}
                             togglePassword={this.togglePassword}
                             onSignupClicked={this.onSignupClicked}
                             options={this.options}
                             handleType={this.handleType}
                             handlePhoneChange={this.handlePhoneChange}
                             />
        );
    }
}

export default Register;