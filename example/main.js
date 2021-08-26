import Vue from 'vue'
import index from './index.vue'

import JComponent from '../src'

Vue.config.productionTip = false

Vue.use(JComponent)

new Vue({
	render: h => h(index)
}).$mount('#app')
