<template>
	<a class="j-link" :href="innerHref" :class="classArray" @click.prevent="handleClick">
		<span class="j-link-inner"><slot></slot></span>
	</a>
</template>

<script>
import { popUrl } from '@/utils/common'
export default {
	name: 'JLink',
	props: {
		type: {
			type: String,
			default: ''
		},
		href: {
			type: String,
			default: ''
		},
		target: {
			type: String,
			default: ''
		},
		underline: {
			type: Boolean,
			default: true
		},
		disabled: {
			type: Boolean,
			default: false
		}
	},
	data () {
		return {
			innerHref: ''
		}
	},
	mounted () {
		if (!this.disabled) this.innerHref = this.href
	},
	methods: {
		handleClick () {
			if (!this.href) return
			if (this.target === '_blank') {
				popUrl(this.href)
			} else {
				location.href = this.href
			}
		}
	},
	computed: {
		classArray () {
			const allowTypes = ['primary', 'success', 'warn', 'danger', 'info']

			const classArray = []

			let type = ''

			if (this.type && allowTypes.includes(this.type)) {
				type = `j-link--${this.type}`
				classArray.push(type)
			} else if (this.type) {
				this.$warn(`type must be ${allowTypes.join(',')}`)
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
.j-link {
	font-size: 14px;
	text-decoration: none;

	& + & {
		margin-left: 10px;
	}

	&.is-disabled {
		cursor: not-allowed;
	}

	@include theme_color('button-text');
}

.j-link:hover:not(.is-disabled),
.j-link:focus:not(.is-disabled) {
	text-decoration: underline 1px;
	text-underline-offset: 2px;

	@include theme_color('info-hover');
}

.j-link:active:not(.is-disabled) {

	@include theme_color('info-active');
}

.j-link--primary {
	&:hover:not(.is-disabled),
	&:focus:not(.is-disabled) {

		@include theme_color('primary-hover');
	}

	&:active:not(.is-disabled) {

		@include theme_color('primary-active');
	}

	&.is-disabled {

		@include theme_color('primary-disabled');
	}

	@include theme_color('primary');
}

.j-link--success {
	&:hover:not(.is-disabled),
	&:focus:not(.is-disabled) {

		@include theme_color('success-hover');
	}

	&:active:not(.is-disabled) {

		@include theme_color('success-active');
	}

	&.is-disabled {

		@include theme_color('success-disabled');
	}

	@include theme_color('success');
}

.j-link--warn {
	&:hover:not(.is-disabled),
	&:focus:not(.is-disabled) {

		@include theme_color('warn-hover');
	}

	&:active:not(.is-disabled) {

		@include theme_color('warn-active');
	}

	&.is-disabled {

		@include theme_color('warn-disabled');
	}

	@include theme_color('warn');
}

.j-link--danger {
	&:hover:not(.is-disabled),
	&:focus:not(.is-disabled) {

		@include theme_color('danger-hover');
	}

	&:active:not(.is-disabled) {

		@include theme_color('danger-active');
	}

	&.is-disabled {

		@include theme_color('danger-disabled');
	}

	@include theme_color('danger');
}
</style>
