function sendMail(contactForm) {
  emailjs.send("gmail","PALOMA", {
    "from_name": contactForm.name.value,
    "from_email": contactForm.email.value,
    "special_requirements": contactForm.special_requirements.value,
    "date": contactForm.date.value,
    "guests": contactForm.guests.value

  })
  .then(
        function(response){
            console.log("SUCCESS", response);
        },
        function(error){
            console.log("FAILED", error);
        });

  return false;
}
