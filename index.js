let html = document.documentElement
let scrollbarWidth
let hidden

let hide = function () {
	if (hidden) {
		return
	}
	scrollbarWidth = window.innerWidth - html.clientWidth
	html.style.overflow = 'hidden'
	scrollbarWidth && (html.style.paddingRight = `${scrollbarWidth}px`)
	hidden = true
}

let show = function () {
	html.style.overflow = 'auto'
	scrollbarWidth && (html.style.paddingRight = '0')
	hidden = false
}

export default { hide, show }
