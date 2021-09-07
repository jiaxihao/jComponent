'use strict'

import JRaw from './components/j-raw'
import JButton from './components/j-button'
import JButtonGroup from './components/j-button-group'
import JLink from './components/j-link'
import JRadio from './components/j-radio'
import JRadioGroup from './components/j-radio-group'
import JCheckbox from './components/j-checkbox'
import JCheckboxGroup from './components/j-checkbox-group'

import './iconfont/iconfont.css'

import Global from './utils/global'

const components = [
	JRaw,
	JButton,
	JButtonGroup,
	JLink,
	JRadio,
	JRadioGroup,
	JCheckbox,
	JCheckboxGroup
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
