let review = document.querySelectorAll(".review");
let circle = document.querySelectorAll(".circle");
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

  for (let c of circle) {
    if (`c${index}` == c.id) {
      c.classList.add("checked");
    } else {
      c.classList.remove("checked");
    }
  }
}

function slide() {
  hideReview("next");

  index++;

  if (index > circle.length - 1) {
    index = 0;
  }
}

function goBack() {
  index--;

  if (index < 0) {
    index = circle.length - 1;
  }

  hideReview("back");
}

function goNext() {
  index++;

  if (index > circle.length - 1) {
    index = 0;
  }

  hideReview("next");
}

function specifyIndex(e) {
  for (let c of circle) {
    if (c.id == e.id) {
      index = Number(c.id.charAt(1));
    }
  }

  hideReview("fade");
}

setInterval(slide, 30000);
