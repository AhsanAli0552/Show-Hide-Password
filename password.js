const eyecon = document.querySelector("#eyecon");
const password = document.querySelector("#password");




eyecon.onclick = function () {
    if (password.type === "password") {
        password.type = "text";
        eyecon.src = "images/eye-open.png";
    } else {
        password.type = "password";

        eyecon.src = "images/eye-close.png";
    }

}