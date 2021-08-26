module.exports = {
	chainWebpack: config => {
		config.entry('app').clear().add('./example/main.js')
	}
}
