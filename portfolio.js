var typeData = new Typed(".role", {
  strings: [
    "a Frontend Developer.",
    "a Web Developer.",
    "a React JS Developer.",
    "Exploring React Native.",
  ],
  loop: true,
  typeSpeed: 100,
  backSpeed: 80,
  backDelay: 1000,
  showCursor: false,
});

var dots = document.getElementsByClassName("dots");

var more = document.getElementsByClassName("more");

var readBtn = document.getElementsByClassName("readMore");
var skillsIcons = document.getElementsByClassName(
  "project-skills-container-icons"
);

const readMore = (id) => {
  if (more[id].style.display === "none") {
    readBtn[id].innerText = "Read less";
    more[id].style.display = "inline";
    dots[id].style.display = "none";
    skillsIcons[id].style.display = "none";
  } else {
    more[id].style.display = "none";
    readBtn[id].innerText = "Read more";
    dots[id].style.display = "inline";
    skillsIcons[id].style.display = "flex";
  }
};

//console.log(window.innerWidth);

var modal = document.getElementById("myModal");

var btn = document.getElementById("myBtn");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
  modal.style.display = "block";
};

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
function sendMail() {
  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("message").value,
  };
  const serviceID = "service_h4yer8x";
  const templateID = "template_3rpxka8";

  emailjs
    .send(serviceID, templateID, params)
    .then((res) => {
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("subject").value = "";
      document.getElementById("message").value = "";

      console.log(res);
      // alert("your message sent successfully");
    })
    .catch((err) => console.log(err));
}
