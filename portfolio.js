var typeData = new Typed(".role", {
  strings: ["Frontend Developer", "Web Developer", "Coder"],
  loop: true,
  typeSpeed: 100,
  backSpeed: 80,
  backDelay: 1000,
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
