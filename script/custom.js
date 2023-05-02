$(function () {
  $(".slider").slick({
    infinite: true,
    dots: true,
    prevArrow:
      '<span class="prev"><img class="arrow" src="./img/icons/prev.svg" /></span>',
    nextArrow:
      '<span class="next"><img class="arrow" src="./img/icons/next.svg" /></span>',
  });
});

const header = document.querySelector(".header");
const toggleClass = "is-sticky";
window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll > 600) {
    header.classList.add(toggleClass);
  } else {
    header.classList.remove(toggleClass);
  }
});
