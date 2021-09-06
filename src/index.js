'use strict'

import JButton from './components/j-button'
import JButtonGroup from './components/j-button-group'
import JLink from './components/j-link'
import JRadio from './components/j-radio'
import JRadioGroup from './components/j-radio-group'
import JCheckbox from './components/j-chcekbox'

import './iconfont/iconfont.css'

import Global from './utils/global'

const components = [
	JButton,
	JButtonGroup,
	JLink,
	JRadio,
	JRadioGroup,
	JCheckbox
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
