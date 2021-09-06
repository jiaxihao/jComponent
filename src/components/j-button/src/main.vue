<template>
	<button
		class="j-button"
		:class="classArray"
		:disabled="disabled"
		@click="handleClick"
	>
		<template v-if="icon">
			<i :class="icon"></i>
			<span v-if="!icon && !round"><slot></slot></span>
		</template>
		<template v-else-if="!round">
			<span><slot></slot></span>
		</template>
		<template v-else>
			<i :class="icon"></i>
		</template>
	</button>
</template>

<script>
export default {
	name: 'JButton',
	props: {
		size: {
			type: String,
			default: ''
		},
		type: {
			type: String,
			default: ''
		},
		circle: {
			type: Boolean,
			default: false
		},
		round: {
			type: Boolean,
			default: false
		},
		disabled: {
			type: Boolean,
			default: false
		},
		icon: {
			type: String,
			default: ''
		}
	},
	data () {
		return {
			active: false,
			hover: false
		}
	},
	methods: {
		handleClick (e) {
			this.$emit('click', e)
		}
	},
	computed: {
		classArray () {
			const allowTypes = ['primary', 'success', 'warn', 'danger', 'info', 'text']
			const allowSizes = ['mini', 'small', 'medium', 'large']

			const classArray = []

			let type = ''
			let size = ''

			if (this.type && allowTypes.includes(this.type)) {
				type = `j-button--${this.type}`
				classArray.push(type)
			} else if (this.type) {
				this.$warn(`type must be ${allowTypes.join(',')}`)
			}

			if (this.size && allowSizes.includes(this.size)) {
				size = `j-button-${this.size}`
				classArray.push(size)
			} else if (this.size) {
				this.$warn(`size must be ${allowSizes.join(',')}`)
			}

			if (this.circle) {
				const circle = `is-circle`
				classArray.push(circle)
			} else if (this.round) {
				const round = `is-round`
				classArray.push(round)
			}

			if (this.disabled) {
				const disabled = 'is-disabled'
				classArray.push(disabled)
			}

			return classArray
		}
	}
}
</script>

<style lang="scss">
.j-button {
	box-sizing: border-box;
	padding: 7px 14px;
	border: 1px solid;
	border-radius: 4px;
	outline: none;
	font-size: 14px;
	line-height: 1;
	transition-duration: 0.1s;
	cursor: pointer;
	-webkit-user-select: none;
	user-select: none;

	&.is-circle {
		border-radius: 20px;
	}

	&.is-round {
		padding: 8px;

		@extend .is-circle;
	}

	&-mini {
		padding: 5px 10px;
		font-size: 12px;
	}

	&-small {
		padding: 6px 12px;
		font-size: 12px;
	}

	&-large {
		padding: 8px 16px;
		font-size: 16px;
	}

	& + & {
		margin-left: 10px;
	}

	span {
		line-height: 1;
	}

	@include theme_brd_color('primary');

	@include theme_color('button-text');

	@include theme_bg_color('simple');
}

/** types start */

.j-button:hover:not(.is-disabled):not(.j-button--text),
.j-button:focus:not(.is-disabled):not(.j-button--text) {

	@include theme_color('primary-hover');

	@include theme_bg_color('default-hover');

	@include theme_brd_color('primary-hover');
}

.j-button:active:not(.is-disabled):not(.j-button--text) {

	@include theme_color('primary-active');

	@include theme_brd_color('primary-active');
}

.j-button--primary {

	@include theme_color('simple');

	@include theme_bg_color('primary');

	@include theme_brd_color('primary');
}

.j-button--primary:hover:not(.is-disabled):not(.j-button--text),
.j-button--primary:focus:not(.is-disabled):not(.j-button--text) {

	@include theme_color('simple');

	@include theme_bg_color('primary-hover');
}

.j-button--primary:active:not(.is-disabled):not(.j-button--text) {

	@include theme_color('simple');

	@include theme_bg_color('primary-active');
}

