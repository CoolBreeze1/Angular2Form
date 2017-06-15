import {Component} from 'angular2/core';
import {Http} from 'angular2/http';

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
  lat: number;
  lng: number;


  constructor(private http: Http) {
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
    this.http = http;
  }

  onSubmit(){
    let valid = true;
// city error
    if(this.city === "") {
      this.cityError = "City field is required***";
      valid = false;
    }

// postcode error
    if(this.postcode === "") {
      this.postcodeError = "Postcode field is required***";
      valid = false;
    }

// address error

    if(this.address === "") {
     this.addressError = "Address field is required***";
     valid = false;
    }

// firstname error
    if(this.firstName === "") {
     this.firstNameError = "First Name field is required***";
     valid = false;
    }

// lastname error
    if(this.lastName === "") {
     this.lastNameError = "Last Name field is required***";
     valid = false;
    }

// email error
    if(this.email === "") {
     this.emailError = " Email field is required***";
     valid = false;
    }

// phone error 
    if(this.phone === "") {
     this.phoneError = "Phone Number field is required***";
     valid = false;
    }

    if(valid === true) {
     this.lastNameError = "";
     this.phoneError = "";
     this.postcodeError = "";
     this.addressError = "";
     this.firstNameError = "";
     this.cityError = "";
     this.emailError = "";
     alert("sent");
    }
  }

  onKey(){
    console.log(this);
  }
}