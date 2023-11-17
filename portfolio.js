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
  if (name === "") {
    console.log("name empty");
    var existingParagraph = userName.querySelector("p");

    if (!existingParagraph) {
      var newParagraph = document.createElement("p");

      // Set the text content of the paragraph
      newParagraph.textContent = "Input value is empty.";
      newParagraph.style.color = "red";

      // Append the paragraph to the div
      userName.appendChild(newParagraph);
    }
  } else {
    var existingParagraph = userName.querySelector("p");
    if (existingParagraph) {
      userName.removeChild(existingParagraph);
    }
  }
  if (email === "") {
    console.log("email empty");
    var existingParagraph = userEmail.querySelector("p");

    if (!existingParagraph) {
      var newParagraph = document.createElement("p");

      // Set the text content of the paragraph
      newParagraph.textContent = "Input value is empty.";
      newParagraph.style.color = "red";
      // Append the paragraph to the div
      userEmail.appendChild(newParagraph);
    }
  } else {
    // If not empty, remove any existing paragraphs
    var existingParagraph = userEmail.querySelector("p");
    if (existingParagraph) {
      userEmail.removeChild(existingParagraph);
    }
  }
  if (subject === "") {
    console.log("subject empty");
    var existingParagraph = userSubject.querySelector("p");

    if (!existingParagraph) {
      var newParagraph = document.createElement("p");

      // Set the text content of the paragraph
      newParagraph.textContent = "Input value is empty.";
      newParagraph.style.color = "red";
      // Append the paragraph to the div
      userSubject.appendChild(newParagraph);
    }
  } else {
    // If not empty, remove any existing paragraphs
    var existingParagraph = userSubject.querySelector("p");
    if (existingParagraph) {
      userSubject.removeChild(existingParagraph);
    }
  }
  if (message === "") {
    console.log("message empty");
    var existingParagraph = userMessage.querySelector("p");

    if (!existingParagraph) {
      var newParagraph = document.createElement("p");

      // Set the text content of the paragraph
      newParagraph.textContent = "Input value is empty.";
      newParagraph.style.color = "red";
      // Append the paragraph to the div
      userMessage.appendChild(newParagraph);
    }
  } else {
    // If not empty, remove any existing paragraphs
    var existingParagraph = userMessage.querySelector("p");
    if (existingParagraph) {
      userMessage.removeChild(existingParagraph);
    }
  }
  if (name !== "" && email !== "" && subject !== "" && message !== "") {
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
