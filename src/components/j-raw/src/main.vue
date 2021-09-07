<template>
	<div class="j-raw">
		<div :id="id" class="j-raw-title" @click="setAnchor">{{ name }}</div>
		<slot></slot>
	</div>
</template>

<script>
export default {
	name: 'JRaw',
	props: {
		id: {
			type: String,
			default: ''
		},
		name: {
			type: String,
			default: ''
		}
	},
	mounted () {
		const name = decodeURIComponent(location.hash).split('#')[1]
		if (name === this.name) this.setAnchor()
	},
	methods: {
		setAnchor () {
			if (!this.id) return

			location.href = `#${this.name}`

			const dom = document.querySelector(`#${this.id}`)

			dom && dom.scrollIntoView({
				behavior: 'smooth'
			})
		}
	}
}
</script>

<style lang="scss">
.j-raw {
	&-title {
		margin-bottom: 10px;
		font-size: 16px;
		color: $title;
	}
}
</style>
