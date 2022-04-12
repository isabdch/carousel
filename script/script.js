let review = document.querySelectorAll(".review");
let index = 0;

function hideReview(type) {
  for (let i of review) {
    if (i.id != index) {
      i.style.animation =
        type == "next"
          ? "fadeInNext .2s ease 0s 1 normal both"
          : "fadeInBack .3s ease 0s 1 normal both";
      setTimeout(() => {
        i.style.display = "none";
      }, 200);
    } else {
      i.style.animation =
        type == "next"
          ? "fadeOutNext .2s ease 0s 1 normal both"
          : "fadeOutBack .3s ease 0s 1 normal both";
      setTimeout(() => {
        i.style.display = "flex";
      }, 200);
    }
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

setInterval(slide, 40000);
