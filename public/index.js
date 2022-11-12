let lightboxWrapper = document.getElementById('lightboxWrapper')
let menuOpen = document.getElementById('menuOpen')
let menuClose = document.getElementById('menuClose')
let lightboxLinks = document.getElementById('lightboxLinks')
let headerUl = document.getElementById('headerUl')

lightboxLinks.innerHTML = headerUl.innerHTML

const closeNav = () => {
	lightboxWrapper.classList.add('invisibleBox')
}
const openNav = () => {
	lightboxWrapper.classList.remove('invisibleBox')
}

menuOpen.addEventListener('click', openNav)
// menuClose.addEventListener('click', closeNav)
lightboxWrapper.addEventListener('click', closeNav)

const toScroll = (elem, loc = 'footer') => {
	let temp = typeof elem !== 'string' ? elem : document.getElementById(elem)
	temp.addEventListener('click', () => {
		location.href = `#${loc}`
	})
}
let headLinks = []
let headModalLinks = []
let sections = [
	'banner',
	'aboutSection',
	'servicesSection',
	'testimonialsSection',
	'portfolioSection',
	'teamSection',
	'pricingSection',
	'footer',
	'contactSection',
]

for (let i = 0; i < headerUl.children.length; i++) {
	// headLinks[i] = headerUl?.children[i]?.attributes?.id?.value

	headLinks[i] = document.getElementById(
		headerUl?.children[i]?.attributes?.id?.value
	)
	toScroll(headLinks[i], sections[i])

	// FOR MODAL
	lightboxLinks.children[i].attributes.id.value += 'Modal'
	headModalLinks[i] = lightboxLinks?.children[i]?.attributes?.id?.value
	toScroll(headModalLinks[i], sections[i])

	// FOR FOOTER COMPONENT
	document.getElementById('footerScript') &&
		toScroll(`headerLinks${[i]}`, sections[i])
	headLinks[i] = headLinks[i].attributes.id.value
}

let counterWrapper = document.getElementById('counterWrapper')
let counter = []
let counts = []
let flag = []
let upto = []
for (let i = 0; i < counterWrapper.children.length; i++) {
	upto[i] = 0
	flag[i] = 'true'
	counter[i] = document.getElementById(`counter${i}`)
	// counter[i] = counter[i]?.innerHTML * 1
	counter[i] = counter[i]?.attributes?.value?.value * 1
}
const updated = pos => {
	if (flag[pos]) {
		document.getElementById(`counter${pos}`).innerHTML = ++upto[pos]
	}

	if (flag[pos]) {
		if (upto[pos] >= counter[pos]) {
			clearInterval(counts[pos])
			// document.getElementById(`counter${pos}`).innerHTML = counter[pos]
			flag[pos] = false
		}
	}
}

let headerElem = document.getElementById('headerElem')
let scrollUp = document.getElementById('scrollUp')

toScroll(scrollUp, '')

const scrollFunc = () => {
	let scroll = document.documentElement.scrollTop
	// console.log(
	// 	'Console ~ file: index.html ~ line 253 ~ scrollFunc ~ scroll',
	// 	scroll
	// )
	headerElem.style.backgroundColor = scroll > 120 ? '#374055e6' : 'transparent'
	scrollUp.classList = scroll > 200 ? 'scroll-up' : 'scroll-up hidden-elem'

	// OLD DEPRECATED
	// classChange('home', 0, 300)
	// classChange('about', 490, 1000)
	// classChange('services', 1111, 1840)
	// OLD DEPRECATED

	// scrollActive('home', 'banner')
	// scrollActive('services', 'servicesSection', 150)
	for (let i = 0; i < headLinks.length; i++) {
		scrollActive(headLinks[i], sections[i], 100)
		// FOR FOOTER COMPONENT
		document.getElementById('footerScript') &&
			scrollActive(`headerLinksLi${[i]}`, sections[i], 100)
		// FOR MODAL
		scrollActive(headModalLinks[i], sections[i], 100)
	}

	// FOR COUNTER ANIMATION
	let countSect = document
		.getElementById('countSection')
		?.getBoundingClientRect()
	if (countSect.top <= 600 || countSect.bottom <= -60) {
		for (let i = 0; i < counter.length; i++) {
			counts[i] = setInterval(() => {
				updated(i)
			})
		}
	}

	// FOR COUNTER OLD ANIMATION

	// if (scroll >= 490 && scroll <= 1165) {
	// 	for (let i = 0; i < counter.length; i++) {
	// 		counts[i] = setInterval(() => {
	// 			updated(i)
	// 		})
	// 	}
	// }
}

