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
			const radioProps = item.componentOptions.propsData

			radioProps.value = this.value

			const radioOn = {
				change: (value) => {
					this.$emit('input', value)
				}
			}

			if (this.disabled === true) radioProps.disabled = true

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
