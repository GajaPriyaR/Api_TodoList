let fname = document.getElementById("Name");
let email = document.getElementById("Email");
let password = document.getElementById("Password");

function signup(e) {
  if (!valid()) {
    event.preventDefault();
    console.log("if");
  } else {
    console.log("else");
    let user = {
      username: fname.value,
      email: email.value,
      password: password.value,
    };
    let jsonformat = JSON.stringify(user);
    localStorage.setItem(fname.value, jsonformat);
    // alert("Registered");

    alert("Registered");

    window.location = "https://gajapriyar.github.io/Api_TodoList/home.html";
  }
}

function valid() {
  let fnameVl = document.getElementById("Name").value;
  let emailVl = document.getElementById("Email").value;
  let passwordVl = document.getElementById("Password").value;
  let noError = true;

  if (fnameVl === "") {
    errorTxt(fname, "Please Enter the name");
    noError = false;
  } else if (fnameVl.length < 5) {
    errorTxt(fname, "Please Enter Minimum 5 Charecter");
    noError = false;
  } else {
    sucTxt;
  }

  // Email validation
  if (emailVl === "") {
    errorTxt(email, "Please Enter the Email");
    noError = false;
  } else if (emailVl.length < 5) {
    errorTxt(email, "Please Enter The Correct Details");
    noError = false;
  } else {
    sucTxt;
  }
  // Password validation
  if (passwordVl === "") {
    errorTxt(password, "Please Enter the Password");
    noError = false;
  } else if (passwordVl.length < 5) {
    errorTxt(password, "Please Enter Minimum 5 Charecter");
    noError = false;
  } else {
    sucTxt;
  }
  return noError;
}

function errorTxt(el, message) {
  const intGrp = el.parentElement;
  let errorEl = intGrp.querySelector(".errText");
  errorEl.innerText = message;
}

function sucTxt(el, message) {
  let error = el.querySelector(".errText");

  error.innerHTML = "";
}


// =======================================Login Funtion================================================ //

function login(e) {
  event.preventDefault();

  let username = document.getElementById("Name").value;
  let password = document.getElementById("password").value;
  const terms = document.getElementById("exampleCheck1").checked;

  //   console.log(email, password);

  let user = localStorage.getItem(username);
  let data = JSON.parse(user);

  // Validations

  if (data == null) {
    alert("Wrong");
  } else if (username == data.username && password == data.password && terms) {
    window.location = "https://gajapriyar.github.io/Api_TodoList/home.html";
  } else {
    alert("Enter the correct details");
  }
}
