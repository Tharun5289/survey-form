let firstName =document.getElementById("fname")
let lastName =document.getElementById("lname")
let DateOfBirth =document.getElementById("dob")
let email =document.getElementById("email")
let phoneNumber =document.getElementById("phoneNumber")
let profession =document.getElementById("profession")
let country =document.getElementById("country")
let male = document.getElementById("male");
let female = document.getElementById("female");

function data(){
    if(firstName.value!='' && lastName.value!='' && DateOfBirth.value!='' && (male.checked || female.checked) && 
        email.value!='' && phoneNumber.value!='' && profession.value!='' && country!='') 
    {
        let gender = male.checked ? "Male" : "Female";
        alert("FirstName : "+firstName.value+"\n"+
          "Last Name : "+lastName.value+"\n"+
          "DOB : "+DateOfBirth.value+"\n"+
          "Gender : "+ gender +"\n"+
          "email : "+email.value+"\n"+
          "phoneNumber :"+phoneNumber.value+"\n"+
          "profession : "+profession.value+"\n"+
          "country : "+country.value+"\n"
        );
    }
    else{
        alert("Enter all the fields");
    }
}
