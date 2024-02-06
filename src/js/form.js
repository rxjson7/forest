const formAll = document.querySelectorAll('.contact__form--input, .contact__form--textarea, .contact__form--checkbox')
const formAlert = document.querySelectorAll('.contact__form--alert')
const formBtn = document.querySelector('.button__form')
const alertElements = document.querySelectorAll('.contact__alert, .contact__x, .contact__bg')

let error = 0

const verEffect = (el, al) => {
	al.style.visibility = 'visible'
	el.style.borderColor = 'rgb(196, 49, 49)'
	error++
}

const verName = (el, al) => {
	if (el.value.length < 3) {
		al.textContent = 'Imię musi składać się z minimum 3 znaków.'
		verEffect(el, al)
	}
}

const verEmail = (el, al) => {
	const reg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
	if (!reg.test(el.value)) {
		al.textContent = 'Proszę wpisać poprawny adres e-mail.'
		verEffect(el, al)
	}
}

const verMessage = (el, al) => {
	if (el.value.length < 30) {
		al.textContent = 'Wiadomość musi składać się z co najmniej 30 znaków.'
		verEffect(el, al)
	}
}

const verCheckbox = (el, al) => {
	if (el.checked == false) {
		al.textContent = 'Proszę wyrazić zgodę.'
		verEffect(el, al)
	}
}

const alertOn = () => {
	alertElements.forEach(el => {
		el.classList.add('contact__animation--on')
		el.classList.remove('contact__animation--off')
	})
}

const alertOff = () => {
	alertElements.forEach(el => {
		el.classList.remove('contact__animation--on')
		el.classList.add('contact__animation--off')
	})
	formAll.forEach(el => {
		el.value = ''
		el.checked = false
	})
}

const verReset = () => {
	error = 0
	formAll.forEach((el, index) => {
		const al = formAlert[index]
		el.style.borderColor = 'rgb(118, 118, 118)'
		al.style.visibility = 'hidden'
		switch (index) {
			case 0:
				verName(el, al)
				break
			case 1:
				verEmail(el, al)
				break
			case 2:
				verMessage(el, al)
				break
			case 3:
				verCheckbox(el, al)
				break
		}
	})
	if (error == 0) {
		alertOn()
	}
}

formBtn.addEventListener('click', verReset)
alertElements[1].addEventListener('click', alertOff)
alertElements[2].addEventListener('click', alertOff)
