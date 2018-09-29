const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
    entry:'./render/main_server.js',
    target:'node',//是有node作为运行环境所以node的内置模块不会被打包
    externals:[nodeExternals()],//避免node_modules文件夹下的第三方模块被打包
    output:{
        libraryTarget:'commonjs2',//规定导出代码符合nboe运行的commonjs规范
        filename: 'server.js',
        path:path.resolve(__dirname, './dist'),
    },
    module:{
        rules:[
            {
                test:/(\.js|\.jsx)$/,
                exclude:[
                    path.resolve(__dirname, 'node_modules'),
                ],
                use:['babel-loader'],                    
            },
            {
                test:/\.css$/,
                use:['ignore-loader'],
            
            },
            {
                test:/\.scss$/,
                use:['ignore-loader','sass-loader'],
            
            }

        ]
    },
    devtool:'source-map'
}