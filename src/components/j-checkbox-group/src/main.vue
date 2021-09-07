<script>
import JCheckbox from '../../j-checkbox'
export default {
	name: 'JCheckboxGroup',
	props: {
		value: {
			type: [String, Number, Boolean, Array],
			default: ''
		},
		disabled: { // overwrite children props
			type: Boolean,
			default: false
		},
		max: {
			type: Number,
			default: Infinity
		},
		min: {
			type: Number,
			default: 0
		}
	},
	render (createElement) {
		const children = []
		this.$slots.default.map(item => {
			if (item.componentOptions.tag !== 'j-checkbox') return
			const checkboxProps = item.componentOptions.propsData
			checkboxProps.value = this.value

			const checkboxOn = {
				change: (value) => {
					this.$emit('input', value)
					this.$emit('change', value)
				}
			}

			if (!isNaN(this.max) && !isNaN(this.min) && Array.isArray(this.value)) {
				if (this.value.length <= this.min) {
					if (this.value.includes(checkboxProps.label)) checkboxProps.disabled = true
				}
				if (this.value.length >= this.max) {
					if (!this.value.includes(checkboxProps.label)) checkboxProps.disabled = true
				}
			}

			if (this.disabled === true) checkboxProps.disabled = true

			const checkboxChildren = item.componentOptions.children

			children.push(createElement(JCheckbox, { props: checkboxProps, attrs: checkboxProps, on: checkboxOn }, checkboxChildren))
		})

		return createElement(
			'div',
			{
				class: 'j-checkbox-group'
			},
			children
		)
	}
}
</script>

<style>

</style>
