<template>
	<div class="example">
		<j-raw id="anniuchicun" name="按钮尺寸" class="row">
			<j-button size="mini" @click="handleClick">超小按钮</j-button>
			<j-button size="small" @click="handleClick">小型按钮</j-button>
			<j-button @click="handleClick">默认按钮</j-button>
			<j-button size="large" @click="handleClick">大型按钮</j-button>
		</j-raw>

		<j-raw id="anniuynagshi" name="按钮样式" class="row">
			<j-button @click="handleClick">默认按钮</j-button>
			<j-button type="primary" @click="handleClick">主题按钮</j-button>
			<j-button type="success" @click="handleClick">成功按钮</j-button>
			<j-button type="warn" @click="handleClick">警告按钮</j-button>
			<j-button type="danger" @click="handleClick">危险按钮</j-button>
			<j-button type="info" @click="handleClick">信息按钮</j-button>
		</j-raw>

		<j-raw id="yuanxinganniu" name="圆形按钮" class="row">
			<j-button round icon="j-icon-setting-box" @click="handleClick"></j-button>
			<j-button round icon="j-icon-check" type="primary" @click="handleClick">主题按钮</j-button>
			<j-button round icon="j-icon-check" type="success" @click="handleClick">成功按钮</j-button>
			<j-button round icon="j-icon-close" type="warn" @click="handleClick">警告按钮</j-button>
			<j-button round icon="j-icon-close" type="danger" @click="handleClick">危险按钮</j-button>
			<j-button round icon="j-icon-check" type="info" @click="handleClick">信息按钮</j-button>
		</j-raw>

		<j-raw id="yuanjiaoanniu" name="圆角按钮" class="row">
			<j-button circle @click="handleClick">默认按钮</j-button>
			<j-button circle type="primary" @click="handleClick">主题按钮</j-button>
			<j-button circle type="success" @click="handleClick">成功按钮</j-button>
			<j-button circle type="warn" @click="handleClick">警告按钮</j-button>
			<j-button circle type="danger" @click="handleClick">危险按钮</j-button>
			<j-button circle type="info" @click="handleClick">信息按钮</j-button>
		</j-raw>

		<j-raw id="anniujinyongzhuangtai" name="按钮禁用状态" class="row">
			<j-button disabled @click="handleClick">默认禁用</j-button>
			<j-button disabled type="primary" @click="handleClick">主题禁用</j-button>
			<j-button disabled type="success" @click="handleClick">成功禁用</j-button>
			<j-button disabled type="warn" @click="handleClick">警告禁用</j-button>
			<j-button disabled type="danger" @click="handleClick">危险禁用</j-button>
			<j-button disabled type="info" @click="handleClick">信息禁用</j-button>
		</j-raw>

		<j-raw id="anniuzu" name="按钮组" class="row">
			<j-button-group>
				<j-button @click="handleClick">默认按钮</j-button>
				<j-button disabled type="primary" @click="handleClick">主题按钮</j-button>
				<j-button type="primary" @click="handleClick">主题按钮</j-button>
				<j-button disabled type="primary" @click="handleClick">主题按钮</j-button>
				<j-button @click="handleClick">默认按钮</j-button>
			</j-button-group>
		</j-raw>

		<j-raw id="wenzianniu" name="文字按钮" class="row">
			<j-button type="text" @click="handleClick">文字按钮</j-button>
			<j-button disabled type="text" @click="handleClick">文字禁用</j-button>
		</j-raw>

		<j-raw id="wenzilianjie" name="文字链接" class="row">
			<j-link href="http://www.baidu.com" target="_blank">默认链接</j-link>
			<j-link type="primary">主题链接</j-link>
			<j-link type="success">成功链接</j-link>
			<j-link type="warn">警告链接</j-link>
			<j-link type="danger">危险链接</j-link>
		</j-raw>

		<j-raw id="lianjiejinyongzhuangtai" name="链接禁用状态" class="row">
			<j-link disabled href="http://www.baidu.com" target="_blank">默认链接</j-link>
			<j-link disabled type="primary">主题链接</j-link>
			<j-link disabled type="success">成功链接</j-link>
			<j-link disabled type="warn">警告链接</j-link>
			<j-link disabled type="danger">危险链接</j-link>
		</j-raw>

		<j-raw id="danxuankuang" name="单选框" class="row">
			<j-radio v-model="radio.radio1" label="1">备选项1</j-radio>
			<j-radio v-model="radio.radio1" label="2">备选项2</j-radio>
		</j-raw>

		<j-raw id="danxuankuangzu" name="单选框组" class="row">
			<j-radio v-model="radio.radio2" disabled label="1">备选项1</j-radio>
			<j-radio v-model="radio.radio2" label="2">备选项2</j-radio>
			<j-radio v-model="radio.radio2" label="3">备选项3</j-radio>
		</j-raw>

		<j-raw id="duoxuankuangzifuchuan" name="多选框-字符串" class="row">
			<j-checkbox v-model="checkbox.checkbox1" disabled label="备选项1"></j-checkbox>
			<j-checkbox v-model="checkbox.checkbox1" label="备选项2"></j-checkbox>
			<j-checkbox v-model="checkbox.checkbox1" label="备选项3"></j-checkbox>
			<div>{{ checkbox.checkbox1 }}</div>
		</j-raw>

		<j-raw id="duoxuankuangshuzu" name="多选框-数组" class="row">
			<j-checkbox v-model="checkbox.checkbox2" label="备选项1"></j-checkbox>
			<j-checkbox v-model="checkbox.checkbox2" label="备选项2"></j-checkbox>
			<j-checkbox v-model="checkbox.checkbox2" label="备选项3"></j-checkbox>
			<div>{{ checkbox.checkbox2 }}</div>
		</j-raw>

		<j-raw id="duoxuankuangbuer" name="多选框-布尔" class="row">
			<j-checkbox v-model="checkbox.checkbox3">备选项1</j-checkbox>
			<div>{{ checkbox.checkbox3 }}</div>
		</j-raw>

		<j-raw id="duoxuakuangzu" name="多选框组" class="row">
			<j-checkbox-group v-model="checkbox.checkbox4" disabled :max="2" :min="0">
				<j-checkbox label="备选项1"></j-checkbox>
				<j-checkbox label="备选项2"></j-checkbox>
				<j-checkbox label="备选项3"></j-checkbox>
				<j-checkbox label="备选项4"></j-checkbox>
				<j-checkbox label="备选项5"></j-checkbox>
			</j-checkbox-group>
			<div>{{ checkbox.checkbox4 }}</div>
		</j-raw>
	</div>
</template>

<script>
export default {
	data () {
		return {
			radio: {
				radio1: '1',
				radio2: '1'
			},
			checkbox: {
				checkbox1: '备选项1',
				checkbox2: ['备选项2', '备选项3'],
				checkbox3: true,
				checkbox4: ['备选项1', '备选项2']
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

	&:last-child {
		margin-bottom: 20vh;
	}
}
</style>
