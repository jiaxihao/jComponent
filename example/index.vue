<template>
	<div class="example">
		<div class="row">
			<j-button size="mini" @click="handleClick">超小按钮</j-button>
			<j-button size="small" @click="handleClick">小型按钮</j-button>
			<j-button @click="handleClick">默认按钮</j-button>
			<j-button size="large" @click="handleClick">大型按钮</j-button>
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
			<j-button round icon="j-icon-wodefankui" @click="handleClick"></j-button>
			<j-button round icon="j-icon-zhengque" type="primary" @click="handleClick">主题按钮</j-button>
			<j-button round icon="j-icon-zhengque" type="success" @click="handleClick">成功按钮</j-button>
			<j-button round icon="j-icon-cuowu" type="warn" @click="handleClick">警告按钮</j-button>
			<j-button round icon="j-icon-cuowu" type="danger" @click="handleClick">危险按钮</j-button>
			<j-button round icon="j-icon-zhengque" type="info" @click="handleClick">信息按钮</j-button>
		</div>

		<div class="row">
			<j-button circle @click="handleClick">默认按钮</j-button>
			<j-button circle type="primary" @click="handleClick">主题按钮</j-button>
			<j-button circle type="success" @click="handleClick">成功按钮</j-button>
			<j-button circle type="warn" @click="handleClick">警告按钮</j-button>
			<j-button circle type="danger" @click="handleClick">危险按钮</j-button>
			<j-button circle type="info" @click="handleClick">信息按钮</j-button>
		</div>

		<div class="row">
			<j-button disabled @click="handleClick">默认按钮</j-button>
			<j-button disabled type="primary" @click="handleClick">主题按钮</j-button>
			<j-button disabled type="success" @click="handleClick">成功按钮</j-button>
			<j-button disabled type="warn" @click="handleClick">警告按钮</j-button>
			<j-button disabled type="danger" @click="handleClick">危险按钮</j-button>
			<j-button disabled type="info" @click="handleClick">信息按钮</j-button>
		</div>

		<div class="row">
			<j-button-group>
				<j-button @click="handleClick">默认按钮</j-button>
				<j-button disabled type="primary" @click="handleClick">主题按钮</j-button>
				<j-button type="primary" @click="handleClick">主题按钮</j-button>
				<j-button disabled type="primary" @click="handleClick">主题按钮</j-button>
				<j-button @click="handleClick">默认按钮</j-button>
			</j-button-group>
		</div>

		<div class="row">
			<j-button type="text" @click="handleClick">文字按钮</j-button>
			<j-button disabled type="text" @click="handleClick">主题按钮</j-button>
		</div>

		<div class="row">
			<j-link href="http://www.baidu.com" target="_blank">默认链接</j-link>
			<j-link type="primary">主题链接</j-link>
			<j-link type="success">成功链接</j-link>
			<j-link type="warn">警告链接</j-link>
			<j-link type="danger">危险链接</j-link>
		</div>

		<div class="row">
			<j-link disabled href="http://www.baidu.com" target="_blank">默认链接</j-link>
			<j-link disabled type="primary">主题链接</j-link>
			<j-link disabled type="success">成功链接</j-link>
			<j-link disabled type="warn">警告链接</j-link>
			<j-link disabled type="danger">危险链接</j-link>
		</div>

		<div class="row">
			<j-radio v-model="radio.radio1" label="1">备选项</j-radio>
			<j-radio v-model="radio.radio1" label="2">备选项</j-radio>
		</div>

		<div class="row">
			<j-radio v-model="radio.radio2" disabled label="1">备选项</j-radio>
			<j-radio v-model="radio.radio2" label="2">备选项</j-radio>
			<j-radio v-model="radio.radio2" label="3">备选项</j-radio>
		</div>

		<div class="row">
			<j-radio-group v-model="radio.radio3" disabled>
				<j-radio label="1">备选项</j-radio>
				<j-radio label="2">备选项</j-radio>
				<j-radio label="3">备选项</j-radio>
			</j-radio-group>
		</div>

		<!-- <div class="row">
			<j-checkbox v-model="checkbox.checkbox1" true-label="备选项1">备选项1</j-checkbox>
			<j-checkbox v-model="checkbox.checkbox1" true-label="备选项2">备选项2</j-checkbox>
			<j-checkbox v-model="checkbox.checkbox1" true-label="备选项3">备选项3</j-checkbox>
		</div> -->

		<div class="row">
			<j-checkbox v-model="checkbox.checkbox2" class="j-icon-zhengque" true-label="备选项1">备选项1</j-checkbox>
			<j-checkbox v-model="checkbox.checkbox2" true-label="备选项2">备选项2</j-checkbox>
			<j-checkbox v-model="checkbox.checkbox2" true-label="备选项3">备选项3</j-checkbox>
		</div>
	</div>
</template>

<script>
export default {
	data () {
		return {
			radio: {
				radio1: '1',
				radio2: '1',
				radio3: '1'
			},
			checkbox: {
				checkbox1: '备选项1',
				checkbox2: ['备选项2', '备选项3'],
				checkbox3: '3'
			}
		}
	},
	created () {
		this.$useTheme('default')
	},
	methods: {
		handleClick (e) {
			console.log(e)
		}
	},
	watch: {
		radio: {
			handler (newVal) {
				console.log(newVal)
			},
			deep: true
		},
		checkbox: {
			handler (newVal) {
				console.log(newVal)
			},
			deep: true
		}
	}
}
</script>

<style lang="scss">
.row {
	padding: 20px 0;
}
</style>
