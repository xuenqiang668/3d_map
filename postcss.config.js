// module.exports = {
//     plugins: {
//         'postcss-pxtorem': {
//             selectorBlackList: [],
//             propList: ['*'],
//             minPixelValue: 1,
//             rootValue: 192, // 根元素字体大小 16/1.25
//             unitPrecision: 2, // 转换成rem后保留的小数点位数
//             exclude: /(node_module)/,
//             mediaQuery: false,
//         },
//     },
// };

// module.exports = {
//     plugins: {
//         'postcss-pxtorem': {
//             rootValue({ file }) {
//                 return file.indexOf('vant') !== -1 ? 37.5 : 75;
//             },
//             propList: ['*'],
//             selectorBlackList: [],  // 不转换的类名
//             exclude: /node_modules\/(?!vant)/i  // 排除node_modules下除了vant的依赖
//         }
//     }
// }