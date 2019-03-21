/* Defence Page JavaScript /*

/* Check if the pin entered in the pin box maches the correct code. */
function checkPin() {
    if ((document.getElementById('pin').value) === "5656") {
        document.getElementById('pinError').innerHTML = "Missile Launched!";
    } else {
        document.getElementById('pinError').innerHTML = "Please enter the correct PIN!";
    }
}