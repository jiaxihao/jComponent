<template>
	<button
		class="j-button"
		:class="classArray"
		@click="handleClick"
	>
		<span><slot></slot></span>
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
		status () {
			return this.active ? 'active' : this.hover ? 'hover' : 'default'
		},
		classArray () {
			const allowTypes = ['primary', 'success', 'warn', 'danger', 'info']
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
			}

			return classArray
		}
	}
}
</script>

<style lang="scss">
.j-button {
	padding: 7px 14px;
	border: 1px solid;
	border-radius: 4px;
	outline: none;
	font-size: 14px;
	transition-duration: 0.1s;
	cursor: pointer;

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

.is-circle {
	border-radius: 20px;
}

/** types start */

.j-button:hover,
.j-button:focus {

	@include theme_color('primary-hover');

	@include theme_bg_color('default-hover');

	@include theme_brd_color('primary-hover');
}

.j-button:active {

	@include theme_color('primary-active');

	@include theme_brd_color('primary-active');
}

.j-button--primary {

	@include theme_color('simple');

	@include theme_bg_color('primary');

	@include theme_brd_color('primary');
}

.j-button--primary:hover,
.j-button--primary:focus {

	@include theme_color('simple');

	@include theme_bg_color('primary-hover');
}

.j-button--primary:active {

	@include theme_color('simple');

	@include theme_bg_color('primary-active');
}

.j-button--warn {

	@include theme_color('simple');

	@include theme_bg_color('warn');

	@include theme_brd_color('warn');
}

.j-button--warn:hover,
.j-button--warn:focus {

	@include theme_color('simple');

	@include theme_bg_color('warn-hover');

	@include theme_brd_color('warn-hover');
}

.j-button--warn:active {

	@include theme_color('simple');

	@include theme_bg_color('warn-active');

	@include theme_brd_color('warn-active');
}

.j-button--danger {

	@include theme_color('simple');

	@include theme_bg_color('danger');

	@include theme_brd_color('danger');
}

.j-button--danger:hover,
.j-button--danger:focus {

	@include theme_color('simple');

	@include theme_bg_color('danger-hover');

	@include theme_brd_color('danger-hover');
}

.j-button--danger:active {

	@include theme_color('simple');

	@include theme_bg_color('danger-active');

	@include theme_brd_color('danger-active');
}

.j-button--info {

	@include theme_color('simple');

	@include theme_bg_color('info');

	@include theme_brd_color('info');
}

.j-button--info:hover,
.j-button--info:focus {

	@include theme_color('simple');

	@include theme_bg_color('info-hover');

	@include theme_brd_color('info-hover');
}

.j-button--info:active {

	@include theme_color('simple');

	@include theme_bg_color('info-active');

	@include theme_brd_color('info-active');
}

.j-button--success {

	@include theme_color('simple');

	@include theme_bg_color('success');

	@include theme_brd_color('success');
}

.j-button--success:hover,
.j-button--success:focus {

	@include theme_color('simple');

	@include theme_bg_color('success-hover');

	@include theme_brd_color('success-hover');
}

.j-button--success:active {

	@include theme_color('simple');

	@include theme_bg_color('success-active');

	@include theme_brd_color('success-active');
}

/** types end */
</style>
