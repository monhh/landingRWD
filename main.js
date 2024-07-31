const primaryHeader = document.querySelector(".primary-header");
const navToggle = document.querySelector(".mobile-nav-toggle");/* wrap hamburger & menu */
const primaryNav = document.querySelector(".primary-navigation"); /* wrap ul */

navToggle.addEventListener("click", () => {
	primaryNav.hasAttribute("data-visible")
		? navToggle.setAttribute("aria-expanded", false)
		: navToggle.setAttribute("aria-expanded", true);
	primaryNav.toggleAttribute("data-visible");
	primaryHeader.toggleAttribute("data-overlay");
});

/* Slider  https://a11yslider.js.org/#:~:text=%3C/script%3E-,Usage,-A11YSlider%20works%20by */
/* const slider = new A11YSlider(document.querySelector('.slider'), {
    adaptiveHeight: true,
    dots: false
}); */

const slider = new A11YSlider(document.querySelector(".slider"), {
	adaptiveHeight: false,
	dots: true,
	centerMode: true,
	arrows: false,
	responsive: {
	  480: {
		dots: false,
	  },
	},
  });