// OLD DEPRECATED
// const classChange = (elem, min, max) => {
// 	let scroll = document.documentElement.scrollTop
// 	let temp = typeof elem !== 'string' ? elem : document.getElementById(elem)
// 	temp.classList = (scroll >= min) & (scroll < max) ? 'active' : ''
// }

const scrollActive = (elem, mount = 'footer', breathe = 100) => {
	let temp = typeof elem !== 'string' ? elem : document.getElementById(elem)
	let bound = document?.getElementById(mount)?.getBoundingClientRect()
	// console.log(
	// 	'Console ~ file: index.js ~ line 106 ~ scrollActive ~ bound',
	// 	bound
	// )
	temp.classList =
		(bound?.top <= breathe) & (bound?.bottom >= -breathe) ? 'active' : ''
}

window.onscroll = () => {
	scrollFunc()
	closeNav()
}
scrollFunc()

let infiniteSlider = false
infiniteSlider = true
let sliderWrapper = document.getElementById('sliderWrapper')
sliderWrapper.classList.remove('default')
let sliderCounters = document.getElementById('sliderCounters')
let modified = sliderWrapper?.children.length
let temp = ``
let noOfCards = 3

const updateWidth = () => {
	// responsive
	// console.log(window.innerWidth)
	window.innerWidth <= 768
		? (noOfCards = 1)
		: window.innerWidth <= 1280
		? (noOfCards = 2)
		: window.innerWidth <= 1336
		? (noOfCards = 3)
		: null
	// window.innerWidth <= 768
	// 	? (sliderWrapper.setAttribute('style', '--width:100%;'), (noOfCards = 1))
	// 	: window.innerWidth <= 1280
	// 	? (sliderWrapper.setAttribute('style', '--width:50%;'), (noOfCards = 2))
	// 	: window.innerWidth <= 1336
	// 	? (sliderWrapper.setAttribute('style', '--width:33%;'), (noOfCards = 3))
	// 	: null
}
updateWidth()
if (infiniteSlider) {
	// for infinite carousel
	modified = sliderWrapper?.children.length - 1
} else {
	modified = sliderWrapper?.children.length - noOfCards
}
// console.log('sliderWrapper.children.length', sliderWrapper.children.length)
// console.log('noOfCards', noOfCards)
let coun = 0
let infiCarousFlag = false
let transformMode = true
// transformMode = false

