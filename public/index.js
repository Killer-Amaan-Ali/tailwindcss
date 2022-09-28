let counterWrapper = document.getElementById('counterWrapper')
let counter = []
let counts = []
let flag = [true, true, true, true]
let upto = [0, 0, 0, 0, 0]
for (let i = 0; i < counterWrapper.children.length; i++) {
	counter[i] = document.getElementById(`counter${i}`)
	counter[i] = counter[i]?.innerHTML * 1
}
const updated = pos => {
	document.getElementById(`counter${pos}`).innerHTML = ++upto[pos]

	if (upto[pos] >= counter[pos]) {
		clearInterval(counts[pos])
		// document.getElementById(`counter${pos}`).innerHTML = counter[pos]
		flag[pos] = false
	}
}

window.onscroll = () => {
	scrollFunc()
}

let headerElem = document.getElementById('headerElem')
const scrollFunc = () => {
	// console.log("Console ~ file: index.html ~ line 253 ~ scrollFunc ~ document.documentElement.scrollTop", document.documentElement.scrollTop)
	document.documentElement.scrollTop > 120
		? (headerElem.style.backgroundColor = '#374055e6')
		: (headerElem.style.backgroundColor = 'transparent')
	if (document.documentElement.scrollTop > 490) {
		for (let i = 0; i < counter.length; i++) {
			if (flag[i]) {
				counts[i] = setInterval(() => {
					updated(i)
				})
			}
		}
	}
}