.j-button--warn {

	@include theme_color('simple');

	@include theme_bg_color('warn');

	@include theme_brd_color('warn');
}

.j-button--warn:hover:not(.is-disabled):not(.j-button--text),
.j-button--warn:focus:not(.is-disabled):not(.j-button--text) {

	@include theme_color('simple');

	@include theme_bg_color('warn-hover');

	@include theme_brd_color('warn-hover');
}

.j-button--warn:active:not(.is-disabled):not(.j-button--text) {

	@include theme_color('simple');

	@include theme_bg_color('warn-active');

	@include theme_brd_color('warn-active');
}

.j-button--danger {

	@include theme_color('simple');

	@include theme_bg_color('danger');

	@include theme_brd_color('danger');
}

.j-button--danger:hover:not(.is-disabled):not(.j-button--text),
.j-button--danger:focus:not(.is-disabled):not(.j-button--text) {

	@include theme_color('simple');

	@include theme_bg_color('danger-hover');

	@include theme_brd_color('danger-hover');
}

.j-button--danger:active:not(.is-disabled):not(.j-button--text) {

	@include theme_color('simple');

	@include theme_bg_color('danger-active');

	@include theme_brd_color('danger-active');
}

.j-button--info {

	@include theme_color('simple');

	@include theme_bg_color('info');

	@include theme_brd_color('info');
}

.j-button--info:hover:not(.is-disabled):not(.j-button--text),
.j-button--info:focus:not(.is-disabled):not(.j-button--text) {

	@include theme_color('simple');

	@include theme_bg_color('info-hover');

	@include theme_brd_color('info-hover');
}

.j-button--info:active:not(.is-disabled):not(.j-button--text) {

	@include theme_color('simple');

	@include theme_bg_color('info-active');

	@include theme_brd_color('info-active');
}

.j-button--success {

	@include theme_color('simple');

	@include theme_bg_color('success');

	@include theme_brd_color('success');
}

.j-button--success:hover:not(.is-disabled):not(.j-button--text),
.j-button--success:focus:not(.is-disabled):not(.j-button--text) {

	@include theme_color('simple');

	@include theme_bg_color('success-hover');

	@include theme_brd_color('success-hover');
}

.j-button--success:active:not(.is-disabled):not(.j-button--text) {

	@include theme_color('simple');

	@include theme_bg_color('success-active');

	@include theme_brd_color('success-active');
}

.j-button--text {
	padding-right: 0;
	padding-left: 0;
	border: none;

	@include theme_color('primary');
}

.j-button--text:hover:not(.is-disabled),
.j-button--text:focus:not(.is-disabled) {

	@include theme_color('primary-hover');
}

.j-button--text:active:not(.is-disabled) {

	@include theme_color('primary-active');
}

/** types end */

/** disabled start */

.j-button.is-disabled {
	cursor: not-allowed;

	@include theme_color('button-text-disabled');

	@include theme_brd_color('primary-disabled');

	@include theme_bg_color('simple');
}

.j-button--primary.is-disabled {

	@include theme_color('simple-disabled');

	@include theme_brd_color('primary-disabled');

	@include theme_bg_color('primary-disabled');
}

.j-button--success.is-disabled {

	@include theme_color('simple-disabled');

	@include theme_brd_color('success-disabled');

	@include theme_bg_color('success-disabled');
}

.j-button--warn.is-disabled {

	@include theme_color('simple-disabled');

	@include theme_brd_color('warn-disabled');

	@include theme_bg_color('warn-disabled');
}

.j-button--danger.is-disabled {

	@include theme_color('simple-disabled');

	@include theme_brd_color('danger-disabled');

	@include theme_bg_color('danger-disabled');
}

.j-button--info.is-disabled {

	@include theme_color('simple-disabled');

	@include theme_brd_color('info-disabled');

	@include theme_bg_color('info-disabled');
}

/** disabled end */
</style>
