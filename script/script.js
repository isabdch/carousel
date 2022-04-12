let review = document.querySelectorAll(".review");
let circle = document.querySelectorAll(".circle");
let c0 = document.querySelector("#c0");
let c1 = document.querySelector("#c1");
let c2 = document.querySelector("#c2");
let index = 0;

document.addEventListener("keydown", checkKey);

function checkKey(e) {
  let event = window.event ? window.event : e;
  let key = event.keyCode;

  if (key == "37") {
    // if left arrow key is pressed...
    goBack();
  } else if (key == "39") {
    // if right arrow key is pressed...
    goNext();
  }
}

function hideReview(type) {
  let animationIn;
  let animationOut;

  if (type == "next") {
    animationIn = "fadeInNext";
    animationOut = "fadeOutNext";
  } else if (type == "back") {
    animationIn = "fadeInBack";
    animationOut = "fadeOutBack";
  } else {
    animationIn = "fadeIn";
    animationOut = "fadeOut";
  }

  for (let i of review) {
    if (i.id != index) {
      // hide review
      i.style.animation = `${animationIn} .2s ease 0s 1 normal both`;

      setTimeout(() => {
        i.style.display = "none";
      }, 200);
    } else {
      // show review
      i.style.animation = `${animationOut} .2s ease 0s 1 normal both`;
      setTimeout(() => {
        i.style.display = "flex";
      }, 200);
    }
  }

  if (index == 0) {
    c0.classList.add("checked");
    c1.classList.remove("checked");
    c2.classList.remove("checked");
  } else if (index == 1) {
    c0.classList.remove("checked");
    c1.classList.add("checked");
    c2.classList.remove("checked");
  } else if (index == 2) {
    c0.classList.remove("checked");
    c1.classList.remove("checked");
    c2.classList.add("checked");
  }
}

function slide() {
  hideReview("next");

  index += 1;

  if (index > 2) {
    index = 0;
  }
}

function goBack() {
  index--;

  if (index < 0) {
    index = 2;
  }

  hideReview("back");
}

function goNext() {
  index++;

  if (index > 2) {
    index = 0;
  }

  hideReview("next");
}

function specifyIndex(e) {
  for (let c of circle) {
    if (c.id == e.id) {
      c.classList.add("checked");
    } else {
      c.classList.remove("checked");
    }
  }

  if (e.id == "c0") {
    index = 0;
  } else if (e.id == "c1") {
    index = 1;
  } else if (e.id == "c2") {
    index = 2;
  }

  hideReview("fade");
}

setInterval(slide, 30000);
