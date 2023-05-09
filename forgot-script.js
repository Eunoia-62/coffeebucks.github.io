const form = document.querySelector("form");
pField = form.querySelector(".passward"),
    pInput = eField.querySelector("input"),
    pField = form.querySelector(".password-cnf"),
    pInput = pField.querySelector("input");

form.onsubmit = (e) => {
    e.preventDefault(); //preventing from form submitting
    //if email and password is blank then add shake class in it else call specified function 
    (pInput.value == "") ? pField.classList.add("shake", "error") : checkPass();
    (pInput.value == "") ? pField.classList.add("shake", "error") : checkPass();

    setTimeout(() => { //remove shake class after 500ms
        pField.classList.remove("shake");
        pField.classList.remove("shake");
    }, 500);

    pInput.onkeyup = () => { checkPass(); } //calling checkpass function on pass input keyup
    pInput.onkeyup = () => { checkPass(); } //calling checkPass function on pass input keyup

    function checkPass() { //checkPass function
        if (pInput.value == "") { //if pass is empty then add error and remove valid class
            pField.classList.add("error");
            pField.classList.remove("valid");
        } else { //if pass isn't empty then remove error and add valid class
            pField.classList.remove("error");
            pField.classList.add("valid");
        }
    }

    //if pField and pField doesn't contains error class that mean user filled details properly
    if (!pField.classList.contains("error") && !pField.classList.contains("error")) {
        window.location.href = form.getAttribute("action"); //redirecting user to the specified url which is inside action attribute of form tag
    }

}

