
// object to store details
let userDetailDatabase = {};



function getUserDetails(){
                         let username = prompt("Enter your username: ");

                         if (username==null){
                                                  return;
                         }

                         function validateUsername(username){
                                                  if(username.length <10 && username.length >0){
                                                  return true;
                                                  } else {
                                                                           return false;
                                                  }
                         }
                         while (validateUsername(username) == false){
                             username = prompt("Username must be less than 10 and greater than 0");                     
                         }
                         userDetailDatabase["Username"] = username;

                         let email = prompt("Enter your email address: ");

                         if (email == null){
                                                  return;
                         }
                         function validateEmail(email){
                                                  const emailCheck = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
                                                  emailCheckResult = emailCheck.test(email);
                                                  if(emailCheckResult == true){
                                                                           return true;
                                                  } else {
                                                                           return false;
                                                  }
                         }
                         while (validateEmail(email) == false){
                                                  email = prompt("Enter a valid Email: ")
                         }
                         userDetailDatabase["Email"]= email;

                         let phoneNumber = prompt("Enter phone number: ");

                         if (phoneNumber== null){
                                                  return;
                         }
                         function validatePhoneNumber(phoneNumber){
                                                  if(phoneNumber.length == 11){
                                                                           return true;
                                                  } else {
                                                                           return false;
                                                  }
                         }
                         while (validatePhoneNumber(phoneNumber) == false){
                                                  phoneNumber = prompt("Phone number must be 11 digits, try again: ")
                         }
                         userDetailDatabase["PhoneNumber"]= phoneNumber;

                         let password = prompt("Enter your password: ");

                         if (password== null){
                                                  return;
                         }
                         function validatePassword(password){
                                                  if (password.length < 6){
                                                  return false;     
                                                  } else {
                                                                           return true;
                                                  }
                         }
                         while (validatePassword(password) == false){
                                                  password = prompt("password length too short, try again: ")
                         }
                         userDetailDatabase["Password"] = password;

                         let confirmPassword = prompt("Confirm your password: ");

                         if (confirmPassword == null){
                                                  return;
                         }
                         function validateConfirmPassword(confirmPassword){
                                                  if (confirmPassword != password){
                                                  return false;     
                                                  } else {
                                                                           return true;
                                                  }
                         }
                         while (validateConfirmPassword(confirmPassword) == false){
                                                  confirmPassword = prompt("Confirm password doesnt match with password");
                         }
                         userDetailDatabase["Confirm Password"]= confirmPassword

                         console.log(userDetailDatabase);
}


function displayDetails(){
                         alert(`Yours Details\n\nUsername: ${userDetailDatabase.Username} \nPhone Number: ${userDetailDatabase.PhoneNumber} \nEmail: ${userDetailDatabase.Email}`)
}
