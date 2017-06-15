var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('angular2/core');
var http_1 = require('angular2/http');
var Form = (function () {
    function Form(http) {
        this.http = http;
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
    Form.prototype.onSubmit = function () {
        var valid = true;
        // city error
        if (this.city === "") {
            this.cityError = "City field is required***";
            valid = false;
        }
        // postcode error
        if (this.postcode === "") {
            this.postcodeError = "Postcode field is required***";
            valid = false;
        }
        // address error
        if (this.address === "") {
            this.addressError = "Address field is required***";
            valid = false;
        }
        // firstname error
        if (this.firstName === "") {
            this.firstNameError = "First Name field is required***";
            valid = false;
        }
        // lastname error
        if (this.lastName === "") {
            this.lastNameError = "Last Name field is required***";
            valid = false;
        }
        // email error
        if (this.email === "") {
            this.emailError = " Email field is required***";
            valid = false;
        }
        // phone error 
        if (this.phone === "") {
            this.phoneError = "Phone Number field is required***";
            valid = false;
        }
        if (valid === true) {
            this.lastNameError = "";
            this.phoneError = "";
            this.postcodeError = "";
            this.addressError = "";
            this.firstNameError = "";
            this.cityError = "";
            this.emailError = "";
            alert("sent");
        }
    };
    Form.prototype.onKey = function () {
        console.log(this);
    };
    Form = __decorate([
        core_1.Component({
            selector: 'todo-app',
            templateUrl: 'app/app.html'
        }), 
        __metadata('design:paramtypes', [http_1.Http])
    ], Form);
    return Form;
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Form;
//# sourceMappingURL=app.js.map