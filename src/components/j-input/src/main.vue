<template>
	<div class="j-input" :class="classArray">
		<input
			ref="jInputRef"
			class="j-input-ref"
			:type="innerType"
			:value="innerVal"
			:placeholder="placeholder"
			:disabled="disabled"
			@input="handleInput"
		/>
		<span
			v-if="clearIconVisible"
			class="j-input-suffix j-icon-close-circle j-input-clear-icon"
			@click="handleClear"
		></span>

		<span
			v-if="showPasswordVisible"
			class="j-input-suffix j-icon-eye j-input-show-password-icon"
			@click="toggleShowPassword"
		></span>

		<slot v-if="!clearIconVisible && !showPasswordVisible" name="prefix"></slot>

		<span v-if="prefixIcon" class="j-input-prefix" :class="prefixIcon"></span>

		<slot v-if="!clearIconVisible && !showPasswordVisible" name="suffix"></slot>

		<span v-if="suffixIcon" class="j-input-suffix" :class="suffixIcon"></span>
	</div>
</template>

<script>
export default {
	name: 'JInput',
	props: {
		value: {
			type: String,
			default: ''
		},
		size: {
			type: String,
			default: 'medium'
		},
		type: {
			type: String,
			default: 'text'
		},
		disabled: {
			type: Boolean,
			default: false
		},
		clearable: {
			type: Boolean,
			default: false
		},
		showPassword: {
			type: Boolean,
			default: false
		},
		prefixIcon: {
			type: String,
			default: ''
		},
		suffixIcon: {
			type: String,
			default: ''
		},
		placeholder: {
			type: String,
			default: '请输入内容'
		}
	},
	data () {
		return {
			innerVal: '',
			passwordVisible: false
		}
	},
	methods: {
		handleInput (e) {
			if (this.disabled) return
			const value = e.target.value

			this.$emit('input', value)
			this.$emit('change', value)
		},
		handleClear () {
			if (this.disabled) return
			this.$emit('input', '')
			this.$emit('change', '')
			this.$refs.jInputRef.focus()
		},
		toggleShowPassword () {
			if (this.disabled) return
			this.passwordVisible = !this.passwordVisible
			this.$nextTick(() => {
				this.$refs.jInputRef.focus()
			})
		}
	},
	computed: {
		classArray () {
			const allowSizes = ['mini', 'small', 'medium', 'large']

			const classArray = []

			let size = ''

			if (this.size && allowSizes.includes(this.size)) {
				size = `j-input-${this.size}`
				classArray.push(size)
			} else if (this.size) {
				this.$warn(`input size must be ${allowSizes.join(',')}`)
			}

			if (this.disabled) {
				const disabled = 'is-disabled'
				classArray.push(disabled)
			}

			if (this.prefixIcon || this.$slots.prefix) {
				classArray.push('j-input-prefixed')
			}

			if (this.clearable || this.showPassword || this.suffixIcon || this.$slots.suffix) {
				classArray.push('j-input-suffixed')
			}

			if (this.showPassword) {
				classArray.push('j-input-show-passowrd')
			}

			return classArray
		},
		innerType () {
			if (this.showPassword) return this.passwordVisible ? 'password' : 'text'
			return this.type
		},
		clearIconVisible () {
			return this.clearable && !!this.value
		},
		showPasswordVisible () {
			return this.showPassword
		}
	},
	watch: {
		value: {
			handler (newVal) {
				this.innerVal = newVal
			},
			immediate: true
		}
	}
}
</script>

<style lang="scss">
.j-input {
	position: relative;
	display: inline-block;

	& + & {
		margin-left: 10px;
	}

	&-ref {
		position: relative;
		z-index: 0;
		display: inline-block;
		flex-grow: 1;
		box-sizing: border-box;
		width: 100%;
		height: 38px;
		padding: 0 12px;
		border: 1px solid;
		border-radius: 4px;
		outline: none;
		font-size: inherit;
		line-height: 38px;
		background-image: none;
		transition: all 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
		-webkit-appearance: none;

		@include theme_bg_color('simple');
	}

	&-prefix,
	&-suffix {
		position: absolute;
		z-index: 4;
		right: 8px;
		width: 14px;
		height: 14px;
		transform: translateY(calc(50% + 3px));

		@include theme_color('info');
	}

	&-prefix {
		left: 8px;
	}

	&-suffix {
		right: 8px;
	}

	.j-input-clear-icon,
	.j-input-show-password-icon {
		opacity: 0;
		cursor: pointer;

		&:hover {

			@include theme_color('info-hover');
		}

		&:active {

			@include theme_color('info-active');
		}

		@include theme_color('info');
	}

	.j-input-show-password-icon {
		opacity: 1;
	}
}

.j-input.j-input-prefixed {
	.j-input-ref {
		padding-left: 30px;
	}
}

.j-input.j-input-suffixed {
	.j-input-ref {
		padding-right: 30px;
	}
}

.j-input:not(.is-disabled) {
	.j-input-ref {
		color: $content;

		&:focus + .j-input-clear-icon {
			opacity: 1;
			cursor: pointer;
		}

		&:hover {

			@include theme_brd_color('info-hover');
		}

		&:focus {

			@include theme_brd_color('primary-active');

			@include theme_boxsd_color('primary-active');
		}

		@include theme_brd_color('info');
	}
}

::-webkit-input-placeholder,
.input::-webkit-input-placeholder {
	font-size: 14px;

	@include theme_color('info-disabled');
}

.j-input.is-disabled {
	.j-input-ref {
		cursor: not-allowed;

		@include theme_brd_color('info-disabled');

		@include theme_bg_color('simple-disabled');

		@include theme_color('info-disabled');
	}

	.j-input-clear-icon {
		display: none;
	}
}
</style>
