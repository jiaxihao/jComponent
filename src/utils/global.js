const messager = 'JComponent'

const infoMsgStart = '[info]:'

const warnMsgStart = '[warn]:'

const errorMsgStart = '[error]:'

const info = function (msg) {
	console.log(`${messager}  ${infoMsgStart}  ${msg}`)
}

const warn = function (msg) {
	console.warn(`${messager}  ${warnMsgStart}  ${msg}`)
}

const error = function (msg) {
	console.error(`${messager}  ${errorMsgStart}  ${msg}`)
}

const useTheme = function (themeName = 'default') {
	console.log('use theme ', themeName)
	document.body.setAttribute('data-theme', themeName)
}

export default function (Vue) {
	Vue.prototype.$info = info
	Vue.prototype.$warn = warn
	Vue.prototype.$error = error

	Vue.prototype.$useTheme = useTheme
}
