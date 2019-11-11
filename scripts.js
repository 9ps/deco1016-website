x = 0

function openNav() {
    x += 1
    if (x % 2 == 1) {
        document.getElementById("headerTwo").style.height = "100vh";
        document.getElementById("hamburger-icon").innerHTML = "close";
    }
    else {
        document.getElementById("headerTwo").style.height = "0vh";
        document.getElementById("hamburger-icon").innerHTML = "menu";
    }
}

function boolYes1() {
    document.getElementById("radio_left1").style.backgroundColor = "#25595E";
    document.getElementById("radio_left1").style.color = "#EEEEEE";
    document.getElementById("radio_right1").style.backgroundColor = "#EEEEEE";
    document.getElementById("radio_right1").style.color = "#595959";
}

function boolNo1() {
    document.getElementById("radio_left1").style.backgroundColor = "#EEEEEE";
    document.getElementById("radio_left1").style.color = " #595959";
    document.getElementById("radio_right1").style.backgroundColor = "#25595E";
    document.getElementById("radio_right1").style.color = "#EEEEEE";
}

function expand() {
    x += 1
    if (x % 2 == 1) {
        document.getElementById("secret").style.height = "10vh";
        document.getElementById("secret").style.opacity = "1";
        // document.getElementById("secret").style.display = "block";
    } else {
        document.getElementById("secret").style.height = "0vh";
        document.getElementById("secret").style.opacity = "0";
        // document.getElementById("secret").style.display = "none";
    }
}


let donorNumber = false

function boolYes2() {
    document.getElementById("radio_left1").style.backgroundColor = "#25595E";
    document.getElementById("radio_left1").style.color = "#EEEEEE";
    document.getElementById("radio_right1").style.backgroundColor = "#EEEEEE";
    document.getElementById("radio_right1").style.color = "#595959";
    document.getElementById("continueReal").style.display = "none";
    document.getElementById("continueSecret").style.display = "block";
    donorNumber = True
}


function boolNo2() {
    document.getElementById("radio_left1").style.backgroundColor = "#EEEEEE";
    document.getElementById("radio_left1").style.color = " #595959";
    document.getElementById("radio_right1").style.backgroundColor = "#25595E";
    document.getElementById("radio_right1").style.color = "#EEEEEE";
    document.getElementById("continueReal").style.display = "block";
    document.getElementById("continueSecret").style.display = "none";
    donorNumber = False

}

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

function whyMenu() {
    modal.style.display = "block";
}


// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}