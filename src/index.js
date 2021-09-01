'use strict'

import JButton from './components/j-button'
import JButtonGroup from './components/j-button-group'
import JLink from './components/j-link'

import Global from './utils/global'

const components = [
	JButton,
	JButtonGroup,
	JLink
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
