const footerYear = document.querySelector(".footer__year");

const currentYear = () => {
	const year = new Date().getFullYear();
	footerYear.innerText = year;
};

currentYear();
const scrollToSection = (selector) => {
	const navigationHeight = document.querySelector(".nav").offsetHeight + 30;
	const targetDiv = document.querySelector(`${selector} .section__heading`);
	const targetDivPosition = targetDiv.offsetTop - navigationHeight;

	window.scrollTo({
		top: targetDivPosition,
	});

	console.log(targetDivPosition);
};
