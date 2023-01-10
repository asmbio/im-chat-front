const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  runtimeCompiler: true,
  productionSourceMap: false,
  publicPath: "",
  assetsDir: 'assets',
  devServer: {
    // historyApiFallback: true, // 不跳转
    // inline: true, // 实时刷新
    https: false, // 开启https
    port: 8081, // 端口号
    host: '127.0.0.1',  // 项目地址

    // proxy: {
		// 	'/maons/v0': {
		// 		target: 'http://127.0.0.1:8108', // 接口的域名
		// 		// secure: false,  // 如果是https接口，需要配置这个参数
		// 		changeOrigin: true, // 如果接口跨域，需要进行这个参数配置
		// 		pathRewrite: {
		// 			'^/maons/v0': '/maons/v0'
		// 		}		
		// 	}
		// },
 } ,
 
// dev: {
//   proxyTable: {
//       '/maons/v0': {
//           target: 'http://localhost:8108',
//           changeOrigin: true,
//       },
//   },
//   host: 'localhost',
//   port: 8080
//   }
});
