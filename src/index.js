'use strict'

import JButton from './components/j-button'

import Global from './utils/global'

const components = [
	JButton
]

const install = function (Vue) {
	components.forEach(component => {
		Vue.component(component.name, component)
	})

	Vue.use(Global)
}

export default {
	install
}
