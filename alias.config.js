// // 导出配置
// module.exports={
//     //表示配置我们的config
//     configureWebpack: {
//         resolve:{
//             extensions:[],
//             alias:{
//                 '@':'src',//默认别名
//                 'assets':'@/assets',
//                 'common':'@/common',
//                 'components':'@/components',
//                 'network':'@/network',
//                 'router':'@/router',
//                 'store':'@/store',
//                 'views':'@/views',
//             }
//         }
//     }
// }
// const path = require('path');
// function resolve (dir) {
//   return path.join(__dirname, dir)
// }
// module.exports = {
//   lintOnSave: true,
//   chainWebpack: (config)=>{
//     config.resolve.alias
//       .set('@$', resolve('src'))
//       .set('assets',resolve('src/assets'))
//       .set('components',resolve('src/components'))
//       .set('layout',resolve('src/layout'))
//       .set('base',resolve('src/base'))
//       .set('static',resolve('src/static'))
//   }
// }
