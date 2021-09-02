<template>
	<label class="j-radio" :class="classArray">
		<span class="j-radio-stone">
			<span class="j-radio-stone-inner"></span>
			<input type="radio" :disabled="disabled" :checked="checked" @change="handleChange" />
		</span>
		<span><slot></slot></span>
	</label>
</template>

<script>
export default {
	name: 'JRadio',
	props: {
		value: {
			type: [String, Number, Boolean],
			default: ''
		},
		label: {
			type: [String, Number, Boolean],
			default: ''
		},
		disabled: {
			type: Boolean,
			default: false
		},
		name: {
			type: String,
			default: ''
		}
	},
	data () {
		return {
			innerValue: '',
			checked: ''
		}
	},
	methods: {
		handleChange () {
			this.$emit('input', this.label)
			this.$emit('change', this.label)
		}
	},
	computed: {
		classArray () {
			const classArray = []

			if (this.checked) {
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
			handler () {
				this.innerValue = this.value
				this.checked = this.label && this.value === this.label
			},
			immediate: true
		}
	}
}
</script>

<style lang="scss">
.j-radio {
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

		.j-radio-stone {
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
		.j-radio-stone {
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
		.j-radio-stone {
			&-inner {

				@include theme_bg_color('primary-active');

				@include theme_brd_color('primary-active');
			}
		}

		@include theme_color('primary');
	}
}
</style>
