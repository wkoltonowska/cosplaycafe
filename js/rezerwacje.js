const navContainer = document.querySelector('.nav__container')
const navBars = document.querySelector('.nav__bars')
const navItems = document.querySelectorAll('.js-items')
const navExit = document.querySelector('.nav__exit')
const footerYear = document.querySelector('.footer__year')
let isShowedNav = false
const date = document.querySelector('#date')

navItems.forEach(item => {
	item.addEventListener('click', event => {
		if (isShowedNav) {
			navContainer.classList.remove('nav__container--active')
			navExit.classList.remove('nav__exit--active')
		}
	})
})

const showNav = () => {
	isShowedNav = true
	navContainer.classList.add('nav__container--active')
	navExit.classList.add('nav__exit--active')
}

const hideNav = () => {
	isShowedNav = false
	navContainer.classList.remove('nav__container--active')
	navExit.classList.remove('nav__exit--active')
}

const currentYear = () => {
	const year = new Date().getFullYear()
	footerYear.innerText = year
}

currentYear()
const clearInput = input => {
	;[name, surname, mail, phone].forEach(item => {
		item.value = ''
	})
}

const setTodayDate = () => {
	const today = new Date()
	const year = today.getFullYear()
	const month = String(today.getMonth() + 1).padStart(2, '0')
	const day = String(today.getDate()).padStart(2, '0')

	const todayDate = `${year}-${month}-${day}`
	date.value = todayDate
}

window.onload = setTodayDate

document.getElementById('reservation-form').addEventListener('submit', function (e) {
	e.preventDefault() // Prevent the default form submission
	const form = e.target
	const formData = new FormData(form)
	// Hide previous messages
	document.getElementById('success-message').style.display = 'none'
	document.getElementById('error-message').style.display = 'none'
	// Send data using AJAX
	fetch('http://localhost:80/api/submit.php', {
		method: 'POST',
		body: formData,
	})
		.then(response => response.json())
		.then(data => {
			if (data.status === 'success') {
				document.getElementById('success-message').style.display = 'block'
				form.reset()
			} else {
				document.getElementById('error-message').textContent = data.message || 'Wystąpił błąd. Spróbuj ponownie.'
				document.getElementById('error-message').style.display = 'block'
			}
		})
		.catch(() => {
			document.getElementById('error-message').textContent = 'Wystąpił błąd. Spróbuj ponownie.'
			document.getElementById('error-message').style.display = 'block'
		})
})

navBars.addEventListener('click', showNav)
navExit.addEventListener('click', hideNav)
