const path = require('path');
module.exports ={
    mode : 'development',
    entry : path.resolve(__dirname,'src')+'/index.jsx',
    output : {
        path : path.resolve(__dirname,'dist'),
        filename : 'output.js'
    },
    module : {
        rules : [
            {
                test : /\.(js|jsx)$/,
                loader : 'babel-loader',
                exclude : /node_modules/
            },
            {
                test :/\.css$/,
                use : [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test :/\.scss$/,
                use : [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    devServer : {
        port :3501
    }
}