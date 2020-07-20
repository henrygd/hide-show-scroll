let html = document.documentElement
let scrollbarWidth
let defaultOverflowStyle
let hidden

let hide = function () {
	if (hidden) {
		return
	}
	// store existing overflow style
	defaultOverflowStyle = defaultOverflowStyle || getComputedStyle(html).overflow
	// calculate scrollbar width if any
	scrollbarWidth = window.innerWidth - html.clientWidth
	// hide overflow
	html.style.overflow = 'hidden'
	// add padding to compensate for scrollbar and prevent shifting
	scrollbarWidth && (html.style.paddingRight = `${scrollbarWidth}px`)
	hidden = true
}

let show = function () {
	html.style.overflow = defaultOverflowStyle
	scrollbarWidth && (html.style.paddingRight = 0)
	hidden = false
}

export default { hide, show }
