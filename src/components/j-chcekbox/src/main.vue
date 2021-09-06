<template>
	<label class="j-checkbox" :class="classArray">
		<span class="j-checkbox-stone">
			<span class="j-checkbox-stone-inner"></span>
			<input type="checkbox" :name="name" :value="value" :checked="innerChecked" @change="handleChange" />
		</span>
		<span><slot></slot></span>
	</label>
</template>

<script>
export default {
	name: 'JCheckbox',
	props: {
		value: {
			type: [String, Number, Boolean, Array],
			default: ''
		},
		label: {
			type: [String, Number, Boolean],
			default: ''
		},
		trueLabel: {
			type: [String, Number],
			default: ''
		},
		falseLabel: {
			type: [String, Number],
			default: ''
		},
		disabled: {
			type: Boolean,
			default: false
		},
		name: {
			type: String,
			default: undefined
		},
		checked: {
			type: Boolean,
			default: false
		}
	},
	data () {
		return {
			innerChecked: false
		}
	},
	methods: {
		handleChange (e) {
			console.log(e)
			this.innerChecked = !this.innerChecked
			let res
			if (this.value instanceof Boolean) {
				res = this.innerChecked
			} else if (this.value instanceof Array) {
				const label = this.label ? this.label : this.trueLabel
				if (this.innerChecked) {
					if (this.value.indexOf(label) === -1) this.value.push(label)
					res = this.value
				} else {
					res = this.value.filter(item => item !== label)
				}
			} else {
				res = this.label ? this.label : this.trueLabel
			}
			this.$emit('input', res)
			this.$emit('change', res)
		}
	},
	computed: {
		classArray () {
			const classArray = []

			if (this.innerChecked) {
				classArray.push('is-checked')
			}

			if (this.disabled) {
				classArray.push('is-disabled')
			}

			return classArray
		}
	},
	watch: {
		checked (newVal) {
			this.innerChecked = newVal
		},
		value: {
			handler (newVal) {
				if (newVal instanceof Boolean) {
					this.innerChecked = this.checked || newVal
				} else if (newVal instanceof Array) {
					this.innerChecked = this.checked || (newVal.includes(this.label ? this.label : this.trueLabel))
				} else {
					this.innerChecked = this.checked || (newVal === (this.label ? this.label : this.trueLabel))
				}
			},
			immediate: true
		}
	}
}
</script>

<style lang="scss">
.j-checkbox {
	font-size: 14px;
	transition-duration: 0.2s;
	cursor: pointer;

	& + & {
		margin-left: 10px;
	}

	&-stone {
		position: relative;
		display: inline-block;
		margin-right: 4px;

		&-inner {
			position: relative;
			display: inline-block;
			width: 14px;
			height: 14px;
			border: 1px solid;
			border-radius: 50%;
			transform: translateY(2.5px);

			&:hover,
			&:focus {

				@include theme_brd_color('primary-hover');
			}

			&::after {
				position: absolute;
				top: 50%;
				left: 50%;
				width: 0;
				height: 0;
				border-radius: 4px;
				transform: translate(-50%, -50%) scale(0);
				transform-origin: center;
				transition: transform 0.15s ease-in;
				content: '';

				@include theme_bg_color('simple');
			}

			@include theme_brd_color('info');
		}

		input {
			position: absolute;
			z-index: -1;
			top: 0;
			left: 0;
			width: 14px;
			height: 14px;
			opacity: 0;
		}
	}

	&.is-disabled {
		cursor: not-allowed;

		.j-checkbox-stone {
			&-inner {
				&:hover,
				&:focus {

					@include theme_brd_color('info-disabled');
				}

				@include theme_brd_color('info-disabled');
			}
		}

		@include theme_brd_color('info-disabled');

		@include theme_color('info-disabled');
	}

	&.is-checked.is-disabled,
	&.is-checked {
		.j-checkbox-stone {
			&-inner {
				&::after {
					width: 5px;
					height: 5px;
					transform: translate(-50%, -50%) scale(1);
				}

				@include theme_bg_color('primary-disabled');

				@include theme_brd_color('primary-disabled');
			}
		}

		@include theme_color('info-disabled');
	}

	&.is-checked:not(.is-disabled) {
		.j-checkbox-stone {
			&-inner {

				@include theme_bg_color('primary-active');

				@include theme_brd_color('primary-active');
			}
		}

		@include theme_color('primary');
	}
}
</style>
