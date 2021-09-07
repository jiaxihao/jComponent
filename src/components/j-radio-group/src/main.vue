<script>
import JRadio from '../../j-radio'
export default {
	name: 'JRadioGroup',
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
			if (item.componentOptions.tag !== 'j-radio') return
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

			children.push(createElement(JRadio, { props: radioProps, attrs: radioProps, on: radioOn }, radioChildren))
		})

		return createElement(
			'div',
			{
				class: 'j-radio-group'
			},
			children
		)
	}
}
</script>

<style>

</style>
