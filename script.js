function sendMail(){
    const mail = {
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        subiect : document.getElementById("subject").value,
        mesaj : document.getElementById("message").value,
    };

    emailjs.sendMail("service_v0x0rnr","template_mo8kr65",mail).then(alert("message sent!!"));
}

