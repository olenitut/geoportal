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

const sectionHeroEl = document.querySelector(".section-hero");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];

    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }

    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionHeroEl);
