var Contact = document.getElementById("contact-form");
Contact.onsubmit = (event) => {
  event.preventDefault();
  Swal.fire({
    icon: "success",
    title: "Done",
    text: "Chúng tôi sớm trả lời",
    // footer: '<a href="">Why do I have this issue?</a>',
  });
};
