var config = {
    entry: {
        main: './main'
    },
    output: {
        //目标输出目录
        path: '/public/assets',
        //资源文件引用目录
        publicPath: '/dist/',
        //输出文件的文件名
        filename: 'main.js'
    }
};
module.exports = config;