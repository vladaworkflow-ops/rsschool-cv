function openBurger() {
  const burger = document.getElementById('burger');
  const nav = document.getElementById('main-nav');
  if (!burger || !nav) return;

  burger.addEventListener('click', function() {
    nav.classList.toggle('open');
    burger.classList.toggle('open');
  });
}

openBurger();

const dots = document.getElementById("dots");
const moreText = document.getElementById("more");
const hideText = document.getElementById("hideText");

dots.style.cursor = "pointer";

dots.addEventListener("click", function () {
  dots.style.display = "none";
  moreText.style.display = "inline";
  hideText.style.display = "inline";
});

hideText.addEventListener("click", function () {
  dots.style.display = "inline";
  moreText.style.display = "none";
  hideText.style.display = "none";
});

