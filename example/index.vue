<template>
	<div class="example">
		<div class="row">
			<j-button size="mini" @click="handleClick">jiaxihao</j-button>
			<j-button size="small" @click="handleClick">jiaxihao</j-button>
			<j-button @click="handleClick">jiaxihao</j-button>
			<j-button size="large" @click="handleClick">jiaxihao</j-button>
		</div>
		<div class="row">
			<j-button @click="handleClick">默认按钮</j-button>
			<j-button type="primary" @click="handleClick">主题按钮</j-button>
			<j-button type="success" @click="handleClick">成功按钮</j-button>
			<j-button type="warn" @click="handleClick">警告按钮</j-button>
			<j-button type="danger" @click="handleClick">危险按钮</j-button>
			<j-button type="info" @click="handleClick">信息按钮</j-button>
		</div>
		<div class="row">
			<j-button circle @click="handleClick">默认按钮</j-button>
			<j-button circle type="primary" @click="handleClick">主题按钮</j-button>
			<j-button circle type="success" @click="handleClick">成功按钮</j-button>
			<j-button circle type="warn" @click="handleClick">警告按钮</j-button>
			<j-button circle type="danger" @click="handleClick">危险按钮</j-button>
			<j-button circle type="info" @click="handleClick">信息按钮</j-button>
		</div>
	</div>
</template>

<script>
export default {
	created () {
		this.$useTheme('default')
	},
	methods: {
		handleClick (e) {
			// console.log(e)
		}
	}
}
</script>

<style lang="scss">
.row {
	padding: 20px 0;
}
</style>
