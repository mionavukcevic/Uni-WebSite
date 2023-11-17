

let dugme = document.getElementById("submitbutton");




dugme.addEventListener("click" , function () {
    window.alert(`Message sent: ${document.forms["forma"]["name"].value} - ${document.forms["forma"]["email"].value} - ${document.forms["forma"]["subject"].value}
    -${document.forms["forma"]["message"].value}`);
});
