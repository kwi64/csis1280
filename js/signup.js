function signUp(form) {
  clearErrors(form);

  var hasError = false;

  for (var i = 0; i < form.elements.length; i++) {
    var element = form.elements[i];

    if (element.type == "text" || element.type == "email") {
      var error = element.closest("div").querySelector("label > small");

      if (element.value.trim().length == 0) {
        hasError = true;
        error.innerText = element.dataset.name + " is required!";
      } else if (element.validity.valid == false) {
        hasError = true;
        error.innerText = element.dataset.name + " is not valid!";
      }
    }

    if (element.type == "password") {
      var error = element.closest("div").querySelector("label > small");
      if (element.value.length == 0) {
        hasError = true;
        error.innerText = element.dataset.name + " is required!";
      } else if (element.name == "password" && element.value.length < 6) {
        hasError = true;
        error.innerText = element.dataset.name + " is too short!";
      } else if (
        element.name == "confirmPassword" &&
        element.value != form.elements.password.value
      ) {
        hasError = true;
        error.innerText = "Passwords do not match!";
      }
    }
  }

  if (hasError == false) {
    document.querySelector("main > h1").innerText = "Thank you!";
    document.querySelector("main > form").style.display = "none";
    document.querySelector("main > aside").style.display = "block";
    window.scrollTo(0, 0);
  }
}

function clearForm(form) {
  for (var i = 0; i < form.elements.length; i++) {
    var element = form.elements[i];
    if (
      element.type == "text" ||
      element.type == "email" ||
      element.type == "password"
    ) {
      element.value = "";
      element.closest("div").querySelector("label > small").innerText = "";
    }
  }
}

function clearErrors(form) {
  for (var i = 0; i < form.elements.length; i++) {
    var element = form.elements[i];
    if (
      element.type == "text" ||
      element.type == "email" ||
      element.type == "password"
    ) {
      element.closest("div").querySelector("label > small").innerText = "";
    }
  }
}
