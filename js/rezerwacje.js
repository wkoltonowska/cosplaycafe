const navContainer = document.querySelector(".nav__container");
const navBars = document.querySelector(".nav__bars");
const navItems = document.querySelectorAll(".js-items");
const navExit = document.querySelector(".nav__exit");
const footerYear = document.querySelector(".footer__year");
let isShowedNav = false;

const name = document.querySelector("#name");
const surname = document.querySelector("#surname");
const mail = document.querySelector("#mail");
const phone = document.querySelector("#phone");
const hour = document.querySelector("#hour");
const date = document.querySelector("#date");
const formBtn = document.querySelector(".form__btn");
const formInfo = document.querySelector(".form__info");
const emailInfo = document.querySelector(".form__info-email");
const phoneInfo = document.querySelector(".form__info-phone");
const hourInfo = document.querySelector(".form__info-hour");
const dateInfo = document.querySelector(".form__info-date");

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
const clearInput = (input) => {
	[name, surname, mail, phone].forEach((item) => {
		item.value = "";
	});
};
const checkForm = (input) => {
	let allFilled = true;

	input.forEach((item) => {
		if (item.value === "") {
			allFilled = false;
		}
	});

	if (!allFilled) {
		item.preventDefault();
		formInfo.textContent = "Wszystkie pola muszą zostać wypełnione";
	} else {
		formInfo.textContent = "Dziękujemy za wykonanie rezerwacji!";
		clearInput();
	}
};

const checkMail = (mail) => {
	const re =
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	if (re.test(mail.value)) {
		emailInfo.textContent = "";
		checkAll();
	} else {
		formInfo.textContent = "";
		emailInfo.textContent = "E-mail jest niepoprawny";
		checkAll();
	}
};

const checkPhone = (phone) => {
	const re = /^(\+48[- ]?)?(\(?\d{3}\)?[- ]?)?\d{3}[- ]?\d{3}[- ]?\d{3}$/;

	if (re.test(phone.value)) {
		phoneInfo.textContent = "";
		checkAll();
	} else {
		formInfo.textContent = "";
		phoneInfo.textContent = "Numer telefonu jest niepoprawny";
		checkAll();
	}
};

const checkHour = (hour) => {
	const re = /^(1[2-9]|2[0-2]):00$/;

	if (re.test(hour.value)) {
		hourInfo.textContent = "";
		checkAll();
	} else {
		formInfo.textContent = "";
		hourInfo.textContent =
			"Godzina jest niepoprawna. Przedział godzinowy to 12-22. Można wybrać tylko pełne godziny.";
		checkAll();
	}
};

const checkDate = (date) => {
	const today = new Date();
	const inputDate = new Date(date.value);
	if (inputDate >= today) {
		dateInfo.textContent = "";
		checkAll();
	} else {
		formInfo.textContent = "";
		dateInfo.textContent =
			"Data jest nieprawidłowa.Spróbuj wybrać kolejny dzień.";
		checkAll();
	}
};

const checkAll = () => {
	if (
		emailInfo.textContent === "" &&
		phoneInfo.textContent === "" &&
		hourInfo.textContent === "" &&
		dateInfo.textContent === ""
	) {
		checkForm([name, surname, mail, phone]);
	}
};

window.onload = () => {
	const dateInput = document.getElementById("date");
	const today = new Date();
	const year = today.getFullYear();
	const month = String(today.getMonth() + 1).padStart(2, "0");
	const day = String(today.getDate()).padStart(2, "0");
	const todayString = `${year}-${month}-${day}`;
	dateInput.value = todayString;
	dateInput.min = todayString;
};

formBtn.addEventListener("click", (e) => {
	e.preventDefault();
	checkMail(mail);
	checkPhone(phone);
	checkHour(hour);
	checkDate(date);
});

navBars.addEventListener("click", showNav);
navExit.addEventListener("click", hideNav);
