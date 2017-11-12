//引模块
const path = require('path');
const HtmlWebpackplugin = require('html-webpack-plugin');
const CleanWebpackplugin = require('clean-webpack-plugin'); 


const rv=(...a)=>path.resolve(__dirname,...a);  //拿参数 返回值是一个绝对路径

//配置文件
module.exports = {
    entry:'./src/app.js',
    output:{
        path: rv('dist'),
        filename: 'app.js'
    },
    devtool:'eval-source-map',
    module:{
        rules:[
            {
                test:/\.js$/,
                use:[
                    {
                        loader:'babel-loader',
                        options:{
                            presets:'react',
                            plugins:['transform-object-rest-spread']                            
                        }
                    },
                ],
                exclude:[             //性能优化,排除和use平级
                    rv('node_modules')
                ]
            },
            {
                test:/\.(jpg|jpeg|gif|png)$/,
                use:['file-loader']
            },
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            }            
        ],
        
    },
    plugins:[
        new HtmlWebpackplugin({
            filename:'index.html',
            template:'./src/index.html'
        }),
        new CleanWebpackplugin('[dist]')
    ],
    devServer:{
        open:true
    }
};