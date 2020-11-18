function sendMail(contactForm) {
  emailjs.send("gmail","PALOMA-Rewards", {
    "from_name": contactForm.modalName.value,
    "from_email": contactForm.modalEmail.value,
  });

  return false;
}