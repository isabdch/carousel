let review = document.querySelectorAll(".review");
let index = 0;

function hideReview() {
  for (let i of review) {
    if (i.id != index) {
      i.style.display = "none";
    } else {
      i.style.display = "flex";
    }
  }
}

function slide() {
  hideReview();

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

  hideReview();
}

function goNext() {
  index++;

  if (index > 2) {
    index = 0;
  }

  hideReview();
}

setInterval(slide, 20000);