const sliderActive = e => {
	// TO DELAY NEXT SLIDE AFTER CLICK
	let delay = true
	// delay = false
	if (delay) {
		clearInterval(refreshIntervalId)
		refreshIntervalId = setInterval(autoScroll, seconds)
	}

	// if (!e.classList.contains('active')) {
	let child = sliderWrapper.children[e.id]
	let width = child.getBoundingClientRect().width
	for (let i = 0; i < sliderCounters.children[0].children.length; i++) {
		sliderCounters.children[0].children[i].classList.remove('active')
	}
	e?.classList?.add('active')
	let calc
	calc = width * e.id
	// console.log('e.id', +e.id)
	// console.log('width', +width)
	// console.log('calc', +calc)

	if (!infiniteSlider) {
		transformMode
			? (sliderWrapper.style.transform = `translate(-${calc}px, 0px)`)
			: (sliderWrapper.children[0].style.marginLeft = `-${calc}px`)
	} else {
		coun = e.id
		// if (coun > 0) {
		// 	setTimeout(() => {
		// 		sliderWrapper.children[coun - 1].classList.add('shrink')
		// 	}, 200)
		// 	setTimeout(() => {
		// 		sliderWrapper.children[coun - 1].classList.remove('shrink')
		// 	}, 1000)
		// 	} else {
		// 	sliderWrapper.children[sliderWrapper.children.length - 1].classList.add(
		// 		'shrink'
		// 	)
		// 	setTimeout(() => {
		// 		sliderWrapper.children[
		// 			sliderWrapper.children.length - 1
		// 		].classList.remove('shrink')
		// 	}, 500)
		// }
		if (+coun == 0 && infiCarousFlag) {
			coun = sliderWrapper.children.length - noOfCards
			setTimeout(() => {
				sliderWrapper.classList.add('noTransition')
				transformMode
					? (sliderWrapper.style.transform = '')
					: (sliderWrapper.children[0].style.marginLeft = `0`)
			}, 1000)
			setTimeout(() => {
				sliderWrapper.classList.remove('noTransition')
			}, 1100)
		}
		if (+coun == sliderWrapper.children.length - noOfCards - 1) {
			infiCarousFlag = true
		} else if (
			+coun >= 0 &&
			+coun <= sliderWrapper.children.length - noOfCards - 1
		) {
			infiCarousFlag = false
		}
		// console.log(infiCarousFlag)
		// console.log('+coun', +coun)
		// console.log('+e.id', +e.id)
		// console.log('sliderWrapper.children.length', sliderWrapper.children.length)
		calc = width * coun
		transformMode
			? (sliderWrapper.style.transform = `translate(-${calc}px, 0px)`)
			: (sliderWrapper.children[0].style.marginLeft = `-${calc}px`)
	}
	current = e.id
	// }
}
if (infiniteSlider) {
	for (let i = 0; i < noOfCards; i++) {
		sliderWrapper &&
			(sliderWrapper.innerHTML += `<li>${sliderWrapper.children[i].innerHTML}</li>`)
	}
}

// AUTO SCROLL
let current
let i = 0
let number = 5
let seconds = number * 1000
const autoScroll = () => {
	i = current
	i < modified ? i++ : (i = 0)
	document.getElementById(i)?.click()
}
autoScroll()
setInterval(updateWidth, 1000)

var refreshIntervalId
refreshIntervalId = setInterval(autoScroll, seconds)
const mouseOut = () => {
	refreshIntervalId = setInterval(autoScroll, seconds)
	console.log('carousel played')
}
const mouseIn = () => {
	clearInterval(refreshIntervalId)
	console.log('carousel stopped')
}
// clearInterval(refreshIntervalId)
sliderWrapper &&
	(sliderWrapper.setAttribute('onmouseenter', 'mouseIn(this)'),
	sliderWrapper.setAttribute('onmouseleave', 'mouseOut(this)'))
const sliderDots = () => {
	for (let i = 0; i <= modified; i++) {
		i === 0 ? (mode = 'active') : (mode = '')
		temp += `<span id="${i}" onclick="sliderActive(this)" class="${mode} material-symbols-outlined">fiber_manual_record</span>`
	}
	sliderCounters.children[0].innerHTML = temp
	temp = ''
}

let portfolioCategories = document.getElementById('portfolioCategories')
let portfolioContent = document.getElementById('portfolioContent')
let categoryMode =
	portfolioCategories.getElementsByClassName('active')[0].innerHTML
let filteredMode = []

const categoryActive = e => {
	e.preventDefault()
	categoryMode = e.target.innerHTML
	for (let i = 0; i < portfolioCategories.children.length; i++) {
		portfolioCategories.children[i].classList.remove('active')
	}
	for (let i = 0; i < portfolioContent.children.length; i++) {
		filteredMode[i] =
			portfolioContent.children[i].getAttribute('portfolio-mode')
		if (filteredMode[i] !== categoryMode) {
			portfolioContent.children[i].classList.add('hide')
		} else {
			portfolioContent.children[i].classList.remove('hide')
		}
		if (categoryMode === 'all') {
			portfolioContent.children[i].classList.remove('hide')
		}
	}

	e.target.classList.add('active')
}

for (let i = 0; i < portfolioCategories.children.length; i++) {
	portfolioCategories.children[i].addEventListener('click', categoryActive)
}
sliderDots()
