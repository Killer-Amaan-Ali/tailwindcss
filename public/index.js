const toScroll = (elem, loc = 'footer') => {
	let temp = typeof elem !== 'string' ? elem : document.getElementById(elem)
	temp.addEventListener('click', () => {
		location.href = `#${loc}`
	})
}
let headerUl = document.getElementById('headerUl')
let headLinks = []
let sections = [
	'banner',
	'aboutSection',
	'servicesSection',
	'portfolioSection',
	'teamSection',
	'pricingSection',
	'footer',
	// 'contactSection',
]

for (let i = 0; i < headerUl.children.length; i++) {
	headLinks[i] = document.getElementById(
		headerUl?.children[i]?.attributes?.id?.value
	)
	toScroll(headLinks[i], sections[i])

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
}
scrollFunc()

// let obj = [
// 	{ name: 'sulaman', age: 38, sName: 'wadi' },
// 	{ name: 'amaan', age: 18, sName: 'ali' },
// 	{ name: 'mariyam', age: 49, sName: 'wadi' },
// ]

// let alpha = ['a', 'b']
// let num = [1, 2]
// const fire = (a = 0, b = 0) => {
// let updatedArray = []
// for (let i = 0; i < obj.length; i++) {
// 	updatedArray[i].name = obj[i].name
// }
// updatedArray.map()
// console.log(updatedArray)
// let news = []
// news = [...alpha, ...num]
// console.log('Console ~ file: index.js ~ line 60 ~ fire ~ alpha', news)
// console.log((a || 0) + (b || 0))
// console.log(a > 50 ? a + b : a - b)
// }
// fire(60, 10)

let sliderWrapper = document.getElementById('sliderWrapper')
let sliderCounters = document.getElementById('sliderCounters')
let modified
let temp = ``
let noOfCards = 3

const sliderActive = e => {
	window.innerWidth <= 768
		? (sliderWrapper.setAttribute('style', '--width:100%;'), (noOfCards = 1))
		: window.innerWidth <= 1280
		? (sliderWrapper.setAttribute('style', '--width:50%;'), (noOfCards = 2))
		: window.innerWidth <= 1336
		? (sliderWrapper.setAttribute('style', '--width:33%;'), (noOfCards = 3))
		: null

	let child = sliderWrapper.children[e.id]
	let width = child.getBoundingClientRect().width
	for (let i = 0; i < sliderCounters.children[0].children.length; i++) {
		sliderCounters.children[0].children[i].classList.remove('active')
	}
	e.classList.add('active')
	let calc = width * e.id
	sliderWrapper.style.transform = `translate(-${calc}px, 0px)`
	current = e.id
}

modified = sliderWrapper.children.length - noOfCards
for (let i = 0; i <= modified; i++) {
	i === 0 ? (mode = 'active') : (mode = '')
	temp += `<span id="${i}" onclick="sliderActive(this)" class="${mode} material-symbols-outlined">fiber_manual_record</span>`
}
sliderCounters.children[0].innerHTML = temp
temp = ''

let current

// AUTO SCROLL
let i = 0
let number = 5
let seconds = number * 1000
const autoScroll = () => {
	i = current
	i < modified ? i++ : (i = 0)
	document.getElementById(i)?.click()
}
autoScroll()

var refreshIntervalId = setInterval(autoScroll, seconds)
const mouseIn = () => {
	clearInterval(refreshIntervalId)
}
const mouseOut = () => {
	var refreshIntervalId = setInterval(autoScroll, seconds)
}
