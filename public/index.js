const toScroll = (elem, loc = '') => {
	let temp = typeof elem != 'string' ? elem : document.getElementById(elem)
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
]
sections[headerUl.children.length - 2] = 'footer'
for (let i = 0; i < headerUl.children.length; i++) {
	headLinks[i] = document.getElementById(
		headerUl?.children[i]?.attributes?.id?.value
	)
	toScroll(headLinks[i], sections[i])

	document.getElementById('footerScript') &&
		// FOR FOOTER COMPONENT
		toScroll(`headerLinks${[i]}`, sections[i])
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
	counter[i] = counter[i]?.innerHTML * 1
}
const updated = pos => {
	if (flag[pos]) {
		document.getElementById(`counter${pos}`).innerHTML = ++upto[pos]
	}

	// if (flag[pos]) {
	if (upto[pos] >= counter[pos]) {
		clearInterval(counts[pos])
		// document.getElementById(`counter${pos}`).innerHTML = counter[pos]
		flag[pos] = false
	}
	// }
}

let headerElem = document.getElementById('headerElem')
let scrollUp = document.getElementById('scrollUp')

toScroll(scrollUp)

const scrollFunc = () => {
	console.log(
		'Console ~ file: index.html ~ line 253 ~ scrollFunc ~ document.documentElement.scrollTop',
		document.documentElement.scrollTop
	)
	headerElem.style.backgroundColor =
		document.documentElement.scrollTop > 120 ? '#374055e6' : 'transparent'

	scrollUp.classList =
		document.documentElement.scrollTop > 200
			? 'scroll-up'
			: 'scroll-up hidden-elem'
	// headerElem.style.position = document.documentElement.scrollTop > 120 ? 'fixed' : 'absolute'

	if (
		document.documentElement.scrollTop >= 490 &&
		document.documentElement.scrollTop <= 1165
	) {
		for (let i = 0; i < counter.length; i++) {
			counts[i] = setInterval(() => {
				updated(i)
			})
		}
	}
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
