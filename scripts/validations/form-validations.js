//connect to form DOM elements
const form = document.querySelector(".form");
const inputs = [
  ...document.querySelectorAll(".form input.form-item"),
  document.querySelector(".form textarea"),
  document.querySelector('.form input[type="checkbox"]'),
];

const errors = [];

//validate form
form.addEventListener("submit", (e) => {
  e.preventDefault(); //prevent default form action
  //reset errors array
  errors.length = 0;

  //validate all inputs (not checkbox)
  inputs.forEach((input) => {

    //validate if not empty for required inputs (input has data-required attribute added in HTML)
    if (input.hasAttribute("data-required")) {
      if (!input.value) {
        //here input value is empty and we need to create error <p> element
        if (!input.parentElement.querySelector(".form p.error-empty")) {
          //check if error <p> is not existing in HTML
          //create error <p> element and insert it over the input element
          const p = document.createElement("p");
          p.className = "error error-empty";
          const generalErrorText = "Required field cannot be empty";
          p.innerHTML = generalErrorText;
          input.parentElement.insertBefore(p, input);
        }
        //add generic error to errors table
        errors.push("One of required value is empty");
      } else {
        //here input has value
        if (input.parentElement.querySelector(".form p.error-empty")) {
          //check if error <p> extists
          input.parentElement.querySelector(".form p.error-empty").remove(); //if exists remove it, because input has value
        }
      }
    }

    //number validation for telephone input
    if (input.id === "number") {


      let regex = new RegExp("^[0-9]+$");
      const isNumber = regex.test(input.value);
      if (!isNumber && input.value) {
        input.parentElement.querySelector(".error").classList.remove("hidden");

        //add phone error to errors array
        errors.push("Wrong type of phone value");
      } else {
        if (input.parentElement.querySelector(".error")) {
          input.parentElement.querySelector(".error").classList.add("hidden");
        }
      }
    }

    //email validation
    if (input.id === "email") {
      regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      const isEmail = regex.test(input.value);

      if (!isEmail) {
        input.parentElement.querySelector(".error").classList.remove("hidden");
        //add email error to errors array
        errors.push("Wrong type of email value");
      } else {
        if (input.parentElement.querySelector(".error")) {
          input.parentElement.querySelector(".error").classList.add("hidden");
        }
      }
    }
  });

  //gdpr validation
  if (!inputs[inputs.length - 1].checked) {
    inputs[inputs.length - 1].parentElement
      .querySelector(".error")
      .classList.remove("hidden");
    //add gdpr error to errors array
    errors.push("GDPR field is not checked");
  } else {
    if (inputs[inputs.length - 1].parentElement.querySelector(".error")) {
      inputs[inputs.length - 1].parentElement
        .querySelector(".error")
        .classList.add("hidden");
    }
  }

  //sent form when errors array is empty
  console.log(errors);
  if (errors.length === 0) {
    alert("SUBMIT FORM");
  }
});