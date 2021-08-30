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
			const allowTypes = ['primary', 'success', 'warn', 'danger']
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

			return classArray
		}
	}
}
</script>

<style lang="scss">
.j-button {
	padding: 7px 14px;
	border: 1px solid;
	border-radius: 3px;
	outline: none;
	font-size: 16px;
	color: #333;
	background: #fff;
	transition-duration: 0.1s;
	cursor: pointer;

	@include theme_brd_color('primary');
}

/** sizes start */

.j-button-mini {
	padding: 5px 10px;
	font-size: 12px;
}

.j-button-small {
	padding: 6px 12px;
	font-size: 14px;
}

.j-button-large {
	padding: 8px 16px;
	font-size: 18px;
}

/** sizes end */

/** status start */

.j-button:hover,
.j-button:focus {
	color: #ddd;
	background: yellow;
}

.j-button:active {
	color: #eee;
	background: red;
}

/** status end */

/** types start */

.j-button--primary {
	border-color: blue;
	color: #fff;
	background: blue;
}

.j-button--primary:hover,
.j-button--primary:focus {
	color: #ddd;
	background: yellow;
}

.j-button--primary:active {
	color: #eee;
	background: red;
}

/** types end */
</style>
