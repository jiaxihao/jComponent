<template>
	<div class="example">
		<div class="row">
			<j-button size="mini" @click="handleClick">jiaxihao</j-button>
			<j-button size="small" @click="handleClick">jiaxihao</j-button>
			<j-button @click="handleClick">jiaxihao</j-button>
			<j-button size="large" @click="handleClick">jiaxihao</j-button>
		</div>
		<div class="row">
			<j-button @click="handleClick">jiaxihao</j-button>
			<j-button type="primary" @click="handleClick">jiaxihao</j-button>
			<j-button type="success" @click="handleClick">jiaxihao</j-button>
			<j-button type="warn" @click="handleClick">jiaxihao</j-button>
			<j-button type="danger" @click="handleClick">jiaxihao</j-button>
		</div>
	</div>
</template>

<script>
export default {
	methods: {
		handleClick (e) {
			// console.log(e)
		}
	}
}
</script>

<style>

</style>
