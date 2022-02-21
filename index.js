let { documentElement: html, body } = document
let defaultHtmlOverflow, defaultBodyOverflow

export let hideScroll = () => {
	if (html.scrollHeight > html.clientHeight) {
		// store existing overflow style
		defaultHtmlOverflow =
			defaultHtmlOverflow || getComputedStyle(html).overflowY
		defaultBodyOverflow =
			defaultBodyOverflow || getComputedStyle(body).overflowY
		// hide overflow
		html.style.overflowY = 'hidden'
		body.style.overflowY = 'scroll'
	}
}

export let showScroll = () => {
	// show overflow
	html.style.overflowY = defaultHtmlOverflow
	body.style.overflowY = defaultHtmlOverflow
}
