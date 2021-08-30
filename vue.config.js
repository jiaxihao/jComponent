module.exports = {
	chainWebpack: config => {
		config.entry('app').clear().add('./example/main.js')
	},
	css: {
		loaderOptions: {
			sass: {
				prependData: `@import "@/styles/handler.scss";`, // 引入全局变量
				data: `@import "@/styles/handler.scss";` // 引入全局变量
			}
		}
	}
}
