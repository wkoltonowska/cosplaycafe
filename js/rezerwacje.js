const navContainer = document.querySelector(".nav__container");
const navBars = document.querySelector(".nav__bars");
const navItems = document.querySelectorAll(".js-items");
const navExit = document.querySelector(".nav__exit");
const footerYear = document.querySelector(".footer__year");
let isShowedNav = false;

navItems.forEach((item) => {
	item.addEventListener("click", (event) => {
		if (isShowedNav) {
			navContainer.classList.remove("nav__container--active");
			navExit.classList.remove("nav__exit--active");
		}
	});
});

const showNav = () => {
	isShowedNav = true;
	navContainer.classList.add("nav__container--active");
	navExit.classList.add("nav__exit--active");
};

const hideNav = () => {
	isShowedNav = false;
	navContainer.classList.remove("nav__container--active");
	navExit.classList.remove("nav__exit--active");
};

const currentYear = () => {
	const year = new Date().getFullYear();
	footerYear.innerText = year;
};

currentYear();

navBars.addEventListener("click", showNav);
navExit.addEventListener("click", hideNav);
