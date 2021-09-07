<script>
import JCheckbox from '../../j-checkbox'
export default {
	name: 'JCheckboxGroup',
	props: {
		value: {
			type: [String, Number, Boolean],
			default: ''
		},
		disabled: { // overwrite children props
			type: Boolean,
			default: false
		}
	},
	render (createElement) {
		const children = []
		this.$slots.default.map(item => {
			const radioProps = {
				label: item.componentOptions.propsData.label,
				value: this.value,
				disabled: this.disabled ? true : item.componentOptions.propsData.disabled
			}

			const radioOn = {
				change: (value) => {
					this.$emit('input', value)
				}
			}

			const radioChildren = item.componentOptions.children

			children.push(createElement(JCheckbox, { props: radioProps, attrs: radioProps, on: radioOn }, radioChildren))
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
