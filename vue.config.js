'use strict'
const path = require('path')

function resolve (dir) {
	return path.join(__dirname, dir)
}

module.exports = {
	devServer: {
		port: process.env.port || process.env.npm_config_port || 3000,
		open: false
	},
	chainWebpack: config => {
		config.entry('app').clear().add('./example/main.js')

		config.resolve.alias.set('@', resolve('src'))
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
