import {Component} from 'angular2/core';

@Component({
	selector: 'todo-app',
	templateUrl: 'app/app.html'
})


export default class Form{
  countries: Array<string>;

  firstName: string;
  firstNameError: string;
  lastName: string;
  lastNameError: string;
  email: string;
  emailError: string;
  phone: string;
  phoneError: string;
  city: string;
  cityError: string;
  postcode: string;
  postcodeError: string;
  address: string;
  addressError: string;



  constructor() {
    //This would come from an api
    this.countries = ["Ireland", "United Kingdom"];

    this.city = "";
    this.cityError = "";
    this.postcode = "";
    this.postcodeError = "";
    this.address = "";
    this.addressError = "";
    this.firstName = "";
    this.firstNameError = "";
    this.lastName = "";
    this.lastNameError = "";
    this.email = "";
    this.emailError = "";
    this.phone = "";
    this.phoneError = "";

  }

  onSubmit(){
    let valid = true;
// city error
    if(this.city === "") {
      this.cityError = "City field is required***";
      valid = false;
    }

    if(valid === true) {
      this.cityError = "";
      alert("sent");
    }
// postcode error
    if(this.postcode === "") {
      this.postcodeError = "Postcode field is required***";
      valid = false;
    }

    if (valid === true){
      this.postcodeError = "";
      alert("Success! Details sent!");
      return
    }

// address error

    if(this.address === "") {
     this.addressError = "Address field is required***";
     valid = false;
    }

    if (valid === true){
     this.addressError = "";
     alert("sent");
    }

// firstname error
    if(this.firstName === "") {
     this.firstNameError = "First Name field is required***";
     valid = false;
    }

    if(valid === true) {
      this.firstNameError = "";
      alert("sent");
    }
// lastname error
    if(this.lastName === "") {
     this.lastNameError = "Last Name field is required***";
     valid = false;
    }

    if(valid === true) {
     this.lastNameError = "";
     alert("sent");
    }
// email error
    if(this.email === "") {
     this.emailError = " Email field is required***";
     valid = false;
    }

    if(valid === true) {
     this.emailError = "";
     alert("sent");
    }
// phone error 
    if(this.phone === "") {
     this.phoneError = "Phone Number field is required***";
     valid = false;
    }

    if(valid === true) {
     this.phoneError = "";
     alert("sent");
    }


  }
}