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
		handleChange () {
			if (this.disabled) return
			this.innerChecked = !this.innerChecked
			let res
			if (typeof this.value === 'boolean') {
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
				res = this.label ? this.label : (this.innerChecked ? this.trueLabel : this.falseLabel)
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
		value: {
			handler (newVal) {
				if (typeof newVal === 'boolean') {
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
	color: $content;
	transition-duration: 0.2s;
	cursor: pointer;
	-webkit-user-select: none;
	user-select: none;

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
			border-radius: 3px;
			transform: translateY(2.5px);

			&:hover,
			&:focus {

				@include theme_brd_color('primary-hover');
			}

			&::after {
				position: absolute;
				top: 1px;
				left: 4px;
				width: 4px;
				height: 8px;
				border: 2px solid;
				border-top: 0;
				border-left: 0;
				transform: rotate(45deg) scaleY(0);
				transform-origin: center;
				transition: transform 0.15s ease-in;
				content: '';

				@include theme_brd_color('simple');
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
}

.j-checkbox.is-disabled {
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

.j-checkbox.is-checked {
	.j-checkbox-stone {
		&-inner {
			&::after {
				transform: rotate(45deg) scaleY(1);
			}

			@include theme_bg_color('primary-active');

			@include theme_brd_color('primary-active');
		}
	}

	@include theme_color('primary');
}

.j-checkbox.is-checked:not(.is-disabled) {
	.j-checkbox-stone {
		&-inner {

			@include theme_bg_color('primary-active');

			@include theme_brd_color('primary-active');
		}
	}

	@include theme_color('primary');
}

.j-checkbox.is-checked.is-disabled {
	.j-checkbox-stone {
		&-inner {

			@include theme_bg_color('primary-disabled');

			@include theme_brd_color('primary-disabled');
		}
	}

	@include theme_color('info-disabled');
}
</style>
