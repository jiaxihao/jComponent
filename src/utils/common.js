export const popUrl = (href) => {
	if (!href) return

	const link = document.createElement('a')

	link.href = href

	link.target = 'black'

	document.body.appendChild(link)

	link.click()

	link.remove()
}
