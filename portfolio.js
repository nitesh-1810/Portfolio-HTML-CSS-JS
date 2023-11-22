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

const validation = () => {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const subject = document.getElementById("subject").value;
  const message = document.getElementById("message").value;
  var userName = document.getElementById("user_name");
  var userEmail = document.getElementById("user_email");
  var userSubject = document.getElementById("user_subject");
  var userMessage = document.getElementById("user_message");

  function validateEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return emailRegex.test(email);
  }

  if (name === "") {
    var existingParagraph = userName.querySelector("p");

    if (!existingParagraph) {
      var newParagraph = document.createElement("p");

      newParagraph.textContent = "* Please enter your name.";
      newParagraph.style.marginTop = "10px";
      newParagraph.style.color = "red";
      userName.appendChild(newParagraph);
    }
  } else {
    var existingParagraph = userName.querySelector("p");
    if (existingParagraph) {
      userName.removeChild(existingParagraph);
    }
  }

  if (email === "" || !validateEmail(email)) {
    var existingParagraph = userEmail.querySelector("p");

    if (!existingParagraph) {
      var newParagraph = document.createElement("p");

      newParagraph.textContent = "* Please enter valid email.";
      newParagraph.style.marginTop = "10px";
      newParagraph.style.color = "red";

      userEmail.appendChild(newParagraph);
    }
  } else {
    var existingParagraph = userEmail.querySelector("p");
    if (existingParagraph) {
      userEmail.removeChild(existingParagraph);
    }
  }
  if (subject === "") {
    var existingParagraph = userSubject.querySelector("p");

    if (!existingParagraph) {
      var newParagraph = document.createElement("p");

      newParagraph.textContent = "* Please enter your subject.";
      newParagraph.style.color = "red";
      newParagraph.style.marginTop = "10px";

      userSubject.appendChild(newParagraph);
    }
  } else {
    var existingParagraph = userSubject.querySelector("p");
    if (existingParagraph) {
      userSubject.removeChild(existingParagraph);
    }
  }
  if (message === "") {
    var existingParagraph = userMessage.querySelector("p");

    if (!existingParagraph) {
      var newParagraph = document.createElement("p");

      newParagraph.textContent = "* Please enter your message.";
      newParagraph.style.color = "red";
      newParagraph.style.marginTop = "10px";

      userMessage.appendChild(newParagraph);
    }
  } else {
    var existingParagraph = userMessage.querySelector("p");
    if (existingParagraph) {
      userMessage.removeChild(existingParagraph);
    }
  }
  if (
    name !== "" &&
    email !== "" &&
    validateEmail(email) &&
    subject !== "" &&
    message !== ""
  ) {
    return true;
  } else {
    return false;
  }
};

function sendMail() {
  const valid = validation();

  if (valid) {
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
}

const menu = () => {
  const navItems = document.getElementsByClassName("nav-items");

  navItems[0].style.display = "flex";
};
