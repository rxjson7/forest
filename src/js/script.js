const hamburgerBtn = document.querySelector('.nav__hamburger')
const mobileMenu = document.querySelector('.nav__mobile')
const navMobileLi = document.querySelectorAll('.nav__mobile--li')
const footerCompany = document.querySelector('.footer__company span')
const scroll = document.querySelector('.scroll')

//MENU

const addRemoveClass = () => {
	if (document.body.style.overflowY == 'hidden') {
		document.body.style.overflowY = 'visible'
		mobileMenu.style.display = 'none'
	} else {
		document.body.style.overflowY = 'hidden'
		mobileMenu.style.display = 'flex'
	}
	let n = 1
	navMobileLi.forEach(li => {
		li.classList.toggle('nav__mobile--li-a' + n)
		n++
	})
}

const showCloseMobileMenu = () => {
	mobileMenu.classList.toggle('nav__mobile-animation')
	addRemoveClass()
}

const closeMobileMenu = () => {
	mobileMenu.classList.remove('nav__mobile-animation')
	addRemoveClass()
}

navMobileLi.forEach(li => {
	li.addEventListener('click', closeMobileMenu)
})

//FOOTER

const dateFooter = () => {
	footerCompany.innerHTML = '&copy;' + new Date().getFullYear()
}

const scrollShow = () => {
	if (window.scrollY > 150) {
		scroll.classList.add('scroll__on')
		scroll.classList.remove('scroll__off')
	} else if(scroll.classList.contains('scroll__on')){
		scroll.classList.add('scroll__off')
		scroll.classList.remove('scroll__on')
	}
}

const scrollAction = () => {
	window.scrollTo(0, 0)
}

//LISTENER & FUNCTION CALL

hamburgerBtn.addEventListener('click', showCloseMobileMenu)
window.addEventListener('scroll', scrollShow)
scroll.addEventListener('click', scrollAction)
dateFooter()
